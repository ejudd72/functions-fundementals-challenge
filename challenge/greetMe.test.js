// Functions below this line
const greetMe = (name) => {
    if (name) {
        return `Hello ${name}`;
    }
    
   return "Hello"
};

// Tests below this line
describe("greetMe", () => {
    it("should give the correct greeting when run without an argument", () => {
        expect(greetMe()).toBe("Hello");
    });
    it("should give the correct greeting when run with a name", () => {
        expect(greetMe("Ellie")).toBe("Hello Ellie");
    });
});
