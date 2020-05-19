const Enzyme = require('enzyme');
const axios = require('axios');

describe("fizzbuzz", () => {
    let httpClient;
    let response;

    beforeEach(() => {
       httpClient = axios.create({baseURL: 'http://localhost:8081'});
    });

    describe("Health Endpoints", () => {
        it("should return healthy status", async () => {
            response = await httpClient.get('/health', {});
            expect(response.status).toEqual(200);
            expect(response.data).toEqual('Healthy');
        });
    });

    describe("Fizzbuzz Endpoint", () => {
        it("should return Fizz when input is three", async () => {
            const params = {
                params: {
                    input: 3
                }
            };
            response = await httpClient.get('/fizzbuzz', params);
            expect(response.status).toEqual(200);
            expect(response.data.result).not.toBeUndefined();
            expect(response.data.result).toEqual("Fizz");
        });
    });
});