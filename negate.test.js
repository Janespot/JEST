test('NOT operation', () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 5; j++) {
            expect(i + j).not.toBe(0);
        }
    }
});