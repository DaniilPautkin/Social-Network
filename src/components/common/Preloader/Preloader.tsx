import React from 'react'
import preloader from '../../../assets/images/giphy.gif'
import { StyledPreloader } from '../../../styles/App-styles'

type PropsType = {}

let Preloader: React.FC<PropsType> = (props) => {
    return (
        <StyledPreloader>
            <img src={preloader} alt="" />
        </StyledPreloader>
    )
}

export default Preloader
