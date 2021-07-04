var assert = require("assert");
import { parseHTML } from "../src/parser";

describe("parse html: ", function () {
  it("<a></a>", function () {
    let tree = parseHTML("<a></a>");
    assert.equal((tree.children[0].tagName = "a"));
    assert.equal((tree.children[0].children.length = 0));
  });

  it("<a href='test'></a>", function () {
    let tree = parseHTML("<a></a>");
    assert.equal((tree.children.length = 1));
    assert.equal((tree.children[0].children.length = 0));
  });

  it("<a href></a>", function () {
    let tree = parseHTML("<a></a>");
    assert.equal((tree.children.length = 1));
    assert.equal((tree.children[0].children.length = 0));
  });
});
