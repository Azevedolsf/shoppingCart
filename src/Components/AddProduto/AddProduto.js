import React from 'react'
import imgAdd from '../../Assets/plus.png'
import imgRemove from '../../Assets/less.png'
import styles from './AddProduto.module.css'

const AddProduto = ({ id, valor, addQuant, removeQuant, quantidade}) => {

	return (
	<>
		<div className={styles.addProduto}>
		<span className={styles.btnProduto} onClick={() => removeQuant(id)}><img src={imgRemove} alt="remover" /></span>
		<span className={styles.quantidade}>{quantidade}</span>
		<span className={styles.btnProduto} onClick={() => addQuant(id)}><img src={imgAdd} alt="adicionar" /></span>
		</div>
		<span className={styles.valorProduto}>
			<sup>$</sup>{(valor * quantidade).toFixed(2)}
		</span>
	</>
	)
}

export default AddProduto
