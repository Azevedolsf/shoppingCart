(this.webpackJsonpcarrinho=this.webpackJsonpcarrinho||[]).push([[0],[,,function(a,t,e){a.exports={produto:"Produto_produto__T54Sp",produtoContainer:"Produto_produtoContainer__3TXAa",nome:"Produto_nome__ICabu",produtoImg:"Produto_produtoImg__3RyVM",imgClose:"Produto_imgClose__32Hxk",produtoSeparador:"Produto_produtoSeparador__2FMKJ"}},function(a,t,e){a.exports={addProduto:"AddProduto_addProduto__-A8c1",btnProduto:"AddProduto_btnProduto__1-YyC",quantidade:"AddProduto_quantidade__3I6Ic",valorProduto:"AddProduto_valorProduto__3GEav"}},function(a,t,e){a.exports={produtos:"Produtos_produtos__9Bm7P",produtosFooter:"Produtos_produtosFooter__169gz",subtotal:"Produtos_subtotal__2uhIL",subtotalValor:"Produtos_subtotalValor__1yW02"}},function(a,t,e){a.exports={card:"CardSection_card__1rJ0E",cardHeader:"CardSection_cardHeader__3NA5C",sectionImgs:"CardSection_sectionImgs__1zqJo",cardType:"CardSection_cardType__11czg",cardBanner:"CardSection_cardBanner__KIE8L"}},,,,function(a,t,e){a.exports={cardForm:"CardForm_cardForm__rveQD",cardBtn:"CardForm_cardBtn__13K-j"}},,,function(a,t,e){a.exports={titulo:"Titulo_titulo__Cpp8e"}},,,,,,,,,function(a,t,e){},function(a,t,e){"use strict";e.r(t);var o=e(1),r=e.n(o),d=e(11),n=e.n(d),c=e(14),s=e(10),i=e(13),A=e(2),u=e.n(A),l=e(3),j=e.n(l),m=e(0),b=function(a){var t=a.id,e=a.valor,o=a.addQuant,r=a.removeQuant,d=a.quantidade;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:j.a.addProduto,children:[Object(m.jsx)("span",{className:j.a.btnProduto,onClick:function(){return r(t)},children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAJUlEQVRIiWNgGAWjYBSMAoKAEY3/n9rmMlHJwFEwCkbBKKAEAAD0EQEED0po+gAAAABJRU5ErkJggg==",alt:"remover"})}),Object(m.jsx)("span",{className:j.a.quantidade,children:d}),Object(m.jsx)("span",{className:j.a.btnProduto,onClick:function(){return o(t)},children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAATklEQVRIiWNgGAVUBkcZGBgO09KC/1BMNGCikUNGLRjJFhxlQCRFbBgG8KlBySfoFvyjgqNJyifYNI9mtFEL6GwBC4nqjzBQmM5HAQYAAEhLGN/HFZxZAAAAAElFTkSuQmCC",alt:"adicionar"})})]}),Object(m.jsxs)("span",{className:j.a.valorProduto,children:[Object(m.jsx)("sup",{children:"$"}),(e*d).toFixed(2)]})]})},p=function(a){var t=a.imagem,e=a.nome,o=a.codigo,r=a.valor,d=a.remove,n=a.id,c=a.addQuant,s=a.quantidade,i=a.removeQuant;return Object(m.jsxs)("li",{className:u.a.produto,children:[Object(m.jsxs)("div",{className:u.a.produtoContainer,children:[Object(m.jsx)("img",{className:u.a.produtoImg,src:t,alt:"comida"}),Object(m.jsxs)("div",{className:u.a.nome,children:[Object(m.jsx)("p",{className:u.a.produtoNome,children:e}),Object(m.jsx)("span",{className:u.a.produtoCod,children:o})]})]}),Object(m.jsxs)("div",{className:u.a.produtoSeparador,children:[Object(m.jsx)(b,{id:n,quantidade:s,removeQuant:i,addQuant:c,valor:r}),Object(m.jsx)("img",{onClick:function(){return d(n)},className:u.a.imgClose,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAnwAAAJ8B8Iwk5wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABpSURBVDiNrZPRDQAhCENfbgfHcP8vF3KJ3g9fxqMkHIkJEQq0CsAAFjAlUTnADMwgHAG7UiTAOzDrvEiL3HI/AxWwJGyCjdkRzXQVnjm1glipuA9d+5VCS8TWM7ou6UeqgA3F/jK11vkFgNWbDDdGpOAAAAAASUVORK5CYII=",alt:"fechar"})]})]})},g=e(4),x=e.n(g),h=e.p+"static/media/chicken.b707b37a.png",_=e.p+"static/media/potatoes.0b5f7e48.png",O=e.p+"static/media/breakfast.7046e940.png",f=e(12),C=e.n(f),N=function(a){var t=a.texto,e=a.cor,o=a.font;return Object(m.jsx)("h4",{className:C.a.titulo,style:{color:e,fontSize:o},children:t})},v=function(){var a=r.a.useState([{imagem:h,nome:"Chicken momo",id:1,codigo:"#4231648",quantidade:1,valor:10.5},{imagem:_,nome:"Spicy Mexican Potatoes",id:2,codigo:"#4231648",quantidade:1,valor:8.5},{imagem:O,nome:"Breakfast",id:3,codigo:"#4231648",quantidade:1,valor:5.9}]),t=Object(i.a)(a,2),e=t[0],o=t[1];function d(a){o(e.filter((function(t){return t.id!==a})))}function n(a){var t=e.find((function(t){return t.id===a})),r=e.findIndex((function(t){return t.id===a}));t.quantidade+=1;var d=Object(s.a)(e);d[r]=t,o(d)}function A(a){var t=e.find((function(t){return t.id===a})),r=e.findIndex((function(t){return t.id===a}));t.quantidade>=1?t.quantidade-=1:t.quantidade=0;var d=Object(s.a)(e);d[r]=t,o(d)}var u=e.map((function(a){return a.valor*a.quantidade})).reduce((function(a,t){return a+t}));return Object(m.jsxs)("div",{className:x.a.produtos,children:[Object(m.jsx)(N,{cor:"#393939",texto:"Shopping Cart"}),Object(m.jsx)("ul",{className:x.a.listaProdutos,children:e.map((function(a){return Object(m.jsx)(p,Object(c.a)({removeQuant:A,addQuant:n,remove:d},a),a.nome)}))}),Object(m.jsxs)("div",{className:x.a.produtosFooter,children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABjSURBVDiN7c89DoJAEEDhz4ilJhyFRAzFJvwcmhYKDwMJh7Bgbeh2KfV1U7w3M/y5HuYaD2w5sRYrnjlywII+VbzEjTMmvBP9scAthu4oUy/4Euz/D7kB6GLkdSbSoDoT+EU+9U4KeYn25hgAAAAASUVORK5CYII=",alt:"voltar"})," Continue Comprando"]}),Object(m.jsxs)("p",{className:x.a.subtotal,children:[Object(m.jsx)("span",{children:"Subtotal:"}),Object(m.jsxs)("span",{className:x.a.subtotalValor,children:["$",u.toFixed(2)]})]})]})]})},B=e.p+"static/media/cartao.bc9af569.png",P=e.p+"static/media/master.345ac0a2.png",S=e(9),I=e.n(S),E=function(){return Object(m.jsxs)("form",{className:I.a.cardForm,children:[Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("label",{htmlFor:"",children:"Name on card"}),Object(m.jsx)("input",{type:"text",placeholder:"Giga Tamarashvili"})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("label",{htmlFor:"",children:"Card Number"}),Object(m.jsx)("input",{type:"password",placeholder:"****   ****   ****   ****"})]}),Object(m.jsx)("button",{className:I.a.cardBtn,children:"Check Out"})]})},F=e(5),U=e.n(F),k=function(){return Object(m.jsxs)("div",{className:U.a.card,children:[Object(m.jsx)(N,{texto:"Card Type"}),Object(m.jsx)("header",{className:U.a.cardHeader,children:Object(m.jsx)(N,{font:"12px",cor:"#76777E",texto:"Card Type"})}),Object(m.jsxs)("section",{className:U.a.sectionImgs,children:[Object(m.jsx)("img",{alt:"cart\xe3o",className:U.a.cardType,src:B}),Object(m.jsx)("img",{alt:"bandeira cart\xe3o",className:U.a.cardBanner,style:{maxWidth:"150px",margin:"0 auto 0 0"},src:P})]}),Object(m.jsx)(E,{})]})},Q=(e(20),e(21),function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(v,{}),Object(m.jsx)(k,{})]})});n.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0c863305.chunk.js.map