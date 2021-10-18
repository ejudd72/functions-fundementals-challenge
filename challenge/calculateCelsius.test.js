// Functions below this line
const calculateCelsius = () => {
    // Fill in your function body here
};

// Tests below this line
describe("calculateCelsius", () => {
    it("should give the correct value when fahrenheit is 100", () => {
        expect(calculateCelsius(100)).toBe(37.7778)
    });
    it("should give the correct value when fahrenheit is 50", () => {
        expect(calculateCelsius(50)).toBe(10)
    });
    it("should give the correct value when fahrenheit is 0", () => {
        expect(calculateCelsius(0)).toBe(-17.7778)
    });
    it("should give the correct value when fahrenheit is -10", () => {
        expect(calculateCelsius(-10)).toBe(-23.3333)
    });
});