"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_HTML = require("../DOM.HTML");
var DOM_HTML_Indexed_InputType = require("../DOM.HTML.Indexed.InputType");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var DOM_HTML_Window = require("../DOM.HTML.Window");
var Data_Array = require("../Data.Array");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_Tuple = require("../Data.Tuple");
var Global = require("../Global");
var Halogen = require("../Halogen");
var Halogen_Component = require("../Halogen.Component");
var Halogen_HTML = require("../Halogen.HTML");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Halogen_HTML_Events = require("../Halogen.HTML.Events");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties");
var Halogen_Query = require("../Halogen.Query");
var Halogen_Query_EventSource = require("../Halogen.Query.EventSource");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM");
var Keyboard = require("../Keyboard");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var Svg_Attributes = require("../Svg.Attributes");
var Svg_Elements = require("../Svg.Elements");
var Type_Data_Boolean = require("../Type.Data.Boolean");
var X = (function () {
    function X() {

    };
    X.value = new X();
    return X;
})();
var Y = (function () {
    function Y() {

    };
    Y.value = new Y();
    return Y;
})();
var Z = (function () {
    function Z() {

    };
    Z.value = new Z();
    return Z;
})();

// Events
var Tick = (function () {
    function Tick(value0) {
        this.value0 = value0;
    };
    Tick.create = function (value0) {
        return new Tick(value0);
    };
    return Tick;
})();

// Events
var Init = (function () {
    function Init(value0) {
        this.value0 = value0;
    };
    Init.create = function (value0) {
        return new Init(value0);
    };
    return Init;
})();

// Events
var HandleKey = (function () {
    function HandleKey(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    HandleKey.create = function (value0) {
        return function (value1) {
            return new HandleKey(value0, value1);
        };
    };
    return HandleKey;
})();

// Events
var IncAngVelocity = (function () {
    function IncAngVelocity(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    IncAngVelocity.create = function (value0) {
        return function (value1) {
            return new IncAngVelocity(value0, value1);
        };
    };
    return IncAngVelocity;
})();

// Events
var AddCube = (function () {
    function AddCube(value0) {
        this.value0 = value0;
    };
    AddCube.create = function (value0) {
        return new AddCube(value0);
    };
    return AddCube;
})();

// Events
var RemoveCube = (function () {
    function RemoveCube(value0) {
        this.value0 = value0;
    };
    RemoveCube.create = function (value0) {
        return new RemoveCube(value0);
    };
    return RemoveCube;
})();

// Events
var Reverse = (function () {
    function Reverse(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Reverse.create = function (value0) {
        return function (value1) {
            return new Reverse(value0, value1);
        };
    };
    return Reverse;
})();

// Events
var IncVelocitySpeed = (function () {
    function IncVelocitySpeed(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    IncVelocitySpeed.create = function (value0) {
        return function (value1) {
            return new IncVelocitySpeed(value0, value1);
        };
    };
    return IncVelocitySpeed;
})();

// Events
var DecVelocitySpeed = (function () {
    function DecVelocitySpeed(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DecVelocitySpeed.create = function (value0) {
        return function (value1) {
            return new DecVelocitySpeed(value0, value1);
        };
    };
    return DecVelocitySpeed;
})();

// Events
var ChangeRate = (function () {
    function ChangeRate(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ChangeRate.create = function (value0) {
        return function (value1) {
            return new ChangeRate(value0, value1);
        };
    };
    return ChangeRate;
})();

// Values
var viewBoxSize = 600.0;
var viewCenter = {
    x: viewBoxSize / 2.0,
    y: viewBoxSize / 2.0
};
var rotate = function (v) {
    var rotateInPlane = function (axis1) {
        return function (axis2) {
            return function (ang) {
                return new Data_Tuple.Tuple(axis1 * $$Math.cos(ang) - axis2 * $$Math.sin(ang), axis2 * $$Math.cos(ang) + axis1 * $$Math.sin(ang));
            };
        };
    };
    var rotateX = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.y)(v1.z)(ang);
            return {
                x: v1.x,
                y: v2.value0,
                z: v2.value1
            };
        };
    };
    var rotateY = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.z)(ang);
            return {
                x: v2.value0,
                y: v1.y,
                z: v2.value1
            };
        };
    };
    var rotateZ = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.y)(ang);
            return {
                x: v2.value0,
                y: v2.value1,
                z: v1.z
            };
        };
    };
    return function ($177) {
        return rotateZ(v.za)(rotateY(v.ya)(rotateX(v.xa)($177)));
    };
};
var rotateShape = function (vertices) {
    return function (ang) {
        return Data_Functor.map(Data_Functor.functorArray)(rotate(ang))(vertices);
    };
};

