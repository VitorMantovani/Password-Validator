export class ConvertToAscii {
  constructor(private password: string) {}

  convertCharsToAscii(caseType: string = "normal"): number[] {
    if (caseType.toLowerCase() === "lower")
      this.password = this.password.toLowerCase();
    if (caseType.toLowerCase() === "upper")
      this.password = this.password.toUpperCase();
    const passwordChars = this.password.split("");
    return passwordChars.map((char) => char.charCodeAt(0));
  }
}
