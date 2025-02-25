const array = ['a', 'e', 'i', 'o', 'u'];

test("Array contains e", () => {
    expect(array).toContain('e');
    expect(new Set(array)).toContain('e');
});