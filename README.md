Pulse
=====

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

## Contributing
All contributions are welcome. Please create an issue first for any feature request
or bug. Then fork the repository, create a branch and make any changes to fix the bug
or add the feature and create a pull request. That's it!
Thanks!

## License
**Pulse** is released under the MIT License.
Check out the full license [here](LICENSE).
