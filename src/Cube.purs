module Cube where

import Prelude

import Control.Monad.Aff (Aff)
import Control.Monad.Aff.AVar (AVAR)
import Control.Monad.Eff.Console (log, CONSOLE)
import DOM (DOM)
import DOM.HTML (window) as DOM
import DOM.HTML.Types (htmlDocumentToDocument) as DOM
import DOM.HTML.Window (document) as DOM
import Data.Array (snoc, length, dropEnd,  mapWithIndex, (!!))
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Tuple (Tuple(..))
import Global as G
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Halogen.Query.EventSource as ES
import Keyboard as K
import Math (cos, sin)
import Svg.Attributes as SA
import Svg.Elements as SE
import Type.Data.Boolean (kind Boolean)

-- Core Types
type Distance = Number



type Angle = Number

type Point2D =
  { x :: Distance
  , y :: Distance
  }

type Point3D =
  { x :: Distance
  , y :: Distance
  , z :: Distance
  }

type Face =
  { corNum1 :: Int
  , corNum2 :: Int
  , corNum3 :: Int
  , corNum4 :: Int
  , colR :: Int
  , colG :: Int
  , colB :: Int
  }

type Edge = Tuple Int Int

type Shape =
  { vertices :: Array Point3D
  , edges :: Array Edge
  , faces :: Array Face
  }

type Angle3D =
  { xa :: Angle
  , ya :: Angle
  , za :: Angle
  }

type AngVelocity3D = Angle3D -- velocity = angle/sec

type RotatingShape =
  { shape :: Shape
  , angVel :: AngVelocity3D
  , forward :: Number
  , velSpeed :: Number
  , idx ::Int
  }

data Axis = X | Y | Z


-- Model / State
type State = 
  {
    shapes :: Array RotatingShape,
    shapeCnt :: Int,
    rate :: Number
  }

-- Values

viewBoxSize :: Number
viewBoxSize = 600.0

viewCenter :: Point2D
viewCenter =
  { x: viewBoxSize / 2.0
  , y: viewBoxSize / 2.0
  }

frameRate :: Number
frameRate = 200.0

oneDegInRad :: Angle
oneDegInRad = 0.01745329255

tenDegInRad :: Angle
tenDegInRad = oneDegInRad * 10.0

accelerateBy :: Number
accelerateBy = oneDegInRad * 50.0


dampenPercent :: Number
dampenPercent = 1.0 - (0.9 / frameRate) -- 10% per second

initCube :: RotatingShape
initCube = 
  { shape:
      { vertices:
          [ { x:  100.0, y:  100.0, z:  100.0 }
          , { x: -100.0, y:  100.0, z:  100.0 }
          , { x:  100.0, y: -100.0, z:  100.0 }
          , { x: -100.0, y: -100.0, z:  100.0 }
          , { x:  100.0, y:  100.0, z: -100.0 }
          , { x: -100.0, y:  100.0, z: -100.0 }
          , { x:  100.0, y: -100.0, z: -100.0 }
          , { x: -100.0, y: -100.0, z: -100.0 }
          ]
      , edges:
          [ Tuple 0 1
          , Tuple 0 2
          , Tuple 0 4
          , Tuple 1 5
          , Tuple 1 3
          , Tuple 2 3
          , Tuple 2 6
          , Tuple 4 5
          , Tuple 4 6
          , Tuple 3 7
          , Tuple 6 7
          , Tuple 5 7
          ]
      , faces:
          [ {corNum1: 1, corNum2: 5, corNum3: 7, corNum4: 3, colR: 0, colG: 0, colB: 255}
          , {corNum1: 5, corNum2: 4, corNum3: 6, corNum4: 7, colR: 0, colG: 255, colB: 0}
          , {corNum1: 7, corNum2: 6, corNum3: 2, corNum4: 3, colR: 255, colG: 0, colB: 0}
          , {corNum1: 1, corNum2: 3, corNum3: 2, corNum4: 0, colR: 0, colG: 255, colB: 255}
          , {corNum1: 1, corNum2: 0, corNum3: 4, corNum4: 5, colR: 255, colG: 255, colB: 0}
          , {corNum1: 2, corNum2: 6, corNum3: 4, corNum4: 0, colR: 255, colG: 0, colB: 255}
          ]
      }
  , angVel:
      { xa: tenDegInRad
      , ya: tenDegInRad
      , za: tenDegInRad
      }
  , forward: 1.0
  , velSpeed: 1.0
  , idx : 0
  }

