export class LenghtValidator {
  constructor(
    private password: string,
    private minLen: number,
    private maxLen: number
  ) {}

  validateLength(): boolean {
    const passwordLength = this.password.length;
    return passwordLength >= this.minLen && passwordLength <= this.maxLen;
  }
}
