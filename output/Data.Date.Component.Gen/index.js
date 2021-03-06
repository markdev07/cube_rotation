// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Gen = require("../Control.Monad.Gen");
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Date_Component = require("../Data.Date.Component");
var Data_Enum = require("../Data.Enum");
var Data_Enum_Gen = require("../Data.Enum.Gen");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var genYear = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(function ($5) {
        return Data_Maybe.fromJust()(Data_Enum.toEnum(Data_Date_Component.boundedEnumYear)($5));
    })(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(1900)(2100));
};
var genWeekday = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumWeekday);
};
var genMonth = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumMonth);
};
var genDay = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumDay);
};
module.exports = {
    genYear: genYear,
    genMonth: genMonth,
    genDay: genDay,
    genWeekday: genWeekday
};
