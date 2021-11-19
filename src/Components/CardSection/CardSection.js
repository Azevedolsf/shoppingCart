import React from 'react';
import imgCartao from '../../Assets/cartao.png';
import imgMaster from '../../Assets/master.png';
import CardForm from '../CardForm/CardForm';
import Titulo from '../Titulo/Titulo';
import styles from './CardSection.module.css'


const CardSection = () => {
    return (
        <div className={styles.card}>
            
            <Titulo texto="Card Type"/>

            <header className={styles.cardHeader}>
                <Titulo font="12px" cor="#76777E" texto="Card Type"/>
            </header>

            <section className={styles.sectionImgs}>
                <img alt="cartão" className={styles.cardType} src={imgCartao} />
                <img alt="bandeira cartão" className={styles.cardBanner}style={{maxWidth:"150px", margin:"0 auto 0 0"}}src={imgMaster} />
            </section>

            <CardForm />
        </div>

    )
}

export default CardSection
