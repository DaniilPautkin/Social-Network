import usersReducer, { InitialStateType, usersActions } from './users-reducer';

let state: InitialStateType
    
beforeEach(() => {
   state =  {
    users: [
        { id: 0, name: 'Dan', followed: false, photos: { small: null, large: null }, status: 'status 0'},
        { id: 1, name: 'Ann', followed: true, photos: { small: null, large: null }, status: 'status 1'},
        { id: 2, name: 'Red', followed: false, photos: { small: null, large: null }, status: 'status 2'},
        { id: 3, name: 'Red', followed: true, photos: { small: null, large: null }, status: 'status 3'}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: {
        term: '',
        friend: false
    }
}
})

test('Follow success', () => {

    const newState = usersReducer(state, usersActions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('Unfollow success', () => {

    const newState = usersReducer(state, usersActions.unfollowSuccess(3))

    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})