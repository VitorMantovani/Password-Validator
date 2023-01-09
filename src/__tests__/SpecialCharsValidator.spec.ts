import { SpecialCharsValidator } from "../validators/SpecialCharsValidator";

jest.mock("../validators/SpecialCharsValidator");

describe("SpecialCharsValidator", () => {
  afterEach(() => jest.clearAllMocks());

  describe("validatepecialChars", () => {
    it("should be able to validate if there is at least two special characters in the password", () => {
      const caseValidator = new SpecialCharsValidator(
        [114, 90, 112, 121, 42, 68, 57, 53, 38, 87, 66, 69, 39, 49, 50, 51],
        '[]!@#$%^&*(),.?":{}|<>'
      );
      const spy = jest
        .spyOn(caseValidator, "validateSpecialChars")
        .mockReturnValueOnce(true);
      expect(caseValidator.validateSpecialChars()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able to validate if there is less than two special characters in the password", () => {
      const caseValidator = new SpecialCharsValidator(
        [114, 90, 112, 121, 49, 68, 57, 53, 56, 87, 66, 69, 50, 90, 52, 66],
        '[]!@#$%^&*(),.?":{}|<>'
      );
      const spy = jest
        .spyOn(caseValidator, "validateSpecialChars")
        .mockReturnValueOnce(false);
      expect(caseValidator.validateSpecialChars()).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
