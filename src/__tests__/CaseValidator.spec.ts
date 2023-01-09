import { CaseValidator } from "../validators/CaseValidator";

jest.mock("../validators/CaseValidator");

describe("CaseValidator", () => {
  afterEach(() => jest.clearAllMocks());

  describe("validateUpperAndLowerCase", () => {
    it("should be able to validate if password has upper and lower case letters", () => {
      const caseValidator = new CaseValidator([
        114, 90, 112, 121, 42, 68, 57, 53, 38, 87, 66, 69, 39, 90, 38, 66,
      ]);
      const spy = jest
        .spyOn(caseValidator, "validateUpperAndLowerCase")
        .mockReturnValueOnce(true);
      expect(caseValidator.validateUpperAndLowerCase()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able to validate if password has not upper and lower case letters", () => {
      const caseValidator = new CaseValidator([
        82, 90, 80, 89, 42, 68, 57, 53, 38, 87, 66, 69, 39, 90, 38, 66,
      ]);
      const spy = jest
        .spyOn(caseValidator, "validateUpperAndLowerCase")
        .mockReturnValueOnce(false);
      expect(caseValidator.validateUpperAndLowerCase()).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
