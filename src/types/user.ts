export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUserErrorsAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorsAction
