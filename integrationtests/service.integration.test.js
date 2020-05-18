const Enzyme = require('enzyme');
const axios = require('axios');

describe("playlist", () => {
    let httpClient;
    let response;

    beforeEach(() => {
       httpClient = axios.create({baseURL: 'http://localhost:8081'});
    });

    it("should return healthy status", async () => {
        response = await httpClient.get('/health', {});
        expect(response.status).toEqual(200);
        expect(response.data).toEqual('Healthy');
    });

    it("should return list of videos", async () => {
        const expectedPlaylist = [
            "1.mp4",
            "2.mp4",
            "3.mp4"
        ];
        response = await httpClient.get('/playlist', {});
        expect(response.status).toEqual(200);
        expect(response.data.playlist).not.toBeUndefined();
        expect(response.data.playlist).toEqual(expectedPlaylist);
    });
});