// Basics.max 0 (ang-drpf)
//------------------ VIEW --------------------
var renderView = function (state) {
    var renderButton = function (label) {
        return function (query) {
            return Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title(label), Halogen_HTML_Events.onClick(Halogen_HTML_Events.input_(query)) ])([ Halogen_HTML_Core.text(label) ]);
        };
    };
    
    // parallel projection
var project = function (r) {
        return function (p) {
            return {
                x: p.x * r + viewCenter.x,
                y: p.y * r + viewCenter.y
            };
        };
    };
    var getPoint = function (maybePoint) {
        var $$default = {
            x: 100.0,
            y: 100.0
        };
        return Data_Maybe.fromMaybe($$default)(maybePoint);
    };
    var drawVertex = function (idx) {
        return function (v) {
            return Svg_Elements.g([  ])([ Svg_Elements.text([ Svg_Attributes.x(v.x + 5.0), Svg_Attributes.y(v.y - 5.0), Svg_Attributes.fill(new Data_Maybe.Just(new Svg_Attributes.RGB(150, 150, 150))) ])([ Halogen_HTML_Core.text(Data_Show.show(Data_Show.showInt)(idx)) ]), Svg_Elements.circle([ Svg_Attributes.r(3.0), Svg_Attributes.cx(v.x), Svg_Attributes.cy(v.y), Svg_Attributes.fill(new Data_Maybe.Just(new Svg_Attributes.RGB(100, 100, 100))) ]) ]);
        };
    };
    var drawVertices = function (vert2Ds) {
        return Data_Array.mapWithIndex(drawVertex)(vert2Ds);
    };
    var drawLine = function (a) {
        return function (b) {
            return Svg_Elements.path([ Svg_Attributes.d([ new Svg_Attributes.Abs(new Svg_Attributes.M(a.x, a.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(b.x, b.y)) ]), Svg_Attributes.stroke(new Data_Maybe.Just(new Svg_Attributes.RGB(50, 50, 50))) ]);
        };
    };
    var drawEdges = function (edges) {
        return function (verts) {
            var connectedVerts = Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return new Data_Tuple.Tuple(Data_Array.index(verts)(v.value0), Data_Array.index(verts)(v.value1));
            })(edges);
            return Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return drawLine(getPoint(v.value0))(getPoint(v.value1));
            })(connectedVerts);
        };
    };
    var checkVisible = function (p1) {
        return function (p2) {
            return function (p3) {
                return function (p4) {
                    var area = ((((((p1.x * p2.y - p2.x * p1.y) + p2.x * p3.y) - p3.x * p2.y) + p3.x * p4.y) - p4.x * p3.y) + p4.x * p1.y) - p1.x * p4.y;
                    var isVisible = (function () {
                        var $75 = area > 0.0;
                        if ($75) {
                            return true;
                        };
                        return false;
                    })();
                    return isVisible;
                };
            };
        };
    };
    var paintColor = function (p1) {
        return function (p2) {
            return function (p3) {
                return function (p4) {
                    return function (r) {
                        return function (g) {
                            return function (b) {
                                var $76 = checkVisible(p1)(p2)(p3)(p4);
                                if ($76) {
                                    return Svg_Elements.path([ Svg_Attributes.d([ new Svg_Attributes.Abs(new Svg_Attributes.M(p1.x, p1.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(p2.x, p2.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(p3.x, p3.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(p4.x, p4.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(p1.x, p1.y)) ]), Svg_Attributes.fill(new Data_Maybe.Just(new Svg_Attributes.RGB(r, g, b))), Svg_Attributes.stroke(new Data_Maybe.Just(new Svg_Attributes.RGB(r, g, b))) ]);
                                };
                                return Svg_Elements.path([  ]);
                            };
                        };
                    };
                };
            };
        };
    };
    var paintColors = function (faces) {
        return function (verts) {
            return Data_Functor.map(Data_Functor.functorArray)(function (face) {
                return paintColor(getPoint(Data_Array.index(verts)(face.corNum1)))(getPoint(Data_Array.index(verts)(face.corNum2)))(getPoint(Data_Array.index(verts)(face.corNum3)))(getPoint(Data_Array.index(verts)(face.corNum4)))(face.colR)(face.colG)(face.colB);
            })(faces);
        };
    };
    var drawCube = function (edges) {
        return function (vert2Ds) {
            return function (faces) {
                return Data_Semigroup.append(Data_Semigroup.semigroupArray)(drawEdges(edges)(vert2Ds))(Data_Semigroup.append(Data_Semigroup.semigroupArray)(drawVertices(vert2Ds))(paintColors(faces)(vert2Ds)));
            };
        };
    };
    return Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.div_([ renderButton("rotX++")(IncAngVelocity.create(X.value)), renderButton("rotY++")(IncAngVelocity.create(Y.value)), renderButton("rotZ++")(IncAngVelocity.create(Z.value)), renderButton("Add Cube")(AddCube.create), renderButton("Remove Cube")(RemoveCube.create) ]), Halogen_HTML_Elements.p_([ Halogen_HTML_Core.text("Click X/Y/Z to rotate along X-axis/Y-axis/Z-axis") ]), Halogen_HTML_Elements.div_([ Halogen_HTML_Core.text("Change rate: "), Halogen_HTML_Elements.input([ Halogen_HTML_Properties.type_(Halogen_HTML_Core.inputTypeIsProp)(DOM_HTML_Indexed_InputType.InputRange.value), Halogen_HTML_Properties.min(0.0), Halogen_HTML_Properties.max(100.0), Halogen_HTML_Properties.value("50"), Halogen_HTML_Events.onValueChange(Halogen_HTML_Events.input(ChangeRate.create)) ]) ]), Halogen_HTML_Elements.ol_(Data_Functor.map(Data_Functor.functorArray)(function (cube) {
        return Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.div_([ renderButton("reverse")(Reverse.create(cube.idx)), renderButton("vel++")(IncVelocitySpeed.create(cube.idx)), renderButton("vel--")(DecVelocitySpeed.create(cube.idx)) ]), Svg_Elements.svg([ Svg_Attributes.viewBox(0.0)(0.0)(viewBoxSize)(viewBoxSize) ])([ Svg_Elements.g([  ])(drawCube(cube.shape.edges)(Data_Functor.map(Data_Functor.functorArray)(project(state.rate))(cube.shape.vertices))(cube.shape.faces)) ]) ]);
    })(state.shapes)) ]);
};
var removeOneCube = function (cube) {
    var newState = {
        shapes: Data_Array.dropEnd(1)(cube.shapes),
        shapeCnt: cube.shapeCnt - 1 | 0,
        rate: cube.rate
    };
    return newState;
};
var oneDegInRad = 1.745329255e-2;
var tenDegInRad = oneDegInRad * 10.0;
var mainReverse = function (idx) {
    return function (shape) {
        var $81 = shape.idx === idx;
        if ($81) {
            var $83 = {};
            for (var $84 in shape) {
                if ({}.hasOwnProperty.call(shape, $84)) {
                    $83[$84] = shape[$84];
                };
            };
            $83.forward = (function () {
                var $82 = shape.forward === 1.0;
                if ($82) {
                    return -1.0;
                };
                return 1.0;
            })();
            return $83;
        };
        return shape;
    };
};
var reverseDirection = function (state) {
    return function (idx) {
        var allshapes = Data_Functor.map(Data_Functor.functorArray)(mainReverse(idx))(state.shapes);
        var newState = {
            shapes: allshapes,
            shapeCnt: state.shapeCnt,
            rate: state.rate
        };
        return newState;
    };
};
var mainChangeVel = function (idx) {
    return function (inc_dec) {
        return function (shape) {
            var val = (function () {
                var $90 = inc_dec === true;
                if ($90) {
                    return 1.0;
                };
                return -1.0;
            })();
            var $91 = shape.idx === idx;
            if ($91) {
                var $92 = {};
                for (var $93 in shape) {
                    if ({}.hasOwnProperty.call(shape, $93)) {
                        $92[$93] = shape[$93];
                    };
                };
                $92.velSpeed = shape.velSpeed + val;
                return $92;
            };
            return shape;
        };
    };
};

