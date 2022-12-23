import { ConvertToAscii } from "./ConvertToAscii";
import { CaseValidator } from "./validators/CaseValidator";
import { LenghtValidator } from "./validators/LengthValidator";
import { SequenceValidator } from "./validators/SequenceValidator";
import { SpecialCharsValidator } from "./validators/SpecialCharsValidator";

type PasswordFeedback = { result: boolean; errors: string[] };

const PASSWORD = "rZpy#$%D95&WBE'ABc";
const TO_LOWER_CASE__PASSWORD = PASSWORD.toLowerCase();
const PASSWORD_MIN_LENGTH = 16;
const PASSWORD_MAX_LENGHT = 32;
const SPECIAL_CHARS = '[]!@#$%^&*(),.?":{}|<>';

const passwordFeedback: PasswordFeedback = { result: true, errors: [] };

const convertToAscii = new ConvertToAscii(PASSWORD);
const asciiCodesArray = convertToAscii.convertCharsToAscii();

const lenghtValidator = new LenghtValidator(
  PASSWORD,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGHT
);

const specialCharsValidator = new SpecialCharsValidator(
  asciiCodesArray,
  SPECIAL_CHARS
);

const caseValidator = new CaseValidator(asciiCodesArray);

const lowerCaseAsciiArray = convertToAscii.convertCharsToAscii("lower");
const sequenceValidator = new SequenceValidator(lowerCaseAsciiArray);

const isLenghtRight = lenghtValidator.validateLength();
if (!isLenghtRight) {
  passwordFeedback.result = false;
  passwordFeedback.errors.push("Tamanho invalido");
}

const hasEnoughSpecialChars = specialCharsValidator.validateSpecialChars();
if (!hasEnoughSpecialChars) {
  passwordFeedback.result = false;
  passwordFeedback.errors.push("Faltam caracteres especiais");
}

const hasEnoughUpperAndLower = caseValidator.validateUpperAndLowerCase();
if (!hasEnoughUpperAndLower) {
  passwordFeedback.result = false;
  passwordFeedback.errors.push("Deve conter maiúsculas e minúsculas");
}

const hasSequencialChars = sequenceValidator.validateCharsSequence();
if (hasSequencialChars) {
  passwordFeedback.result = false;
  passwordFeedback.errors.push("Caracteres em sequencia");
}

console.log(passwordFeedback);
