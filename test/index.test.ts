/**
 * Pulse
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { createPulse, createMonitor } from "../src/index";

it("should create a pulse", () => {
    const [p, setP] = createPulse(0);
    expect(p()).toBe(0);
});

it("should update a pulse", () => {
    const [p, setP] = createPulse(0);
    expect(p()).toBe(0);

    setP(1);
    expect(p()).toBe(1);
});

it("should create a monitor", () => {
    const [p, setP] = createPulse(0);

    let double = 0;
    createMonitor(() => double = 2 * p());

    expect(double).toBe(0);

    setP(1);
    expect(double).toBe(2);
});
