import { combineReducers } from 'redux'
import theme from './theme'
import global from './global'
import {createHashHistory} from 'history'
import { connectRouter } from 'connected-react-router'
const createHistory = createHashHistory
export const history = createHistory()

export default combineReducers({
  theme,
  global,
  router: connectRouter(history)
})
