import axios from 'axios';
import apiRequest, { baseURL, defaultHeaders } from '../';

jest.mock('axios');
axios.mockResolvedValue({ data: {} });

describe('apiRequest', () => {
  it('calls `axios()` with `endpoint`, `method` and `body`', () => {
    const endpoint = '/endpoint';
    const options = {
      method: 'post',
      data: { foo: 'bar' }
    };

    apiRequest(endpoint, options);

    expect(axios).toBeCalledWith({
      url: baseURL + endpoint,
      method: options.method,
      headers: { ...defaultHeaders },
      data: options.data
    });
  });
});
