import { combineEpics } from 'redux-observable'

import todoEpics from './modules/ToDo/store/epic'

const epics = combineEpics(todoEpics)

export default epics
