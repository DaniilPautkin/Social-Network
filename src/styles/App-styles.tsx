import styled from 'styled-components'
import { Button } from 'antd'

// Colors

export const Colors = {
    mainColor: '#24292E',
    secondColor: '#FAFBFC',
    greenColor: '#28A745',
    lightGreen: '#40C463',
    redColor: '#EC6E61',
    blueColor: '#0366D6',
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

export const StyledButton = styled(Button)`
    border-radius: 5px;
    :hover {
        border: 1px solid ${Colors.greenColor};
        color: ${Colors.greenColor};
    }

    :focus,
    :active {
        background: ${Colors.greenColor};
        border: 1px solid ${Colors.greenColor};
        color: #fff;
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
        color: ${Colors.redColor};
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
