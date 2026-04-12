import { describe, expect, it } from "vitest";
import { generateJoinCode } from "./join-code";

describe("generateJoinCode", () => {
  it("returns a string of requested length using allowed charset", () => {
    const joinCode = generateJoinCode(8);
    expect(joinCode).toHaveLength(8);
    expect(joinCode).toMatch(/^[A-Z2-9]+$/);
    expect(joinCode).not.toMatch(/[01IO]/);
  });

  it("rejects invalid lengths", () => {
    expect(() => generateJoinCode(0)).toThrow();
    expect(() => generateJoinCode(13)).toThrow();
  });
});
