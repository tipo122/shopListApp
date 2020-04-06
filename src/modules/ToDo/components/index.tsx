import * as React from 'react'
import { Action } from 'redux-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ToDoState } from '../store/reducer';

interface OwnProps {
    loading?: boolean
}

export const Index = ({ loading }: OwnProps) => {
    return (
        <div className="todo">
            {loading && <div className="loading" />}
            <h1>ToDo App</h1>
        </div>
    )
}

const mapStateToProps = (state: ToDoState) => ({
    loading: state.isLoading,
})

const mapDispatchToProps = (
    dispatch: Dispatch<Action<any>>,
    props: OwnProps,
) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index)