initCubes :: State
initCubes = {
  shapes : [initCube],
  shapeCnt : 0,
  rate : 1.0
}
  

-- Events
data Query a
  = Tick a
  | Init a
  | HandleKey K.KeyboardEvent (H.SubscribeStatus -> a)
  | IncAngVelocity Axis a
  | AddCube a
  | RemoveCube a
  | Reverse Int a
  | IncVelocitySpeed Int a
  | DecVelocitySpeed Int a
  | ChangeRate String a

type DSL eff = H.ComponentDSL State Query Unit (Aff (console :: CONSOLE, dom :: DOM, avar :: AVAR, keyboard :: K.KEYBOARD | eff))
-------------------- UPDATE / REDUCERS --------------------

cubes :: forall eff. H.Component HH.HTML Query Unit Unit (Aff (console :: CONSOLE, dom :: DOM, avar :: AVAR, keyboard :: K.KEYBOARD | eff))
cubes =
  H.component
    { initialState: const initialState
    , render
    , eval
    , receiver: const Nothing
    }
  where
    initialState :: State
    initialState = initCubes

    render :: State -> H.ComponentHTML Query
    render = renderView

    eval :: Query ~> H.ComponentDSL State Query Unit (Aff (console :: CONSOLE, dom :: DOM, avar :: AVAR, keyboard :: K.KEYBOARD | eff))
    eval = case _ of
      Tick next -> do
        cubes <- H.get
        let newCubes = map updateCubesForTick cubes.shapes
        let news = {shapes : newCubes, shapeCnt : cubes.shapeCnt, rate: cubes.rate}

        H.put news
        H.liftEff $ log "tick"
        pure next

      ChangeRate rate next -> do
        cube <- H.get
        let rateChangedCube = changeCubeSize cube rate
        H.modify
          (\c -> rateChangedCube)
        pure next

      AddCube next -> do
        cubes <- H.get
        let appendedCubes = appendCube cubes
        H.modify
          (\c -> appendedCubes
          )
        pure next

      RemoveCube next -> do
        cubes <- H.get
        let removedCubes = removeOneCube cubes
        H.modify
          (\c ->  removedCubes
          )
        pure next

      IncVelocitySpeed idx next -> do
        cube <- H.get
        let incVelCube = changeVelocity cube idx true
        H.modify
          (\c -> incVelCube)
        pure next

      DecVelocitySpeed idx next -> do
        cube <- H.get
        let decVelCube = changeVelocity cube idx false
        H.modify
          (\c -> decVelCube)
        pure next

      Reverse idx next -> do
        cube <- H.get
        let reversedCube = reverseDirection cube idx
        H.modify
          (\c -> reversedCube)
        pure next

      IncAngVelocity axis next -> do

        cubes <- H.get

        let updatedCube = getNewCube axis cubes.shapes
        H.modify
          (\c -> c{shapes = updatedCube})
        pure next

      Init next -> do
        document <- H.liftEff $ DOM.window >>= DOM.document <#> DOM.htmlDocumentToDocument
        H.subscribe $ ES.eventSource' (K.onKeyUp document) (Just <<< H.request <<< HandleKey)
        pure next
      HandleKey e reply -> case K.readKeyboardEvent e of
        info
          | info.shiftKey && info.keyCode == 65 -> do             --rotX++ : Shift + a
              H.liftEff $ K.preventDefault e
              cubes <- H.get

              let updatedCube = getNewCube X cubes.shapes
              H.modify
                (\c -> c{shapes = updatedCube})

              pure (reply H.Listening)
          | info.shiftKey && info.keyCode == 83 -> do             --rotY++ : Shift + s
              H.liftEff $ K.preventDefault e
              cubes <- H.get

              let updatedCube = getNewCube Y cubes.shapes
              H.modify
                (\c -> c{shapes = updatedCube})
              pure (reply H.Listening)
          | info.shiftKey && info.keyCode == 68-> do              --rotZ++ : Shift + d
              H.liftEff $ K.preventDefault e
              cubes <- H.get

              let updatedCube = getNewCube Z cubes.shapes
              H.modify
                (\c -> c{shapes = updatedCube})
              pure (reply H.Listening)
          | info.shiftKey && info.keyCode == 70 -> do             --Add Cube : Shift + f
              H.liftEff $ K.preventDefault e
              cubes <- H.get
              let appendedCubes = appendCube cubes
              H.modify
                (\c -> appendedCubes
                )
              pure (reply H.Listening)
          | info.shiftKey && info.keyCode == 71 -> do             --Remove Cube : Shift + g
              H.liftEff $ K.preventDefault e
              cubes <- H.get
              let removedCubes = removeOneCube cubes
              H.modify
                (\c ->  removedCubes
                )
              pure (reply H.Listening)
          | otherwise ->
              pure (reply H.Listening)

