import { testActionCreator } from 'utils/tests';
import createFetchActions from '../createFetchActions';

describe('createFetchActions', () => {
  it('creates fetch actions object', () => {
    const prefix = 'prefix/';
    const type = 'type';
    const fetchActions = createFetchActions(prefix, type);

    expect(fetchActions.fail).toBeInstanceOf(Function);
    expect(fetchActions.fetch).toBeInstanceOf(Function);
    expect(fetchActions.success).toBeInstanceOf(Function);
    expect(fetchActions.failType).toBe('prefix/type_FAIL');
    expect(fetchActions.requestType).toBe('prefix/type_REQUEST');
    expect(fetchActions.successType).toBe('prefix/type_SUCCESS');
  });

  const prefix = 'prefix/';
  const type = 'type';
  const fetchActions = createFetchActions(prefix, type);

  [
    { type: fetchActions.requestType, fn: fetchActions.fetch },
    { type: fetchActions.failType, fn: fetchActions.fail },
    { type: fetchActions.successType, fn: fetchActions.success }
  ].map(testActionCreator);
});
