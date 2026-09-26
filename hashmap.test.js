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

    test("bucket number has to be in range", () => {
        const map = hashmap()
        const code = map.hash("Baboon")

        expect(code).toBeGreaterThanOrEqual(0)
        expect(code).toBeLessThan(16)
    })
})

describe("set", () => {
    test("key already exists", () => {})
    test("passed key and value should update bucket at chosen index", () => {
        const map = hashmap();
        map.set("Carlos", "hello")
        
        expect(map.get("Carlos")).toBe("hello")
    })
})

describe("get", () => {
    let map;

    beforeEach(() => {
        map = hashmap()
    })

    test("is defined", () => {
        expect(map.get).toBeDefined()
    })
})