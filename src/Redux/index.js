import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as laporanReducer } from './Laporan/reducer'

export const reducer = combineReducers({
  laporan: laporanReducer,
})
export const store = createStore(reducer, applyMiddleware(thunk))
