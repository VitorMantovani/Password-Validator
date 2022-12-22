export class ConvertToAscii {
  constructor(private password: string) {};

  convertCharsToAscii(): number[] {
    const passwordChars = this.password.split("");
    return passwordChars.map((char) => char.charCodeAt(0));
  }
}
