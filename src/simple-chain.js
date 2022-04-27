const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    if (this.chain.length == 0) {
      return 0;
    }
    return this.chain.split("~~").length;
  },
  addLink(/* value */) {
    if (this.chain.length > 0) {
      this.chain += "~~";
    }
    if (arguments.length > 0) {
      let a = arguments[0];
      this.chain += "( " + String(arguments[0]) + " )";
    } else {
      this.chain += "( )";
    }

    return this;
  },
  removeLink(/* position */) {
    if (!((arguments[0] ^ 0) === arguments[0])) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }
    let x = this.chain.split("~~");

    if (arguments[0] > x.length || arguments[0] <= 0) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }


    x.splice(arguments[0] - 1, 1);

    this.chain = x.join("~~");


    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const x = this.chain;
    this.chain = "";
    return x;
  },
};

module.exports = {
  chainMaker
};
