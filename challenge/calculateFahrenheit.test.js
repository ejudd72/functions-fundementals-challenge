// Fill in this function - it should take a value in celsius, and convert it to fahrenheit
const calculateFahrenheit = (celsius) => celsius * (9/5) + 32;

// Tests below this line
describe("calculateFahrenheit", () => {
    it("should give the correct value when celsius is 100", () => {
        expect(calculateFahrenheit(100)).toBe(212)
    });
    it("should give the correct value when celsius is 50", () => {
        expect(calculateFahrenheit(50)).toBe(122)
    });
    it("should give the correct value when celsius is 0", () => {
        expect(calculateFahrenheit(0)).toBe(32)
    });
    it("should give the correct value when celsius is -10", () => {
        expect(calculateFahrenheit(-10)).toBe(14)
    });
});