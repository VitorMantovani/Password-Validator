export class SpecialCharsValidator {
  constructor(private password: string, private specialChars: string) {}

  validateSpecialChars(): boolean | string {
    const passwordCharsArray = this.password.split("");
    const specialCharsArray = this.specialChars.split("");

    const specialCharsQuantity = passwordCharsArray.reduce((acc, curr) => {
      const isIncluded = specialCharsArray.includes(curr);
      if (isIncluded) acc += 1;
      return acc;
    }, 0);

    return specialCharsQuantity >= 2 ? true : "Faltam caracteres especiais!";
  }
}
