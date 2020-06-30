import styled from 'styled-components'

export const MissingStatusBar = styled.div`
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
    background-color: #66fcf1;
    font-weight: 300;

    :hover {
        background-color: rgb(0, 0, 0, 0);
    }
`

export const Description = styled.div`
    padding: 10px;
`

export const ProfileImage = styled.img`
    height: 100px;
    margin: 5px 5px 0px 5px;
    border-radius: 10px;
`

export const SingleForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ChooseFileForm = styled.input`
    cursor: pointer;
    :hover {
        color: #ffffff;
        background: #004e49;
        /* box-shadow: inset 5px 5px 10px #c4c4c4, inset -5px -5px 10px #ffffff; */
        cursor: pointer;
    }
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledContact = styled.div`
    padding: 5px;
    border-radius: 2px;
    margin-left: 10px;
`
export const ProfileContainer = styled.div`
    border-radius: 5px;
    grid-area: cont;
`

export const StatusLine = styled.div`
    color: #f1f1f1;
`
