const Enzyme = require('enzyme');
const axios = require('axios');

describe("playlist", () => {
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
        it("should return something", async () => {
            response = await httpClient.get('/fizzbuzz', {});
            expect(response.status).toEqual(200);
            expect(response.data.result).not.toBeUndefined();
        });
    });
});