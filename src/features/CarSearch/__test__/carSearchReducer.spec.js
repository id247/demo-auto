import fetchStates from 'constants/fetchStates';
import reducer, { initialState } from '../carSearchReducer';
import { fetchCarsActions } from '../carSearchActions';

let state;
beforeEach(() => {
  state = { ...initialState };
});

describe('carSearchReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should handle fetchCarsActions.fetch()', () => {
    expect(reducer(state, fetchCarsActions.fetch())).toEqual(initialState);
  });

  it('should handle fetchCarsActions.success()', () => {
    const expected = {
      ...state,
      ids: [1],
      totalItems: 1,
      fetchState: fetchStates.done
    };
    expect(
      reducer(
        state,
        fetchCarsActions.success({
          carIds: [1],
          totalItems: 1
        })
      )
    ).toEqual(expected);
  });

  it('should handle fetchCarsActions.fail()', () => {
    const expected = {
      ...state,
      fetchState: fetchStates.error
    };
    expect(reducer(state, fetchCarsActions.fail())).toEqual(expected);
  });
});
