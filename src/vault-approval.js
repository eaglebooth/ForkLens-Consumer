import { createHash } from "node:crypto";

function legacySign(message, signingMaterial) {
  return createHash("sha256").update(`${message}:${signingMaterial}`).digest("hex");
}

export function createApproval(vaultId, amount, signingMaterial) {
  const message = `approve:${vaultId}:${amount}`;
  return { message, signature: legacySign(message, signingMaterial) };
}

export function verifyApproval(approval, signingMaterial) {
  return legacySign(approval.message, signingMaterial) === approval.signature;
}
