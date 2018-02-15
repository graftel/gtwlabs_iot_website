
const rootReducer = (state = {}, action) => {
  console.log('rootReducer was called with state', state, 'and action', action)

  switch (action.type) {
      // etc.
      default:
          return state;
  }
}

export default rootReducer;