changeCubeSize :: State -> String-> State
changeCubeSize cube size = cube{rate = G.readFloat size / 50.0}

addInt :: Int -> Int -> Int
addInt a b = a + b

appendCube :: State -> State
appendCube cube = newState
  where
    {shapes, shapeCnt, rate} = cube
    newState = {
      shapes: snoc shapes initCube{idx=length shapes},
      shapeCnt: shapeCnt + 1,
      rate : rate
    }

removeOneCube :: State -> State
removeOneCube cube = newState
  where
    {shapes, shapeCnt, rate} = cube
    newState = {
      shapes: dropEnd 1 cube.shapes,
      shapeCnt: shapeCnt - 1 ,
      rate : rate
    }

changeVelocity :: State -> Int -> Boolean -> State
changeVelocity state idx inc_dec = newState
  where
      {shapes, shapeCnt, rate} = state
      allshapes = map (mainChangeVel idx inc_dec) shapes
      newState = {shapes: allshapes, shapeCnt: shapeCnt, rate: rate}

mainChangeVel :: Int -> Boolean -> RotatingShape -> RotatingShape
mainChangeVel idx inc_dec shape = if shape.idx == idx then shape{velSpeed = shape.velSpeed + val} else shape
  where
    val = if inc_dec == true then 1.0 else -1.0

updateCubesForTick :: RotatingShape -> RotatingShape
updateCubesForTick cube = newCube
  where
    angVel = cube.angVel
    {vertices, edges, faces} = cube.shape
    newShape =
      { edges: edges
      , vertices: rotateShape vertices (anglePerFrame angVel)
      , faces: faces
      }
    newCube = cube
      { angVel = dampenAngVelocity angVel
      , shape = newShape
      }

  

getNewCube :: Axis -> Array RotatingShape -> Array RotatingShape
getNewCube axis cubes = newCubes
  where
    newCubes = map (changeAng axis) cubes


