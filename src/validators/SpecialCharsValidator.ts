export class SpecialCharsValidator {
  constructor(private asciiCodes: number[], private specialChars: string) {}

  validateSpecialChars(): boolean {
    const specialCharsArray = this.specialChars.split("");

    const specialCharsQuantity = this.asciiCodes.reduce((acc, curr) => {
      const passwordChar = String.fromCharCode(curr);
      const isIncluded = specialCharsArray.includes(passwordChar);
      if (isIncluded) acc++;
      return acc;
    }, 0);

    return specialCharsQuantity >= 2;
  }
}
