export class LenghtValidator {
  constructor(private password: string, private minLen: number, private maxLen: number) {}

  validateLength(): boolean | string {
    const passwordLength = this.password.length;
    if (passwordLength >= this.minLen && passwordLength <= this.maxLen) {
        return true;
    }
    return "Tamanhao inválido!";
  }
}
