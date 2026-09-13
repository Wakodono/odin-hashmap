export function hashmap() {
    const loadFactor = 0.75;
    const capacity = 16;

    return {
        hash(key) {
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
            }
            console.log(hashCode)
            return hashCode;

        },

        set (key, vaule) {}
    }
};