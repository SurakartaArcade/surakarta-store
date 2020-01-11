# Compress Surakarta games into one string

This small library can be used to convert a Surakarta game into a string that can be later converted back into a Surakarta
game. It is helpful when you need to send a state over the network or store it on disk.

## Usage

### Compressor

You can import the compressor functions as follows:
```js
import { Compressor, compress, decompress } from 'surakarta-store';

Compressor.compress(...);
Compressor.decompress(...);
```

**compress**

```js
compress(state: Surakarta | number[36]): number[3]
```

Compresses a `Surakarta` game or ones state into an array of just 3 number. These numbers can be stored as 32-bit integers on disk.

**decompress**

```js
decompress(values: number[3]): number[36]
```

Generates back the states of the Surakarta game compressed into `values`. You must create the actual `Surakarta` instance yourself.

### Bundler

The bundler is useful when you need to compress multiple (only one is allowed too) Surakarta games. It produces a JSON string holding the information.

You can import the bundler functions as follows:

```js
import { Bundler, bundle, unbundle } from 'surkarta-store';

Bundler.bundle(...);
Bundler.unbundle(...);
```

**bundle**

```js
bundle(states: Array<Surakarta | number[36]>): string
```

Bundles all the Surakarta games/states into one string.

```js
unbundle(string): Array<number[36]>
```

Unbundles all the `Surakarta` games into an array of states. You must create each `Surakarta` instance yourself.
