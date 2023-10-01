const { BankAccount } = require("./bankAccount");

describe("Bank Account Testing", () => {
  let jackAccount;

  beforeEach(() => {
    jackAccount = new BankAccount("Jack", 2700);
  });

  describe("Deposit Feature", () => {
    test("should increase the balance when a deposit is made", () => {
      jackAccount.deposit(100);
      expect(jackAccount.getBalance()).toBe(2800);
    });

    test("should throw an error for invalid deposit values", () => {
      expect(() => jackAccount.deposit(null)).toThrow();
      expect(() => jackAccount.deposit("string")).toThrow();
      expect(() => jackAccount.deposit(undefined)).toThrow();
      expect(() => jackAccount.deposit(0)).toThrow();
      expect(() => jackAccount.deposit(-110)).toThrow();
    });
  });

  describe("Withdraw Feature", () => {
    test("should decrease the balance when a withdrawal is made", () => {
      jackAccount.withdraw(100);
      expect(jackAccount.getBalance()).toBe(2600);
    });

    test("should throw an error for invalid withdrawal values", () => {
      expect(() => jackAccount.withdraw(null)).toThrow();
      expect(() => jackAccount.withdraw("string")).toThrow();
      expect(() => jackAccount.withdraw(undefined)).toThrow();
      expect(() => jackAccount.withdraw(0)).toThrow();
      expect(() => jackAccount.withdraw(-110)).toThrow();
    });

    test("should throw an error for excessive withdrawal amount", () => {
      expect(() => jackAccount.withdraw(3000)).toThrow();
    });
  });

  describe("Get Balance Function", () => {
    test("should return a defined balance", () => {
      expect(jackAccount.getBalance()).toBeDefined();
    });

    test("should return the correct balance value", () => {
      expect(jackAccount.getBalance()).toBe(2700);
    });
  });
});
