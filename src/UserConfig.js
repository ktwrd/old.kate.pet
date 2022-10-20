export const DefaultConfig = {
    'enableVisualizer': true,
    'hide88Button': false
}
export function getBoolean (key, fallback = false) {
    let value = localStorage[key] || DefaultConfig[key]
    if (value === undefined) {
        return fallback
    }

    return value.toString() === 'true'
}
export function get (key) {
    let value = localStorage[key]
    if (value === undefined) {
        return DefaultConfig[key]
    }
    return value
}
export function set (key, value) {
    localStorage[key] = value
}
