import React from 'react'
import styles from './Produto.module.css'
import AddProduto from '../AddProduto/AddProduto'
import imgClose from '../../Assets/close.png'


const Produto = ({imagem, nome, codigo, valor, remove, id, addQuant, quantidade, removeQuant}) => {

	return (
		<li className={styles.produto}>
			<div className={styles.produtoContainer}>
				<img className={styles.produtoImg} src={imagem} alt="comida"></img>   
				<div className={styles.nome}>
					<p className={styles.produtoNome}>{nome}</p>
					<span className={styles.produtoCod}>{codigo}</span>
				</div>
			</div>
			<div className={styles.produtoSeparador}>
			<AddProduto id={id} quantidade={quantidade} removeQuant={removeQuant} addQuant={addQuant} valor={valor}/>   
			<img onClick={() => remove(id)} className={styles.imgClose} src={imgClose} alt="fechar"/>
			</div>
		</li>
	)
}

export default Produto
