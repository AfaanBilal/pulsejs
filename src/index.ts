/**
 * PulseJS
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

let c: Function | null = null;

const createMonitor = (f: () => void) => {
    const runner = () => {
        c = runner;
        f();
        c = null;
    };

    runner();
};

const createPulse = <T>(v: T): [() => T, (nV: T) => void] => {
    const observers = new Set<Function>();

    return [
        () => {
            if (c) observers.add(c);

            return v;
        },
        (newValue: T) => {
            v = newValue;

            for (const o of observers) o();
        }
    ];
};

export {
    createMonitor,
    createPulse,
};
