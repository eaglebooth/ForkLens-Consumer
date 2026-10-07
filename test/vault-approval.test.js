import test from "node:test";
import assert from "node:assert/strict";
import { createApproval, verifyApproval } from "../src/vault-approval.js";

test("legacy approval verifies", () => {
  const approval = createApproval("vault-7", 42, "test-material");
  assert.equal(verifyApproval(approval, "test-material"), true);
});
