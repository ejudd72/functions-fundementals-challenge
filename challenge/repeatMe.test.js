// Write a function called 'repeatMe' that will take 2 parameters, a number and a string. 
// The string should be repeated that number parameter's number of times
// Each repetition of the string should alternate between upper and lower case
// Tip: Think about how you will handle the space at the end of your function's output.

// Functions below this line
const repeatMe = (length, string) => {
    let result = "";
    
    for (let i = 0; i < length; i += 1) {
        if(i % 2 === 1){
            result += `${string.toUpperCase()}`;
        }
        if(i % 2 === 0){
            result += `${string.toLowerCase()}`;
        }
        if(i !== length -1){
            result += " ";
        }
    }

    return result;
};

// Tests below this line
describe("repeatMe", () => {
    it("should repeat 'string' three times", () => {
        expect(repeatMe(3, "string")).toBe("string STRING string")
    });
    it("should repeat 'a' 5 times", () => {
        expect(repeatMe(5, "a")).toBe("a A a A a")
    });
    it("should repeat a short string that has varied casing", () => {
        expect(repeatMe(6, "hElLo")).toBe("hello HELLO hello HELLO hello HELLO")
    });
});