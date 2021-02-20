
function isWebUrl(url) {
    return /^http(s)?\:\/\/\w+/.test(url)
}

let index = 0;
export function getUUID() {
    return `uuid-${Date.now()}-${index++}`
}

export default {
    isWebUrl
}