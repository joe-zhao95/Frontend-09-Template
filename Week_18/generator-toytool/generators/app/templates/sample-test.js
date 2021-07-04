var assert = require("assert");
import { parseHTML } from "../src/parser";

describe("test case:", function () {
  it("1 + 1 == 2", function () {
    let tree = parseHTML("<a></a>");
    assert.equal(1 + 1, 2);
  });
});
