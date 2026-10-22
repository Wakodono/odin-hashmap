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
    let map;

    beforeEach(() => {
        map = hashmap();
    })

    test("key already exists", () => {
        map.set("Chulo", "Arf!")
        map.set("Chulo", "Oiii!")

        expect(map.get("Chulo")).toBe("Oiii!")
    })

    test("passed key and value should update bucket at chosen index", () => {

        map.set("Carlos", "hello")
        
        expect(map.get("Carlos")).toBe("hello")
    })

    test("collisions are handled", () => {
        map.set("banana", "red");
        map.set("bat", "blue");
        expect(map.get("banana")).toBe("red");
        expect(map.get("bat")).toBe("blue");
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

    test("returns undefined if key is not found", () => {
        expect(map.get("Bobo")).toBeUndefined();
    })
})

describe("has", () => {
    let map;

    beforeEach(() => {
        map = hashmap();
    });

    test("returns true when key is stored", () => {
        map.set("Wako", "Boss")

        expect(map.has("Wako")).toBe(true);
    })
    
    test("returns false when key is not stored", () => {
        expect(map.has("Habibti")).toBe(false);

    })
})

describe("remove", () => {
    let map;

    beforeEach(() => {
        map = hashmap();
    });

    test("key is removed", () => {
        map.set("Kim", "Aiko")

        expect(map.remove("Kim")).toBe(true)
        expect(map.has("Kim")).toBe(false)
    })

    test("key never stored", () => {
        expect(map.remove("Stephen")).toBe(false)
    })
})

describe("length", () => {
    let map;

    beforeEach(() => {
        map = hashmap();
    });

    test("new maps have a length of 0", () => {
        expect(map.length()).toBe(0)
    })

    test("returns length of a map", () => {
        map.set("Fire type", "Charizard")
        map.set("Water type", "Blastoise")
        map.set("Fighting type", "Hitmon Lee")

        expect(map.length()).toBe(3)
    })
})

describe("clear", () => {
    let map;

    beforeEach(() => {
        map = hashmap()
    })

    test("should return an empty map", () => {
        map.set("Greatest", "Justin Jefferson")
        map.set("Honourable mention", "Antonio Brown")
        map.set("Him", "Odell Beckam Junior")
        map.set("Mutant", "JSN")

        map.clear()

        expect(map.length()).toBe(0)
        expect(map.has("Greatest")).toBe(false)
    })
})

describe("keys", () => {
    let map;

    beforeEach(() => {
        map = hashmap()

        map.set("Fire type", "Charizard")
        map.set("Water type", "Blastoise")
        map.set("Fighting type", "Hitmon Lee")
    })

    test("returns keys in array", () => {
        expect(map.keys()).toEqual(
            expect.arrayContaining(["Fire type", "Water type", "Fighting type"])
        )
    })
})

describe("values", () => {
    let map;

    beforeEach(() => {
        map = hashmap()
    })

    test("returns an empty array when nothing is stored", () => {
        expect(map.values()).toEqual([])
    })

    test("returns the stored values", () => {
        map.set("Fire type", "Charizard")
        map.set("Water type", "Blastoise")
        map.set("Fighting type", "Hitmon Lee")

        expect(map.values()).toEqual(
            expect.arrayContaining(["Charizard", "Blastoise", "Hitmon Lee"])
        )
        expect(map.values()).toHaveLength(3)
    })

    test("returns both values when two keys collide", () => {
        map.set("banana", "red")
        map.set("bat", "blue")

        expect(map.values()).toEqual(expect.arrayContaining(["red", "blue"]))
        expect(map.values()).toHaveLength(2)
    })

    test("returns the new value when a key is overwritten", () => {
        map.set("Chulo", "Arf!")
        map.set("Chulo", "Oiii!")

        expect(map.values()).toEqual(["Oiii!"])
    })
})

describe("entries", () => {
    let map;

    beforeEach(() => {
        map = hashmap()
    })

    test("returns an empty array when nothing is stored", () => {
        expect(map.entries()).toEqual([])
    })

    test("returns each stored pair as [key, value]", () => {
        map.set("Fire type", "Charizard")
        map.set("Water type", "Blastoise")
        map.set("Fighting type", "Hitmon Lee")

        expect(map.entries()).toEqual(
            expect.arrayContaining([
                ["Fire type", "Charizard"],
                ["Water type", "Blastoise"],
                ["Fighting type", "Hitmon Lee"],
            ])
        )
        expect(map.entries()).toHaveLength(3)
    })

    test("returns both pairs when two keys collide", () => {
        map.set("banana", "red")
        map.set("bat", "blue")

        expect(map.entries()).toEqual(
            expect.arrayContaining([
                ["banana", "red"],
                ["bat", "blue"],
            ])
        )
        expect(map.entries()).toHaveLength(2)
    })

    test("returns the new pair when a key is overwritten", () => {
        map.set("Chulo", "Arf!")
        map.set("Chulo", "Oiii!")

        expect(map.entries()).toEqual([["Chulo", "Oiii!"]])
    })
})