// 10% per second
var initCube = {
    shape: {
        vertices: [ {
            x: 100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: -100.0
        } ],
        edges: [ new Data_Tuple.Tuple(0, 1), new Data_Tuple.Tuple(0, 2), new Data_Tuple.Tuple(0, 4), new Data_Tuple.Tuple(1, 5), new Data_Tuple.Tuple(1, 3), new Data_Tuple.Tuple(2, 3), new Data_Tuple.Tuple(2, 6), new Data_Tuple.Tuple(4, 5), new Data_Tuple.Tuple(4, 6), new Data_Tuple.Tuple(3, 7), new Data_Tuple.Tuple(6, 7), new Data_Tuple.Tuple(5, 7) ],
        faces: [ {
            corNum1: 1,
            corNum2: 5,
            corNum3: 7,
            corNum4: 3,
            colR: 0,
            colG: 0,
            colB: 255
        }, {
            corNum1: 5,
            corNum2: 4,
            corNum3: 6,
            corNum4: 7,
            colR: 0,
            colG: 255,
            colB: 0
        }, {
            corNum1: 7,
            corNum2: 6,
            corNum3: 2,
            corNum4: 3,
            colR: 255,
            colG: 0,
            colB: 0
        }, {
            corNum1: 1,
            corNum2: 3,
            corNum3: 2,
            corNum4: 0,
            colR: 0,
            colG: 255,
            colB: 255
        }, {
            corNum1: 1,
            corNum2: 0,
            corNum3: 4,
            corNum4: 5,
            colR: 255,
            colG: 255,
            colB: 0
        }, {
            corNum1: 2,
            corNum2: 6,
            corNum3: 4,
            corNum4: 0,
            colR: 255,
            colG: 0,
            colB: 255
        } ]
    },
    angVel: {
        xa: tenDegInRad,
        ya: tenDegInRad,
        za: tenDegInRad
    },
    forward: 1.0,
    velSpeed: 1.0,
    idx: 0
};
var initCubes = {
    shapes: [ initCube ],
    shapeCnt: 0,
    rate: 1.0
};
var frameRate = 200.0;
var dampenPercent = 1.0 - 0.9 / frameRate;
var dampenAngVelocity = function (v) {
    var dampen = function (ang) {
        return ang * dampenPercent;
    };
    return {
        xa: dampen(v.xa),
        ya: dampen(v.ya),
        za: dampen(v.za)
    };
};
var changeVelocity = function (state) {
    return function (idx) {
        return function (inc_dec) {
            var allshapes = Data_Functor.map(Data_Functor.functorArray)(mainChangeVel(idx)(inc_dec))(state.shapes);
            var newState = {
                shapes: allshapes,
                shapeCnt: state.shapeCnt,
                rate: state.rate
            };
            return newState;
        };
    };
};
var changeCubeSize = function (cube) {
    return function (size) {
        var $103 = {};
        for (var $104 in cube) {
            if ({}.hasOwnProperty.call(cube, $104)) {
                $103[$104] = cube[$104];
            };
        };
        $103.rate = Global.readFloat(size) / 50.0;
        return $103;
    };
};
var appendCube = function (cube) {
    var newState = {
        shapes: Data_Array.snoc(cube.shapes)((function () {
            var $107 = {};
            for (var $108 in initCube) {
                if ({}.hasOwnProperty.call(initCube, $108)) {
                    $107[$108] = initCube[$108];
                };
            };
            $107.idx = Data_Array.length(cube.shapes);
            return $107;
        })()),
        shapeCnt: cube.shapeCnt + 1 | 0,
        rate: cube.rate
    };
    return newState;
};
var anglePerFrame = function (v) {
    return {
        xa: v.xa / frameRate,
        ya: v.ya / frameRate,
        za: v.za / frameRate
    };
};
var updateCubesForTick = function (cube) {
    var newShape = {
        edges: cube.shape.edges,
        vertices: rotateShape(cube.shape.vertices)(anglePerFrame(cube.angVel)),
        faces: cube.shape.faces
    };
    var newCube = (function () {
        var $118 = {};
        for (var $119 in cube) {
            if ({}.hasOwnProperty.call(cube, $119)) {
                $118[$119] = cube[$119];
            };
        };
        $118.angVel = dampenAngVelocity(cube.angVel);
        $118.shape = newShape;
        return $118;
    })();
    return newCube;
};
var addInt = function (a) {
    return function (b) {
        return a + b | 0;
    };
};
var accelerateBy = oneDegInRad * 50.0;
var changeAng = function (axis) {
    return function (shape) {
        var shapez = {
            shape: shape.shape,
            angVel: {
                xa: shape.angVel.xa,
                ya: shape.angVel.ya,
                za: shape.angVel.za + accelerateBy * shape.velSpeed * shape.forward
            },
            forward: shape.forward,
            velSpeed: shape.velSpeed,
            idx: shape.idx
        };
        var shapey = {
            shape: shape.shape,
            angVel: {
                xa: shape.angVel.xa,
                ya: shape.angVel.ya + accelerateBy * shape.velSpeed * shape.forward,
                za: shape.angVel.za
            },
            forward: shape.forward,
            velSpeed: shape.velSpeed,
            idx: shape.idx
        };
        var shapex = {
            shape: shape.shape,
            angVel: {
                xa: shape.angVel.xa + accelerateBy * shape.velSpeed * shape.forward,
                ya: shape.angVel.ya,
                za: shape.angVel.za
            },
            forward: shape.forward,
            velSpeed: shape.velSpeed,
            idx: shape.idx
        };
        if (axis instanceof X) {
            return shapex;
        };
        if (axis instanceof Y) {
            return shapey;
        };
        if (axis instanceof Z) {
            return shapez;
        };
        throw new Error("Failed pattern match at Cube line 378, column 24 - line 381, column 16: " + [ axis.constructor.name ]);
    };
};
var getNewCube = function (axis) {
    return function (cubes1) {
        var newCubes = Data_Functor.map(Data_Functor.functorArray)(changeAng(axis))(cubes1);
        return newCubes;
    };
};

