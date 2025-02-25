function testError() {
    throw new Error('Testing Error!');
}

test('Testing Error', () => {
    expect(() => testError()).toThrow();
    expect(() => testError()).toThrow(Error);
    expect(() => testError()).toThrow('Testing Error');
    expect(() => testError()).toThrow(/Error/);
    // expect(() => testError()).toThrow(/^Testing Error$/); Test will fail
    expect(() => testError()).toThrow(/^Testing Error!$/);
});