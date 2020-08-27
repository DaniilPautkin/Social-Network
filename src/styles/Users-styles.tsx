import styled from 'styled-components'

export const UserPhoto = styled.img`
    border-radius: 10px;
    /* box-shadow: 5px 5px 10px #cecece, -5px -5px 10px #ffffff; */
    height: 100px;
    transition: 0.3s;
    :active {
        opacity: 0.8;
    }
    :active,
    :focus,
    :hover,
    :visited {
        opacity: 0.3;
    }
`

export const StyledUserContainer = styled.main`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Span = styled.span`
    display: inline-block;
    cursor: pointer;
    padding: 5px;
`

export const StyledUsersContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`

export const UsersPage = styled.div`
    margin: 0 auto;
    width: 90%;
`

export const UserName = styled.div`
    margin: 10px 0px 3px 0px;
    cursor: pointer;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    ::nth-child(2) {
        margin-bottom: 3px;
    }
`
