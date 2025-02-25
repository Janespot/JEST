test('Floating Point Number', () => {
    const value = 0.17 + 0.13;

    // expect(value).toBe(0.3); This won't work

    expect(value).toBeCloseTo(0.3);
});