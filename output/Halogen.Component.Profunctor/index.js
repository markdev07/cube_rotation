// Generated by purs version 0.11.7
"use strict";
var Control_Applicative_Free = require("../Control.Applicative.Free");
var Control_Monad_Free = require("../Control.Monad.Free");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Newtype = require("../Data.Newtype");
var Data_Profunctor = require("../Data.Profunctor");
var Halogen_Component = require("../Halogen.Component");
var Halogen_Query_ForkF = require("../Halogen.Query.ForkF");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM");
var Prelude = require("../Prelude");
var ProComponent = function (x) {
    return x;
};
var newtypeProComponent = new Data_Newtype.Newtype(function (n) {
    return n;
}, ProComponent);
var mapOutput = function (f) {
    return function (v) {
        var go = function (v1) {
            if (v1 instanceof Halogen_Query_HalogenM.State) {
                return new Halogen_Query_HalogenM.State(v1.value0);
            };
            if (v1 instanceof Halogen_Query_HalogenM.Subscribe) {
                return new Halogen_Query_HalogenM.Subscribe(v1.value0, v1.value1);
            };
            if (v1 instanceof Halogen_Query_HalogenM.Lift) {
                return new Halogen_Query_HalogenM.Lift(v1.value0);
            };
            if (v1 instanceof Halogen_Query_HalogenM.Halt) {
                return new Halogen_Query_HalogenM.Halt(v1.value0);
            };
            if (v1 instanceof Halogen_Query_HalogenM.GetSlots) {
                return new Halogen_Query_HalogenM.GetSlots(v1.value0);
            };
            if (v1 instanceof Halogen_Query_HalogenM.CheckSlot) {
                return new Halogen_Query_HalogenM.CheckSlot(v1.value0, v1.value1);
            };
            if (v1 instanceof Halogen_Query_HalogenM.ChildQuery) {
                return new Halogen_Query_HalogenM.ChildQuery(v1.value0, v1.value1);
            };
            if (v1 instanceof Halogen_Query_HalogenM.Raise) {
                return new Halogen_Query_HalogenM.Raise(f(v1.value0), v1.value1);
            };
            if (v1 instanceof Halogen_Query_HalogenM.Par) {
                return new Halogen_Query_HalogenM.Par(Data_Newtype.over(Halogen_Query_HalogenM.newtypeHalogenAp)(Halogen_Query_HalogenM.newtypeHalogenAp)(Halogen_Query_HalogenM.HalogenAp)(Control_Applicative_Free.hoistFreeAp(mapOutput(f)))(v1.value0));
            };
            if (v1 instanceof Halogen_Query_HalogenM.Fork) {
                return new Halogen_Query_HalogenM.Fork(Halogen_Query_ForkF.hoistFork(mapOutput(f))(v1.value0));
            };
            if (v1 instanceof Halogen_Query_HalogenM.GetRef) {
                return new Halogen_Query_HalogenM.GetRef(v1.value0, v1.value1);
            };
            throw new Error("Failed pattern match at Halogen.Component.Profunctor line 42, column 8 - line 53, column 34: " + [ v1.constructor.name ]);
        };
        return Control_Monad_Free.hoistFree(go)(v);
    };
};
var dimapProComponent = function (f) {
    return function (g) {
        return function (v) {
            var go = function (comp) {
                return Halogen_Component.mkComponent((function () {
                    var $29 = {};
                    for (var $30 in comp) {
                        if ({}.hasOwnProperty.call(comp, $30)) {
                            $29[$30] = comp[$30];
                        };
                    };
                    $29.initialState = Data_Profunctor.lmap(Data_Profunctor.profunctorFn)(f)(comp.initialState);
                    $29.receiver = Data_Profunctor.lmap(Data_Profunctor.profunctorFn)(f)(comp.receiver);
                    $29["eval"] = Data_Functor.map(Data_Functor.functorFn)(mapOutput(g))(comp["eval"]);
                    return $29;
                })());
            };
            return Halogen_Component.unComponent(go)(v);
        };
    };
};
var profunctorProComponent = new Data_Profunctor.Profunctor(dimapProComponent);
module.exports = {
    ProComponent: ProComponent,
    newtypeProComponent: newtypeProComponent,
    profunctorProComponent: profunctorProComponent
};