//------------------ UPDATE / REDUCERS --------------------
var cubes = (function () {
    var $$eval = function (v) {
        if (v instanceof Tick) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var newCubes = Data_Functor.map(Data_Functor.functorArray)(updateCubesForTick)(v1.shapes);
                var news = {
                    shapes: newCubes,
                    shapeCnt: v1.shapeCnt,
                    rate: v1.rate
                };
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.put(Halogen_Query_HalogenM.monadStateHalogenM)(news))(function () {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Control_Monad_Eff_Console.log("tick")))(function () {
                        return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                    });
                });
            });
        };
        if (v instanceof ChangeRate) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var rateChangedCube = changeCubeSize(v1)(v.value0);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return rateChangedCube;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof AddCube) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var appendedCubes = appendCube(v1);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return appendedCubes;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                });
            });
        };
        if (v instanceof RemoveCube) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var removedCubes = removeOneCube(v1);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return removedCubes;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                });
            });
        };
        if (v instanceof IncVelocitySpeed) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var incVelCube = changeVelocity(v1)(v.value0)(true);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return incVelCube;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof DecVelocitySpeed) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var decVelCube = changeVelocity(v1)(v.value0)(false);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return decVelCube;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof Reverse) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var reversedCube = reverseDirection(v1)(v.value0);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    return reversedCube;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof IncAngVelocity) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var updatedCube = getNewCube(v.value0)(v1.shapes);
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    var $153 = {};
                    for (var $154 in c) {
                        if ({}.hasOwnProperty.call(c, $154)) {
                            $153[$154] = c[$154];
                        };
                    };
                    $153.shapes = updatedCube;
                    return $153;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof Init) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Data_Functor.mapFlipped(Control_Monad_Eff.functorEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(DOM_HTML.window)(DOM_HTML_Window.document))(DOM_HTML_Types.htmlDocumentToDocument)))(function (v1) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Halogen_Query_HalogenM.subscribe(Halogen_Query_EventSource["eventSource'"](Control_Monad_Aff_Class.monadAffAff)(Keyboard.onKeyUp(v1))(function ($178) {
                    return Data_Maybe.Just.create(Halogen_Query.request(HandleKey.create($178)));
                })))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                });
            });
        };
        if (v instanceof HandleKey) {
            var v1 = Keyboard.readKeyboardEvent(v.value0);
            if (v1.shiftKey && v1.keyCode === 65) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Keyboard.preventDefault(v.value0)))(function () {
                    return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                        var updatedCube = getNewCube(X.value)(v2.shapes);
                        return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                            var $162 = {};
                            for (var $163 in c) {
                                if ({}.hasOwnProperty.call(c, $163)) {
                                    $162[$163] = c[$163];
                                };
                            };
                            $162.shapes = updatedCube;
                            return $162;
                        }))(function () {
                            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
                        });
                    });
                });
            };
            if (v1.shiftKey && v1.keyCode === 83) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Keyboard.preventDefault(v.value0)))(function () {
                    return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                        var updatedCube = getNewCube(Y.value)(v2.shapes);
                        return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                            var $166 = {};
                            for (var $167 in c) {
                                if ({}.hasOwnProperty.call(c, $167)) {
                                    $166[$167] = c[$167];
                                };
                            };
                            $166.shapes = updatedCube;
                            return $166;
                        }))(function () {
                            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
                        });
                    });
                });
            };
            if (v1.shiftKey && v1.keyCode === 68) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Keyboard.preventDefault(v.value0)))(function () {
                    return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                        var updatedCube = getNewCube(Z.value)(v2.shapes);
                        return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                            var $170 = {};
                            for (var $171 in c) {
                                if ({}.hasOwnProperty.call(c, $171)) {
                                    $170[$171] = c[$171];
                                };
                            };
                            $170.shapes = updatedCube;
                            return $170;
                        }))(function () {
                            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
                        });
                    });
                });
            };
            if (v1.shiftKey && v1.keyCode === 70) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Keyboard.preventDefault(v.value0)))(function () {
                    return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                        var appendedCubes = appendCube(v2);
                        return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                            return appendedCubes;
                        }))(function () {
                            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
                        });
                    });
                });
            };
            if (v1.shiftKey && v1.keyCode === 71) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Keyboard.preventDefault(v.value0)))(function () {
                    return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v2) {
                        var removedCubes = removeOneCube(v2);
                        return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                            return removedCubes;
                        }))(function () {
                            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
                        });
                    });
                });
            };
            if (Data_Boolean.otherwise) {
                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1(Halogen_Query_EventSource.Listening.value));
            };
            throw new Error("Failed pattern match at Cube line 270, column 28 - line 314, column 39: " + [ v1.constructor.name ]);
        };
        throw new Error("Failed pattern match at Cube line 203, column 12 - line 314, column 39: " + [ v.constructor.name ]);
    };
    return Halogen_Component.component(Halogen_HTML_Core.bifunctorHTML)({
        initialState: Data_Function["const"](initCubes),
        render: renderView,
        "eval": $$eval,
        receiver: Data_Function["const"](Data_Maybe.Nothing.value)
    });
})();
module.exports = {
    X: X,
    Y: Y,
    Z: Z,
    viewBoxSize: viewBoxSize,
    viewCenter: viewCenter,
    frameRate: frameRate,
    oneDegInRad: oneDegInRad,
    tenDegInRad: tenDegInRad,
    accelerateBy: accelerateBy,
    dampenPercent: dampenPercent,
    initCube: initCube,
    initCubes: initCubes,
    Tick: Tick,
    Init: Init,
    HandleKey: HandleKey,
    IncAngVelocity: IncAngVelocity,
    AddCube: AddCube,
    RemoveCube: RemoveCube,
    Reverse: Reverse,
    IncVelocitySpeed: IncVelocitySpeed,
    DecVelocitySpeed: DecVelocitySpeed,
    ChangeRate: ChangeRate,
    cubes: cubes,
    changeCubeSize: changeCubeSize,
    addInt: addInt,
    appendCube: appendCube,
    removeOneCube: removeOneCube,
    changeVelocity: changeVelocity,
    mainChangeVel: mainChangeVel,
    updateCubesForTick: updateCubesForTick,
    getNewCube: getNewCube,
    changeAng: changeAng,
    reverseDirection: reverseDirection,
    mainReverse: mainReverse,
    rotateShape: rotateShape,
    rotate: rotate,
    anglePerFrame: anglePerFrame,
    dampenAngVelocity: dampenAngVelocity,
    renderView: renderView
};
