import { sign, verify } from "@forklens-fixtures/signature-envelope";

function approvalDomain(protocol, chainId) {
  if (!protocol || !Number.isSafeInteger(chainId) || chainId <= 0) {
    throw new TypeError("protocol and positive chainId are required");
  }
  return `${protocol}:${chainId}`;
}

export function createApproval(protocol, chainId, vaultId, amount, signingMaterial) {
  const domain = approvalDomain(protocol, chainId);
  const message = `approve:${vaultId}:${amount}`;
  return { domain, message, signature: sign(domain, message, signingMaterial) };
}

export function verifyApproval(approval, signingMaterial) {
  return verify(approval.domain, approval.message, approval.signature, signingMaterial);
}
