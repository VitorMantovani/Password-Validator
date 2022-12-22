export class CaseValidator {
  constructor(
    private password: string,
    private upperCase: string,
    private lowerCase: string
  ) {}

  validateUpperAndLowerCase(): boolean | string {
    const passwordCharsArray = this.password.split("");
    const upperCaseLetters = this.upperCase.split("");
    const lowerCaseLetters = this.lowerCase.split("");
    for (let char of passwordCharsArray) {
      if (upperCaseLetters.includes(char) || lowerCaseLetters.includes(char))
        return true;
    }
    return "Deve conter maiúsculas e minúsculas";
  }
}
