import { hashmap } from "./hashmap.js";

describe("hashmap", () => {
    test("hashmap is defined", () => {
      expect(hashmap).toBeDefined();
    });

    test.skip("accessing an index out of bounds should throw", () => {
      expect(hashmap(-1)).toThrow("Trying to access index out of bounds");
    });

})

describe("hash", () => {
    test("returns a hash code", () => {
        const code = hashmap().hash("cat");

        expect(Number.isInteger(code)).toBe(true);
        expect(Number.isFinite(code)).toBe(true);
    })

    test("same key alwyays returns same hash", () => {
        const map = hashmap()
        const animal1 = map.hash("dog")
        const animal2 = map.hash("dog")

        expect(animal1).toBe(animal2)
    })
})