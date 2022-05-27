import { Calculator } from "../src/calculator";

describe('Calculator', () => {
  it('Should return 4 when doing 2 + 2', () => {
    const calculator = new Calculator();

    expect(calculator.plus(2, 2)).toBe(4);
  });
});
