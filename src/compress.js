/**
 * Compresses the given 36 2-bit states into four 32-bit states.
 */
export function compress (state) {
    if (!Array.isArray(state)) {
        state = state.states
    }

    const compressed = [0, 0, 0]

    for (let i = 0, p = 0; i < 3; i++) {
        for (let j = 0; j < 16 && p < 36; j++, p++) {
            compressed[i] |= (state[p] + 1) << (2 * j) // +1 in compression
        }
    }

    return compressed
}
