// Write your formatAddress function below this line
const formatAddress = (number, street, city, postcode) => {
    const splitPostcode = (postcode) => {
        const firstPartOfPostcode = postcode.substring(0, postcode.length -3);
        const secondPartOfPostcode = postcode.substring(postcode.length -3, postcode.length);
        return `${firstPartOfPostcode} ${secondPartOfPostcode}`;
    };

    return `${number} ${street.toUpperCase()}, ${city.toUpperCase()}, ${splitPostcode(postcode)}`;
}


// Tests below this line
describe("formatAddress", () => {
    it("should format 26 Holland STREET, Bristol, BS16 4YZ", () => {
        expect(formatAddress("26", "Holland STREET", "Bristol", "BS16XYZ")).toBe("26 HOLLAND STREET, BRISTOL, BS16 XYZ")
    });
    it("should format 101 KINGS ROAD, cardiff, CF31 2DY", () => {
        expect(formatAddress("101", "KINGS ROAD", "cardiff", "CF312DY")).toBe("101 KINGS ROAD, CARDIFF, CF31 2DY")
    });
    it("should format 50 BaTh AVENUE, SwAnSeA, SA2 8FG", () => {
        expect(formatAddress("50", "BaTh AVENUE", "SwAnSeA", "SA28FG")).toBe("50 BATH AVENUE, SWANSEA, SA2 8FG")
    })
});

