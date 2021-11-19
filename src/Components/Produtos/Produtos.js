import React from 'react';
import Produto from '../Produto/Produto';
import styles from './Produtos.module.css';
import chicken from '../../Assets/chicken.png';
import potatoes from '../../Assets/potatoes.png';
import breakfast from '../../Assets/breakfast.png';
import arrow from '../../Assets/arrow.png';
import Titulo from '../Titulo/Titulo';

const Produtos = () => {

	const [produtos, setProdutos] = React.useState(
		[
			{imagem:chicken, nome:"Chicken momo",id:1, codigo:"#4231648",quantidade:1, valor:10.50},
			{imagem:potatoes, nome:"Spicy Mexican Potatoes", id:2, codigo:"#4231648", quantidade:1, valor:8.50},
			{imagem:breakfast, nome:"Breakfast", id:3, codigo:"#4231648",quantidade:1, valor:5.90}
		]
	)

	function removeProduct(id){
		setProdutos(produtos.filter((produto) => produto.id !== id ))
	}

	function addQuant(id){
		const novoProduto = produtos.find(produto => produto.id === id);
		const indiceProduto = produtos.findIndex(produto => produto.id === id);
		novoProduto.quantidade += 1;

		const novosProdutos = [...produtos];
		novosProdutos[indiceProduto] = novoProduto
		
		setProdutos(novosProdutos);
	}

	function removeQuant(id){
		const novoProduto = produtos.find(produto => produto.id === id);
		const indiceProduto = produtos.findIndex(produto => produto.id === id);

		novoProduto.quantidade >= 1 ? novoProduto.quantidade -= 1 : novoProduto.quantidade = 0;

		const novosProdutos = [...produtos];
		novosProdutos[indiceProduto] = novoProduto
		
		setProdutos(novosProdutos);
	}

	const subtotal = produtos.map((produto) => 
	produto.valor * produto.quantidade)
	.reduce((a, valor) => a + valor)

	return (
		<div className={styles.produtos}>
			<Titulo cor="#393939" texto="Shopping Cart"/>
			<ul className={styles.listaProdutos}>
				{
					produtos.map((produto) => 
					<Produto key={produto.nome} removeQuant={removeQuant} addQuant={addQuant} remove={removeProduct} {...produto} />  
					)
				}
			</ul>
			<div className={styles.produtosFooter}>
				<span><img src={arrow} alt="voltar" /> Continue Comprando</span>
				<p className={styles.subtotal}>
					<span>Subtotal:</span>
		
					<span className={styles.subtotalValor}>${subtotal.toFixed(2)}</span>
				</p>
			</div>
		</div>
	)
}

export default Produtos
