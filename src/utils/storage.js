export const Storage = {
    save(key, value, needStringify = true) {
        
        localStorage.setItem(key, needStringify ? JSON.stringify(value) : value)
    },
    load(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    getAllData() {
        return JSON.stringify(localStorage);
    }
}
