export class CaseValidator {
  constructor(private asciiCodes: number[]) {}

  validateUpperAndLowerCase(): boolean | string {
    const lowerCaseLetters = this.asciiCodes.reduce((acc, curr) => {
        const isLower = curr >= 97 && curr <= 122;

        if(isLower) acc++;
        return acc;
    }, 0)

    const upperCaseLetters = this.asciiCodes.reduce((acc, curr) => {
        const isUpper = curr  >= 65 && curr <= 90;

        if(isUpper) acc++;
        return acc;
    }, 0)

    if(lowerCaseLetters > 0 && upperCaseLetters > 0) return true;

    return "Deve conter maiúsculas e minúsculas";
  }
}
