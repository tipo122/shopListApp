import { ofType } from 'redux-observable'
import { RootState } from '../../../reducers'
import actionTypes from '../../../actionTypes'
import { Action } from 'redux-actions'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

export const sampleEpic = (
  action$: Observable<Action<any>>,
  store: RootState,
) =>
  action$.pipe(
    ofType(actionTypes.SAMPLE_ACTION),
    tap(() => console.log('epic received action')),
  )

export default sampleEpic
