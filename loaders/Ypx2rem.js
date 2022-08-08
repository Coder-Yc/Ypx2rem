/**
 * Ast
 */

const css = require("css");
const pxReg = /\b(\d+(\.\d+)?)px\b/;
class Px2rem {
    constructor(config) {
        this.config = config;
    }
    generateRem(cssText) {
        const self = this;
        function processRules(rules) {
            for (let i = 0; i < rules.length; i++) {
                const rule = rules[i];
                let declarations = rule.declarations;
                for (let j = 0; j < declarations.length; j++) {
                    const declaration = declarations[j];
                    if (
                        declaration.type === "declaration" &&
                        pxReg.test(declaration.value)
                    ) {
                        declaration.value = self._calValue(
                            "rem",
                            declaration.value
                        );
                    }
                }
            }
        }
        debugger;
        const astObj = css.parse(cssText);
        processRules(astObj.stylesheet.rules);
        return css.stringify(astObj);
    }
    _calValue(type, value) {
        let { remUnit, remPrecision } = this.config;
        return value.replace(pxReg, (_, $1) => {
            let val = (parseFloat($1) / remUnit).toFixed(remPrecision);
            return val + type;
        });
    }
}
module.exports = Px2rem;
