export function hashmap() {
    const loadFactor = 0.75;
    const capacity = 16;
    const buckets = new Array(capacity); // array with 16 empty slots

    return {
        hash(key) {
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
            }

            return hashCode;

        },

        set (key, value) {
            const index = this.hash(key)
            const card = {
                key, value
            }

            if (buckets[index] === undefined) {
                buckets[index] = [card] // initialise an array at this point in the hashmap with a new card as it's first item
            } else {
                for (const card of buckets[index]) {
                    if (card.key === key) {
                        card.value = value;
                        return;
                    }
                }
                buckets[index].push(card)
            }
        },

        get (key) {
            const index = this.hash(key);
            const bucket = buckets[index];
            if (bucket === undefined) {
                return undefined;
            } else {
                for (const card of bucket) {
                    if (card.key === key) {
                        return card.value;
                    }
                }
            }
        },

        has (key) {
            if (this.get(key) !== undefined) {
                return true;
            }

            return false;
        },

        remove (key) {
            const index = this.hash(key)
            const bucket = buckets[index]

            if (bucket === undefined) {
                return false;

            } else {
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i].key === key) {
                        bucket.splice(i, 1);
                        return true;
                    }
                }
                return false;
            }
        },

        length () {
            let count = 0;

            for (const bucket of buckets) {
                if (bucket !== undefined && bucket.length > 0) {
                    count = count + bucket.length
                }
            }

            return count;
        },

        clear () {
            buckets.fill(undefined)
        },

        keys () {
            const keys = []
            for (const bucket of buckets) {
                if (bucket !== undefined && bucket.length > 0) {
                    for (const card of bucket) {
                        keys.push(card.key)
                    }
                }
            }

            return keys;
        },

        values () {
            const values = []
            for (const bucket of buckets) {
                if (bucket !== undefined && bucket.length > 0) {
                    for (const card of bucket) {
                        values.push(card.value)
                    }
                }
            }

            return values
        }
    }
};