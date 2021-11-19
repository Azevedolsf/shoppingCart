import React from 'react'
import styles from './CardForm.module.css'

const CardForm = () => {
    return (
        <form className={styles.cardForm}>

            <fieldset>
                <label htmlFor="">Name on card</label>
                <input type="text" placeholder="Giga Tamarashvili"/>
            </fieldset>
            <fieldset>
                <label htmlFor="">Card Number</label>
                <input type="password" placeholder="****   ****   ****   ****"/>
            </fieldset>

            <button className={styles.cardBtn}>
                Check Out
            </button>
        </form>
    )
}

export default CardForm
