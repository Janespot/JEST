test('Object Assignment', () => {
    const data = { name: "June" };
    data["age"] = 22;

    expect(data).toEqual({ name: "June", age: 22 });
});