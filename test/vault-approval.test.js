import test from "node:test";
import assert from "node:assert/strict";
import { createApproval, verifyApproval } from "../src/vault-approval.js";

test("domain-bound approval verifies on its originating chain", () => {
  const approval = createApproval("vault", 61999, "vault-7", 42, "test-material");
  assert.equal(verifyApproval(approval, "test-material"), true);
});

test("approval cannot be replayed under another chain domain", () => {
  const approval = createApproval("vault", 61999, "vault-7", 42, "test-material");
  assert.equal(verifyApproval({ ...approval, domain: "vault:1" }, "test-material"), false);
});

test("unscoped approvals are rejected", () => {
  assert.throws(
    () => createApproval("vault", 0, "vault-7", 42, "test-material"),
    /positive chainId/,
  );
});
