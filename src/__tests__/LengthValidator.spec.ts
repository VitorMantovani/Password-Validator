import { LenghtValidator } from "../validators/LengthValidator";

jest.mock("../validators/LengthValidator");

describe("LengthValidator", () => {
  afterEach(() => jest.clearAllMocks());

  describe("validateLength", () => {
    it("should be able to validate if password's length is valid", () => {
      const lenghtValidator = new LenghtValidator("rZpy*D95&WBE'Z&B", 16, 32);
      const spy = jest
        .spyOn(lenghtValidator, "validateLength")
        .mockReturnValueOnce(true);
      expect(lenghtValidator.validateLength()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able to validate if password's length is invalid", () => {
      const lenghtValidator = new LenghtValidator("rZpy*D95&WBE'Z", 16, 32);
      const spy = jest
        .spyOn(lenghtValidator, "validateLength")
        .mockReturnValueOnce(false);
      expect(lenghtValidator.validateLength()).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
