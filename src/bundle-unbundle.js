import { compress } from './compress'
import { decompress } from './decompress'

export function bundle (surakartas) {
    const bundleArray = []

    for (const game of surakartas) {
        const values = compress(game)
        bundleArray.push(values)
    }

    return JSON.stringify(bundleArray)
}

export function unbundle (bundle) {
    const statesArray = []
    const bundleArray = JSON.parse(bundle)

    for (const values of bundleArray) {
        const state = decompress(values)
        statesArray.push(state)
    }

    return statesArray
}