changeAng :: Axis -> RotatingShape -> RotatingShape
changeAng axis shape = case axis of
    X -> shapex
    Y -> shapey
    Z -> shapez
    where
      {xa, ya, za} = shape.angVel
      {xa, ya, za} = shape.angVel
      shapex = {shape: shape.shape, angVel: {xa: xa + accelerateBy * shape.velSpeed * shape.forward, ya: ya, za: za}, forward: shape.forward, velSpeed: shape.velSpeed, idx: shape.idx}
      shapey = {shape: shape.shape, angVel: {xa: xa, ya: ya + accelerateBy * shape.velSpeed * shape.forward, za: za}, forward: shape.forward, velSpeed: shape.velSpeed, idx: shape.idx}
      shapez = {shape: shape.shape, angVel: {xa: xa, ya: ya, za: za + accelerateBy * shape.velSpeed * shape.forward}, forward: shape.forward, velSpeed: shape.velSpeed, idx: shape.idx}

reverseDirection :: State -> Int -> State
reverseDirection state idx = newState
  where
    {shapes, shapeCnt, rate} = state
    allshapes = map (mainReverse idx) shapes
    newState = {shapes: allshapes, shapeCnt: shapeCnt, rate: rate}

mainReverse :: Int -> RotatingShape -> RotatingShape
mainReverse idx shape = if shape.idx == idx then shape{forward = if shape.forward == 1.0 then -1.0 else 1.0} else shape

rotateShape :: Array Point3D -> AngVelocity3D -> Array Point3D
rotateShape vertices ang =
  map (rotate ang) vertices

rotate :: AngVelocity3D -> Point3D -> Point3D
rotate { xa, ya, za } = rotateX xa >>> rotateY ya >>> rotateZ za
  where
    rotateX ang {x,y,z} = let Tuple ny nz = rotateInPlane y z ang in { x, y:ny, z:nz }
    rotateY ang {x,y,z} = let Tuple nx nz = rotateInPlane x z ang in { x:nx, y, z:nz }
    rotateZ ang {x,y,z} = let Tuple nx ny = rotateInPlane x y ang in { x:nx, y:ny, z }

    rotateInPlane :: Number -> Number -> Number -> Tuple Number Number
    rotateInPlane axis1 axis2 ang =
      Tuple (axis1 * cos(ang) - axis2 * sin(ang)) (axis2 * cos(ang) + axis1 * sin(ang))

anglePerFrame :: AngVelocity3D -> Angle3D
anglePerFrame {xa, ya, za} =
  { xa: xa / frameRate
  , ya: ya / frameRate
  , za: za / frameRate
  }

dampenAngVelocity :: AngVelocity3D -> AngVelocity3D
dampenAngVelocity {xa, ya, za} =
    { xa: dampen xa
    , ya: dampen ya
    , za: dampen za
    }
  where
    dampen :: Number -> Number
    dampen ang = ang * dampenPercent -- Basics.max 0 (ang-drpf)

