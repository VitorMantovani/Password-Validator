export class SequenceValidator {
  constructor(private asciiCodes: number[]) {}

  validateCharsSequence(): boolean | string {
    const charsSequenceCount = this.asciiCodes.reduce((acc, code, idx) => {
        const middle = this.asciiCodes[idx + 1];
        const last = this.asciiCodes[idx + 2];
        const passwordThreeCharsSequence = String.fromCharCode(code, middle, last);
        const asciiThreeCharsSequence = String.fromCharCode(code, code + 1, code + 2);

        if (passwordThreeCharsSequence === asciiThreeCharsSequence) acc++;
        return acc;
    }, 0)

    return charsSequenceCount > 0 ? "Caracteres em sequencia!" : true;
  }
}
