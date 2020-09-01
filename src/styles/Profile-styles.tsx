import styled from 'styled-components'
import { Input } from 'antd'
import { Colors } from './App-styles'
import Form from 'antd/lib/form/Form'
import Text from 'antd/lib/typography/Text'
import { Field } from 'redux-form'

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
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

export const ChooseFileForm = styled(Input)`
    cursor: pointer;
    width: 300px;
    border-radius: 10px;
    margin: 10px;
    color: rgba(0, 0, 0, 0.7);

    ::-webkit-file-upload-button {
        visibility: hidden;
    }
    :focus {
        box-shadow: none;
        background: ${Colors.defaultGreen};
        color: #fff;
    }
    ::before {
        content: 'Select...';
    }
    ::after {
        content: '';
    }
    :hover {
        border: 1px solid ${Colors.defaultGreen} !important;
        cursor: pointer;
    }
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    cursor: default;
    /* display: grid; */
    /* grid-template-areas: 'contact input'; */
`

export const EditContacts = styled.div`
    display: flex;
    flex-direction: column;
    cursor: default;
    /* display: grid; */
    /* grid-template-areas: 'contact input'; */
`

export const StyledContact = styled.div`
    /* grid-area: contact; */
    padding: 2px 5px 2px;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    :not(:first-child) {
        margin-top: 10px;
    }
    Input {
        width: 400px;
    }
`
export const EditStyledContact = styled.div`
    /* grid-area: contact; */
    padding: 2px 5px 2px;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    :not(:first-child) {
        margin-top: 10px;
    }
    Input {
        width: 400px;
    }
`

export const ContactInputField = styled(Field)`
    grid-area: input;
`
export const ProfileContainer = styled.div`
    border-radius: 5px;
    grid-area: cont;
`

export const ContactTitle = styled.div`
    color: rgba(0, 0, 0, 0.5);
    margin-right: 5px;
    font-weight: 600;
`

export const StatusLine = styled.div`
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 600px;
    margin-right: 5px;
`

export const StyledStatusInput = styled(Input)`
    width: 40%;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    :hover,
    :active,
    :focus {
        box-shadow: none;
        border: 1px solid ${Colors.defaultGreen};
    }
`

export const StyledAddPostForm = styled(Form)`
    display: flex;
    flex-direction: row;
    width: 80%;
    button {
        margin-left: 5px !important;
    }
`

export const Likes = styled(Text)`
    color: rgba(0, 0, 0, 0.5);
`

export const StyledSpan = styled.span`
    cursor: pointer;
    margin-left: 10px;
`

export const Status = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ProfileInfoItem = styled.div`
    display: flex;
    flex-direction: row !important;
    b {
        margin-right: 5px;
        color: rgba(0, 0, 0, 0.5);
    }
`
