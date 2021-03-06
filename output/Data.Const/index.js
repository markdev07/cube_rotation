// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_BooleanAlgebra = require("../Data.BooleanAlgebra");
var Data_Bounded = require("../Data.Bounded");
var Data_CommutativeRing = require("../Data.CommutativeRing");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Field = require("../Data.Field");
var Data_Foldable = require("../Data.Foldable");
var Data_Functor = require("../Data.Functor");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant");
var Data_Functor_Invariant = require("../Data.Functor.Invariant");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Prelude = require("../Prelude");
var Const = function (x) {
    return x;
};
var showConst = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Const " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringConst = function (dictSemiring) {
    return dictSemiring;
};
var semigroupoidConst = new Control_Semigroupoid.Semigroupoid(function (v) {
    return function (v1) {
        return v1;
    };
});
var semigroupConst = function (dictSemigroup) {
    return dictSemigroup;
};
var ringConst = function (dictRing) {
    return dictRing;
};
var ordConst = function (dictOrd) {
    return dictOrd;
};
var newtypeConst = new Data_Newtype.Newtype(function (n) {
    return n;
}, Const);
var monoidConst = function (dictMonoid) {
    return dictMonoid;
};
var heytingAlgebraConst = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorConst = new Data_Functor.Functor(function (v) {
    return function (v1) {
        return v1;
    };
});
var invariantConst = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorConst));
var foldableConst = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            return Data_Monoid.mempty(dictMonoid);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
});
var traversableConst = new Data_Traversable.Traversable(function () {
    return foldableConst;
}, function () {
    return functorConst;
}, function (dictApplicative) {
    return function (v) {
        return Control_Applicative.pure(dictApplicative)(v);
    };
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            return Control_Applicative.pure(dictApplicative)(v1);
        };
    };
});
var fieldConst = function (dictField) {
    return dictField;
};
var euclideanRingConst = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqConst = function (dictEq) {
    return dictEq;
};
var eq1Const = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqConst(dictEq));
    });
};
var ord1Const = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Const(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordConst(dictOrd));
    });
};
var contravariantConst = new Data_Functor_Contravariant.Contravariant(function (v) {
    return function (v1) {
        return v1;
    };
});
var commutativeRingConst = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedConst = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraConst = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyConst = function (dictSemigroup) {
    return new Control_Apply.Apply(function () {
        return functorConst;
    }, function (v) {
        return function (v1) {
            return Data_Semigroup.append(dictSemigroup)(v)(v1);
        };
    });
};
var bindConst = function (dictSemigroup) {
    return new Control_Bind.Bind(function () {
        return applyConst(dictSemigroup);
    }, function (v) {
        return function (v1) {
            return v;
        };
    });
};
var applicativeConst = function (dictMonoid) {
    return new Control_Applicative.Applicative(function () {
        return applyConst(dictMonoid.Semigroup0());
    }, function (v) {
        return Data_Monoid.mempty(dictMonoid);
    });
};
module.exports = {
    Const: Const,
    newtypeConst: newtypeConst,
    eqConst: eqConst,
    eq1Const: eq1Const,
    ordConst: ordConst,
    ord1Const: ord1Const,
    boundedConst: boundedConst,
    showConst: showConst,
    semigroupoidConst: semigroupoidConst,
    semigroupConst: semigroupConst,
    monoidConst: monoidConst,
    semiringConst: semiringConst,
    ringConst: ringConst,
    euclideanRingConst: euclideanRingConst,
    commutativeRingConst: commutativeRingConst,
    fieldConst: fieldConst,
    heytingAlgebraConst: heytingAlgebraConst,
    booleanAlgebraConst: booleanAlgebraConst,
    functorConst: functorConst,
    invariantConst: invariantConst,
    contravariantConst: contravariantConst,
    applyConst: applyConst,
    bindConst: bindConst,
    applicativeConst: applicativeConst,
    foldableConst: foldableConst,
    traversableConst: traversableConst
};