-------------------- VIEW --------------------
renderView :: State -> H.ComponentHTML Query
renderView state = let
    shapes = state.shapes
    rate = state.rate
  in
    HH.div_
      [
        HH.div_
          [ renderButton "rotX++" (IncAngVelocity X)
          , renderButton "rotY++" (IncAngVelocity Y)
          , renderButton "rotZ++" (IncAngVelocity Z)
          , renderButton "Add Cube" (AddCube)
          , renderButton "Remove Cube" (RemoveCube)
          ],

        HH.p_
          [ HH.text "Click X/Y/Z to rotate along X-axis/Y-axis/Z-axis" ]

        ,HH.div_
          [
            HH.text "Change rate: ",
            HH.input
            [
              HP.type_ HP.InputRange
            , HP.min 0.0
            , HP.max 100.0
            , HP.value "50"
            , HE.onValueChange $ HE.input ChangeRate
            ]
          ]
        ,HH.ol_ $ map (\cube -> 
          HH.div_
            [
              HH.div_
                [
                  renderButton "reverse" (Reverse cube.idx)
                , renderButton "vel++" (IncVelocitySpeed cube.idx)
                , renderButton "vel--" (DecVelocitySpeed cube.idx)
                ],
              SE.svg
                [ SA.viewBox 0.0 0.0 viewBoxSize viewBoxSize ]
                [ SE.g []
                  
                  (drawCube cube.shape.edges (map (project rate) cube.shape.vertices) cube.shape.faces)
                ]
            ]
          ) shapes
      ]
      
  where
    renderButton label query =
      HH.button
        [ HP.title label
        , HE.onClick (HE.input_ query)
        ]
        [ HH.text label ]

    -- parallel projection
    
    project :: Number -> Point3D -> Point2D
    project r p = 
      {
        x : p.x * r + viewCenter.x,
        y : p.y * r + viewCenter.y
      }

    drawCube :: Array Edge -> Array Point2D -> Array Face -> Array (H.ComponentHTML Query)
    drawCube edges vert2Ds faces =
      drawEdges edges vert2Ds <> drawVertices vert2Ds <> paintColors faces vert2Ds

    drawEdges :: Array Edge -> Array Point2D -> Array (H.ComponentHTML Query)
    drawEdges edges verts = let
        connectedVerts = map (\(Tuple v1 v2) -> Tuple (verts !! v1) (verts !! v2)) edges
      in
        map (\(Tuple v1 v2) -> drawLine (getPoint v1) (getPoint v2)) connectedVerts

    paintColors :: Array Face -> Array Point2D -> Array (H.ComponentHTML Query)
    paintColors faces verts =
        map (\face -> paintColor (getPoint (verts !! face.corNum1)) (getPoint (verts !! face.corNum2)) (getPoint (verts !! face.corNum3)) (getPoint (verts !! face.corNum4)) face.colR face.colG face.colB) faces

    paintColor :: Point2D -> Point2D -> Point2D -> Point2D -> Int -> Int -> Int -> H.ComponentHTML Query
    paintColor p1 p2 p3 p4 r g b = if checkVisible p1 p2 p3 p4 then
        SE.path
          [ SA.d
            [ SA.Abs (SA.M p1.x p1.y)
            , SA.Abs (SA.L p2.x p2.y)
            , SA.Abs (SA.L p3.x p3.y)
            , SA.Abs (SA.L p4.x p4.y)
            , SA.Abs (SA.L p1.x p1.y)
            ]
          , SA.fill $ Just (SA.RGB r g b)
          , SA.stroke $ Just (SA.RGB r g b)
          ]
      else
        SE.path []

    checkVisible :: Point2D -> Point2D -> Point2D -> Point2D -> Boolean
    checkVisible p1 p2 p3 p4 = isVisible
      where
        area = p1.x * p2.y - p2.x * p1.y + p2.x * p3.y - p3.x * p2.y + p3.x * p4.y - p4.x * p3.y + p4.x * p1.y - p1.x * p4.y
        isVisible = if area > 0.0 then true else false

    getPoint :: Maybe Point2D -> Point2D
    getPoint maybePoint = let
       default = { x: 100.0, y: 100.0 }
      in
        fromMaybe default maybePoint

    drawLine :: Point2D -> Point2D -> H.ComponentHTML Query
    drawLine a b =
      SE.path
        [ SA.d
          [ SA.Abs (SA.M a.x a.y)
          , SA.Abs (SA.L b.x b.y)
          ]
        , SA.stroke $ Just (SA.RGB 50 50 50)
        ]

    drawVertices :: Array Point2D -> Array (H.ComponentHTML Query)
    drawVertices vert2Ds =
      mapWithIndex drawVertex vert2Ds

    drawVertex :: Int -> Point2D -> H.ComponentHTML Query
    drawVertex idx {x, y} = SE.g []
      [ SE.text
          [ SA.x $ x + 5.0
          , SA.y $ y - 5.0
          , SA.fill $ Just (SA.RGB 150 150 150)
          ]
          [ HH.text $ show idx ]
      , SE.circle
          [ SA.r 3.0
          , SA.cx x
          , SA.cy y
          , SA.fill $ Just (SA.RGB 100 100 100)
          ]
      ]
