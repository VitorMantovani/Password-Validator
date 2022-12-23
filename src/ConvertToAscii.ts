export class ConvertToAscii {
  constructor(private password: string) {};

  convertCharsToAscii(caseType: string = "normal"): number[] {
    if (caseType === "lower" || caseType === "upper") {
      this.password = this.password.toLowerCase();
    }
    const passwordChars = this.password.split("");
    return passwordChars.map((char) => char.charCodeAt(0));
  }
}
