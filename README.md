Pulse
=====

![NPM](https://img.shields.io/npm/v/@afaanbilal/pulse?style=for-the-badge)
![Minified Size](https://img.shields.io/bundlephobia/min/@afaanbilal/pulse@0.0.3?style=for-the-badge)
![Minified + GZipped](https://img.shields.io/bundlephobia/minzip/@afaanbilal/pulse@0.0.3?label=MIN%20%2B%20GZIPPED&style=for-the-badge)

Author: **[Afaan Bilal](https://afaan.dev)**

## Introduction
**Pulse** is a JavaScript library for building reactive stuff.

## Installation
````
npm i @afaanbilal/pulse
````

## Example usage
````js
import { createMonitor, createPulse } from "@afaanbilal/pulse";

const [count, setCount] = createPulse(0);

const h1 = document.createElement("h1");
createMonitor(() => h1.innerText = `Count is ${count()}`);

const btn = document.createElement("button");
createMonitor(() => btn.innerText = `Increment (To: ${count() + 1})`);
btn.onclick = () => setCount(count() + 1);

const btnDouble = document.createElement("button");
createMonitor(() => btnDouble.innerText = `Double (To: ${count() * 2})`);
btnDouble.onclick = () => setCount(count() * 2);

document.body.append(h1, btn, btnDouble);

````

## Testing
````
npm test
````

````
> @afaanbilal/pulse@0.0.3 test
> jest --coverage

 PASS  test/index.test.ts
  √ should create a pulse (1 ms)
  √ should update a pulse
  √ should create a monitor

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.56 s, estimated 1 s
Ran all test suites.
````

## Contributing
All contributions are welcome. Please create an issue first for any feature request
or bug. Then fork the repository, create a branch and make any changes to fix the bug
or add the feature and create a pull request. That's it!
Thanks!

## License
**Pulse** is released under the MIT License.
Check out the full license [here](LICENSE).
