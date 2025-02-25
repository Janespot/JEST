test('No I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('stop in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
});