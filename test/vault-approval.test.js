import test from "node:test";
import assert from "node:assert/strict";
import { createApproval, verifyApproval } from "../src/vault-approval.js";

test("approval verifies with the hard-coded default domain", () => {
  const approval = createApproval("vault", 61999, "vault-7", 42, "test-material");
  assert.equal(verifyApproval(approval, "test-material"), true);
  assert.equal(approval.domain, "vault:1");
});
