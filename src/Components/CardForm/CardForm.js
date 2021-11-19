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
            <div className={styles.fieldSetSeparator}>
                <fieldset>
                    <label htmlFor="">Expiration Date</label>
                    <div>
                        <input type="text" placeholder="mm" />
                        <input type="text" placeholder="yyyy" />
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="">CVV</label>
                    <input type="password" placeholder="XXX"/>
                </fieldset>           
            </div>
            <button className={styles.cardBtn}>
                Check Out
            </button>
        </form>
    )
}

export default CardForm
