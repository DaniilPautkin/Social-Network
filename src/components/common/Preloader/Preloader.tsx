import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../../assets/images/giphy.gif'

type PropsType = {}

let Preloader: React.FC<PropsType> = (props) => {
    return (
        <div className={s.preCont}>
            <img src={preloader} className={s.pre} alt="" />
        </div>
    )
}

export default Preloader
