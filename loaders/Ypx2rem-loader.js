/**
 * loader的本质是一个函数,他的参数是上一个loader的内容或者模块的源代码
 */
const Px2rem = require("./Ypx2rem");
const { loadUtils } = require("webpack");
const loader = function (source) {
    // const options = this.getOptions();
    const px2rem = new Px2rem({ remUnit: 75, remPrecision: 8 });
    const a = px2rem.generateRem(source);
    console.log(a);
    return a;
};

module.exports = loader;
