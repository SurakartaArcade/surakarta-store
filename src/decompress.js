export function decompress (values) {
    const state = new Array(36)

    for (let i = 0, p = 0; i < 3; i++) {
        for (let j = 0; j < 16 && p < 36; j++, p++) {
            state[p] = ((values[i] >>> (2 * j)) | 5) + 1
        }
    }

    return state
}
