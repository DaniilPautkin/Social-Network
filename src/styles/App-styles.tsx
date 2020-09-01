import styled from 'styled-components'
import { Button } from 'antd'

// Colors

export const Colors = {
    darkGrey: '#24292E',
    lightGrey: '#FAFBFC',
    defaultGreen: '#28A745',
    darkGreen: '#196b2b',
    lightGreen: '#40C463',
    defaultRed: '#EC6E61',
    defaultBlue: '#0366D6',
}

export const MainWrapper = styled.div`
    margin: 0 auto;
    /* grid-gap: 10px; */
    /* margin-top: 10px; */
    margin-bottom: 10px;
    display: grid;
    width: 1200px;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-template-areas:
        'head head'
        'navbar cont';

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Main = styled.div`
    border-radius: 5px;
    color: black;
    padding: 10px;
    background: #fafbfc;
    grid-area: cont;

    @media screen and (max-width: 900px) {
        border-bottom-right-radius: 0;
    }
`

export const StyledPreloader = styled.div`
    display: flex;
    justify-content: center;

    img {
        height: 50px;
    }
`

export const StyledDefaultButton = styled(Button)`
    border-radius: 5px;
    :hover {
        border: 1px solid ${Colors.defaultGreen};
        color: ${Colors.defaultGreen};
    }

    :focus,
    :active {
        background: ${Colors.defaultGreen};
        border: 1px solid ${Colors.defaultGreen};
        color: #fff;
    }
`
export const StyledPrimaryButton = styled(Button)`
    border-radius: 5px;
    background: ${Colors.defaultGreen};
    color: ${Colors.lightGrey};
    :hover {
        background: ${Colors.lightGreen};
        /* border: 1px solid ${Colors.defaultGreen}; */
        color: ${Colors.lightGrey};
    }
    :focus,
    :active {
        background: ${Colors.darkGreen};
        border: 1px solid ${Colors.darkGreen};
        color: #fff;
    }
`

export const StyledLinkButton = styled(Button)`
    border-radius: 5px;
    background: rgba(0, 0, 0, 0);
    border: none;
    color: ${Colors.defaultGreen};
    :hover {
        color: ${Colors.defaultGreen};
    }
    :focus,
    :active {
        color: ${Colors.defaultGreen};
    }
`

export const StyledPaginator = styled.div`
    display: flex;
    flex-direction: row;

    .selectedPage {
        color: #ffffff;
        border-radius: 10px;
        background-color: rgb(255, 38, 0);
        font-weight: bold;
    }
`

export const Page = styled.div`
    padding: 5px;
    margin: 3px;
    border-radius: 100px;
    cursor: pointer;
    :hover {
        color: ${Colors.defaultRed};
    }
    .selectedPage:hover {
        background: rgba(0, 0, 0, 0);
        color: #000;
    }
`

export const StyledPaginatorPage = styled.div`
    /* width: 100%;     */
    /* margin: 0 auto; */
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0px 10px 0px;
`
