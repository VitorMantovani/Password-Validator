export class SequenceValidator {
  constructor(private asciiCodes: number[]) {}

  validateCharsSequence(): boolean {
    const charsSequenceCount = this.asciiCodes.reduce((acc, code, idx) => {
      const isSpecialCharacter =
        (code >= 33 && code <= 47) || (code >= 58 && code <= 64);
      if (isSpecialCharacter) {
        return acc;
      }
      const middle = this.asciiCodes[idx + 1];
      const last = this.asciiCodes[idx + 2];
      const passwordThreeCharsSequence = String.fromCharCode(
        code,
        middle,
        last
      );
      const asciiThreeCharsSequence = String.fromCharCode(
        code,
        code + 1,
        code + 2
      );

      if (passwordThreeCharsSequence === asciiThreeCharsSequence) acc++;
      return acc;
    }, 0);

    return charsSequenceCount > 0;
  }
}
