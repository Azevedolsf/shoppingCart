import React from 'react'
import style from './Titulo.module.css'

const Titulo = ({texto, cor, font}) => {
    return (
        <h4 className={style.titulo} style={{color:cor, fontSize:font}}>
            {texto}
        </h4>
    )
}

export default Titulo
