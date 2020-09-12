import { follow, usersActions, unfollow } from './users-reducer';
import { usersAPI } from '../api/users-api';
import { ResponseType, ResultCodesEnum } from '../api/api';
jest.mock('../api/users-api')

const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userApiMock.follow.mockClear()
    userApiMock.unfollow.mockClear()
})

const result: ResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: []
}

userApiMock.follow.mockReturnValue(Promise.resolve(result))
userApiMock.unfollow.mockReturnValue(Promise.resolve(result))

test('Success follow thunk', async () => {
    const thunk = follow(3)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.followSuccess(3))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, 3))
})

test('Success unfollow thunk', async () => {
    const thunk = unfollow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, 1))

})