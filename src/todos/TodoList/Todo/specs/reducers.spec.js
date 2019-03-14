import reducers from '../todo'

describe('reducers reducer', () => {
  it('should handle initial state', () => {
    expect(reducers(undefined, {})).toEqual([]);
  });
  it('should handle TOGGLE_TODO', () => {
    expect(
      reducers([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
});
