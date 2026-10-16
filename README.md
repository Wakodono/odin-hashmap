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

### Technical details

- **Hashing**: Uses a prime-number multiplication algorithm (prime = 31) to convert string keys into bucket indices. The same key always produces the same index.
- **Buckets**: The map has 16 buckets (slots). Each bucket can hold multiple entries.
- **Collision handling**: When two keys hash to the same bucket, both are stored in an array at that position (a technique called "chaining"). The code searches through the array to find the right key.
- **Factory pattern**: The hash map is created via a factory function rather than a class, keeping the internal buckets array private.

## How I tested it

The project uses [Jest](https://jestjs.io/) for unit testing, with 16 passing tests covering:

- The hash function produces consistent integer indices within the valid range (0–15)
- `set` creates new entries and overwrites existing ones
- Collisions are handled correctly (two different keys hashing to the same bucket both store and retrieve properly)
- `get` returns the correct value or `undefined`
- `has` correctly reports whether a key exists
- `remove` deletes entries and returns the appropriate boolean
- `length` accurately counts stored pairs
- `clear` empties the map completely

To run the tests:

```bash
npm install
npm test
```

## What I learned

- **Data structures**: Implementing a hash map from scratch rather than relying on JavaScript's built-in `Map` or plain objects.
- **Collision handling**: Understanding why collisions happen and how chaining resolves them.
- **Test-driven development**: Writing tests alongside the implementation, using Jest's `beforeEach` hooks to keep test cases isolated.
- **ES modules**: Configuring Jest to work with native ES module syntax.

## Current status

The core functionality is complete. The following are not yet implemented:

- `keys()` — return an array of all stored keys
- `values()` — return an array of all stored values
- `entries()` — return an array of `[key, value]` pairs
- **Dynamic resizing** — the load factor (0.75) and initial capacity (16) are defined, but the map doesn't yet grow when it gets full

---

**Author:** Wako Anindo
