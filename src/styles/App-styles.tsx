import styled from 'styled-components'

// Colors

export const Colors = {
    mainColor: '#24292E',
    secondColor: '#FAFBFC',
    greenColor: '#28A745',
}

export const MainWrapper = styled.div`
    margin: 0 auto;
    grid-gap: 10px;
    margin-top: 10px;
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
    background: #c5c6c7;
    grid-area: cont;

    @media screen and (max-width: 900px) {
        border-bottom-right-radius: 0;
    }
`

export const StyledPreloader = styled.div`
    display: flex;
    justify-content: center;

    img {
        padding: 20px;
        height: 50px;
    }
`

export const StyledPaginator = styled.div``

export const StyledPaginatorPage = styled.div``
