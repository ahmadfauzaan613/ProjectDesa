const initialstate = {
  user: (localStorage.getItem('id') && JSON.parse(localStorage.getItem('id'))) || {},
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
