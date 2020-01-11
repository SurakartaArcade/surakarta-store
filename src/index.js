import { compress } from './compress'
import { decompress } from './decompress'
import { bundle, unbundle } from './bundle-unbundle'

export const Compressor = {
    compress,
    decompress
}

export const Bundler = {
    bundle,
    unbundle
}

export {
    compress,
    decompress,
    bundle,
    unbundle
}

export default {
    compress,
    decompress,
    Compressor,
    bundle,
    unbundle,
    Bundler
}
