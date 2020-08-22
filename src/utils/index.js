
function isWebUrl(url) {
    return /^http(s)?\:\/\/\w+/.test(url)
}

export default {
    isWebUrl
}