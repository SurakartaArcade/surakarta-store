const assert = require('assert')
const SurakartaStore = require('../lib')

function generateRandomState () {
    const state = new Array(36)

    for (let i = 0; i < 36; i++) {
        state[i] = Math.floor(Math.random() * 3) - 1
    }

    return state
}

function assertEquivalentStates (refState, state) {
    for (let j = 0; j < 36; j++) {
        assert(refState[j] === state[j])
    }
}

describe('SurakartaStore', function () {
    describe('Compressor', function () {
        it('Should decompress compressed states as-is', function () {
            const state = generateRandomState()

            const compressedArray = SurakartaStore.Compressor.compress(state)
            const decompressedState = SurakartaStore.Compressor.decompress(compressedArray)

            assert(decompressedState.length === 36)
            assertEquivalentStates(state, decompressedState)
        })
    })

    describe('Bundler', function () {
        it('Unbundle bundled states exactly as-is', function () {
            const bundleSize = Math.floor(Math.random() * 10)
            const states = new Array(bundleSize)

            for (let i = 0; i < bundleSize; i++) {
                states[i] = generateRandomState()
            }

            const bundle = SurakartaStore.Bundler.bundle(states)
            const unbundledStates = SurakartaStore.Bundler.unbundle(bundle)

            assert(unbundledStates.length === bundleSize)

            for (let j = 0; j < bundleSize; j++) {
                assertEquivalentStates(states[j], unbundledStates[j])
            }
        })
    })
})
