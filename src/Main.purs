module Main where

import Prelude

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE)
import Control.Monad.Eff.Timer as T
import Cube as C
import Halogen as H
import Halogen.Aff as HA
import Halogen.VDom.Driver (runUI)
import Keyboard as K


frameRate :: Int
frameRate = 200 -- TODO: this is needed in Cube component. Send it as an input.


main :: Eff (HA.HalogenEffects (console :: CONSOLE, timer :: T.TIMER, keyboard :: K.KEYBOARD)) Unit
main = HA.runHalogenAff do
  body <- HA.awaitBody
  cube <- runUI C.cubes unit body

  H.liftEff $ HA.runHalogenAff $ cube.query $ H.action C.Init
  H.liftEff $ T.setInterval (1000 / frameRate) do
    HA.runHalogenAff $ cube.query $ H.action C.Tick
