const isExtensionMode = location.protocol == 'chrome-extension:';

export const ExtensionStorage = {
    save(key, value, needStringify = true) {
        return new Promise((resolve, reject) => {
            if (isExtensionMode) {
                chrome.storage.sync.set({ key, value: needStringify ? JSON.stringify(value) : value }, resolve);
            } else {
                localStorage.setItem(key, needStringify ? JSON.stringify(value) : value);
                resolve();
            }
        })
    },
    load(...keys) {
        return new Promise((resolve, reject) => {
            if (isExtensionMode) {
                chrome.storage.sync.get(keys, result => {
                    Object.keys(result).forEach(key => result[key] = JSON.parse(result[key]));
                    resolve(result);
                })
            } else {
                const result = {};
                keys.forEach(key => {
                    result[key] = JSON.parse(localStorage.getItem(key));
                })
            }
        })
    }
}
