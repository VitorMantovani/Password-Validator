import { SequenceValidator } from "../validators/SequenceValidator";

jest.mock("../validators/SequenceValidator");

describe("SpecialCharsValidator", () => {
  afterEach(() => jest.clearAllMocks());

  describe("validateCharsSequence", () => {
    it("should be able to validate if there is any sequence of characters in the password", () => {
      const caseValidator = new SequenceValidator([
        114, 90, 112, 121, 42, 68, 57, 53, 38, 87, 66, 69, 39, 49, 50, 51,
      ]);
      const spy = jest
        .spyOn(caseValidator, "validateCharsSequence")
        .mockReturnValueOnce(true);
      expect(caseValidator.validateCharsSequence()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able to validate if there is none sequence of characters in the password", () => {
      const caseValidator = new SequenceValidator([
        114, 90, 112, 121, 42, 68, 57, 53, 38, 87, 66, 69, 39, 90, 38, 66,
      ]);
      const spy = jest
        .spyOn(caseValidator, "validateCharsSequence")
        .mockReturnValueOnce(false);
      expect(caseValidator.validateCharsSequence()).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
