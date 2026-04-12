import assert from "node:assert/strict";

/** Alphanumeric without ambiguous characters (0/O, 1/I). */
const JOIN_CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const DEFAULT_JOIN_CODE_LENGTH = 6;
const MAX_JOIN_CODE_LENGTH = 12;

function assertJoinCodeLength(joinCodeLength: number): void {
  assert(
    joinCodeLength > 0 && joinCodeLength <= MAX_JOIN_CODE_LENGTH,
    "joinCodeLength must be between 1 and MAX_JOIN_CODE_LENGTH inclusive",
  );
}

/**
 * Generates a short human-friendly code for QR / URL joins (not guaranteed unique — check DB).
 */
function pickRandomAlphabetIndex(): number {
  const randomBytes = new Uint32Array(1);
  globalThis.crypto.getRandomValues(randomBytes);
  const randomUint32 = randomBytes[0] ?? 0;
  return randomUint32 % JOIN_CODE_ALPHABET.length;
}

export function generateJoinCode(
  joinCodeLength: number = DEFAULT_JOIN_CODE_LENGTH,
): string {
  assertJoinCodeLength(joinCodeLength);
  let joinCode = "";
  for (let index = 0; index < joinCodeLength; index += 1) {
    const randomIndex = pickRandomAlphabetIndex();
    joinCode += JOIN_CODE_ALPHABET[randomIndex] ?? "X";
  }
  return joinCode;
}
