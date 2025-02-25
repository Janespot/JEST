const array = [1, 2, 3, 4, 5];

const fetchData = (i) => {
    return new Promise((resolve, reject) => {
        if (i >= 0 && i <= array.length) resolve(array[i]);
        else reject('error');
    });
}

const fetchValue = (callback) => {
    setTimeout(() => {
        const data = 'peanut butter';

        callback(null, data);
    }, 1000);
}

// Promises
test('data is 4', () => {
    return fetchData(3).then(data => {
        expect(data).toBe(4);
    });
});

// async/await
test('data is 3', async () => {
    const data = await fetchData(2);

    expect(data).toBe(3);
});

test('Failed test', async () => {
    expect.assertions(1);

    try {
        await fetchData(12);
    } catch (error) {
        expect(error).toMatch('error');
    }
});

//.resolves / .rejects
test('data is 2, testing resolves', async () => {
    await expect(fetchData(1)).resolves.toBe(2);
});

test('failed fetch, testing reject', async () => {
    await expect(fetchData(12)).rejects.toMatch('error');
});

// Callback
test('data is peanut butter', (done) => {
    function callback(error, data) {
        if(error) {
            done(error);
            return;
        }

        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchValue(callback);
});