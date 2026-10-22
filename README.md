# Hash Map

A hash map implementation in JavaScript, built for [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap).

## What is a hash map?

Think of a hash map like an extremely efficient filing cabinet. Instead of flipping through every folder to find what you need, you have a clever system: you feed in a label (the "key"), and it instantly tells you which drawer to open. The magic is in the "hash function" — a formula that turns any label into a drawer number.

This matters because it's the trick behind how JavaScript objects, databases, and caches look things up almost instantly, no matter how much data they hold.

## What I built

A hash map factory function with the following methods:

| Method | What it does |
|--------|--------------|
| `set(key, value)` | Stores a value under a given key. If the key already exists, it overwrites the old value. |
| `get(key)` | Retrieves the value stored under a key, or `undefined` if the key isn't found. |
| `has(key)` | Returns `true` if the key exists, `false` otherwise. |
| `remove(key)` | Deletes a key-value pair. Returns `true` if successful, `false` if the key wasn't there. |
| `length()` | Counts how many key-value pairs are currently stored. |
| `clear()` | Empties the entire map. |
| `keys()` | Returns an array of all stored keys. |
| `values()` | Returns an array of all stored values. |
| `entries()` | Returns an array of `[key, value]` pairs. |

### Technical details

- **Hashing**: Uses a prime-number multiplication algorithm (prime = 31) to convert string keys into bucket indices. The same key always produces the same index for a given capacity, and the result is kept inside the current bucket array.
- **Buckets**: The map starts with 16 slots. Each slot can hold multiple entries.
- **Collision handling**: When two keys hash to the same bucket, both are stored in an array at that position (a technique called "chaining"). The code searches through the array to find the right key.
- **Growth**: The load factor is `0.75`. When adding a new key would pass that ratio, capacity doubles and every existing pair is hashed into the new buckets. Overwriting an existing key does not grow the map.
- **Bounds check**: `set`, `get`, and `remove` throw if a bucket index is below `0` or past the last slot.
- **Factory pattern**: The hash map is created via a factory function rather than a class, keeping the internal buckets array private.

## How I tested it

The project uses [Jest](https://jestjs.io/) for unit testing, with 25 passing tests covering:

- The hash function produces consistent integer indices within the current capacity (0–15 on a new map)
- `set` creates new entries and overwrites existing ones
- Collisions are handled correctly (two different keys hashing to the same bucket both store and retrieve properly)
- `get` returns the correct value or `undefined`
- `has` correctly reports whether a key exists
- `remove` deletes entries and returns the appropriate boolean
- `length` accurately counts stored pairs
- `clear` empties the map completely
- `keys` returns the stored keys
- `values` returns the stored values
- `entries` returns each stored pair as `[key, value]`

To run the tests:

```bash
npm install
npm test
```

## Topics covered

- **Data structures**: Implementing a hash map from scratch rather than relying on JavaScript's built-in `Map` or plain objects.
- **Collision handling**: Understanding why collisions happen and how chaining resolves them.
- **Load factor and resizing**: Doubling capacity and rehashing existing entries when the map gets too full.
- **Test-driven development**: Writing tests alongside the implementation, using Jest's `beforeEach` hooks to keep test cases isolated.
- **ES modules**: Configuring Jest to work with native ES module syntax.

## Current status

The required hash map is complete: every assignment method works, and the map grows when a new key would pass the load factor. The optional `HashSet` extra credit is not included.

---

**Author:** Wako Anindo
