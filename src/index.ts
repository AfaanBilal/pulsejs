/**
 * Pulse
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

let c: Function | null = null;

/**
 * Create a monitor for pulses.
 *
 * @param f The function to call when any of the pulses change.
 */
const createMonitor = (f: () => void) => {
    const runner = () => {
        c = runner;
        f();
        c = null;
    };

    runner();
};

/**
 * Create a pulse.
 *
 * @param v The initial value.
 */
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
