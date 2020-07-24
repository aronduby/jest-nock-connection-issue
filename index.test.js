import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

const host = 'http://localhost';
axios.defaults.baseURL = host;
axios.defaults.adapter = httpAdapter;

const NO_RESTORE = process.argv.includes('--norestore=true');

afterEach(() => {
    // not having this can cause memory leaks, having it causes ECONNREFUSED errors
    if (!NO_RESTORE) {
        nock.restore();
    }
});

describe('hmm', () => {
    test('1', async () => {
        nock(host).get('/test1').reply(200, 'hello world');
        const rsp = await axios.get('/test1');
        expect(rsp.data).toBe('hello world');
    });

    test('2', async () => {
        nock(host).get('/test2').reply(200, 'hello world');
        const rsp = await axios.get('/test2');
        expect(rsp.data).toBe('hello world');
    });

    test('3', async () => {
        nock(host).get('/test3').reply(200, 'hello world');
        const rsp = await axios.get('/test3');
        expect(rsp.data).toBe('hello world');
    });
});