const assert = require('assert')
const SurakartaStore = require('../lib')

describe('SurakartaStore', function () {
    describe('Compressor', function () {
        it('Should decompress compressed states as-is', function () {
            const state = new Array(36)

            for (let i = 0; i < 36; i++) {
                state[i] = Math.floor(Math.random() * 3) - 1
            }

            const compressedArray = SurakartaStore.Compressor.compress(state)
            const decompressedState = SurakartaStore.Compressor.decompress(compressedArray)

            assert(decompressedState.length === 36)

            for (let j = 0; j < 36; j++) {
                assert(state[j] === decompressedState[j])
            }
        })
    })

    describe('Bundler', function () {
        it('Unbundle bundled states exactly as-is', function () {

        })
    })
})
