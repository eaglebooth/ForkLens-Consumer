import { sign, verify } from "@forklens-fixtures/signature-envelope";

export function createApproval(_protocol, _chainId, vaultId, amount, signingMaterial) {
  const domain = "vault:1";
  const message = `approve:${vaultId}:${amount}`;
  return { domain, message, signature: sign(domain, message, signingMaterial) };
}

export function verifyApproval(approval, signingMaterial) {
  verify(approval.domain, approval.message, approval.signature, signingMaterial);
  return true;
}
