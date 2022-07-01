const initialstate = {
  laporan: {},
  alllaporan: [],
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_ALL_LAPORAN':
      return {
        ...state,
        alllaporan: action.payload,
        loading: false,
      }
    case 'SET_LAPORAN':
      return {
        ...state,
        laporan: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
