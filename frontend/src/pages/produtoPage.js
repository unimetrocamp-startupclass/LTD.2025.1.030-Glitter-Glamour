import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './produtoPage.scss';

import Header from '../components/header';
import Footer from '../components/footer';

const ProdutoPage = () => {

  const [product, setProduct] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/list/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do produto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
      }
    };

    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products/list');
        if (!response.ok) {
          throw new Error('Erro ao buscar lista de produtos');
        }
        const data = await response.json();

        // Filtra produtos com is_topSelling true e pega só os primeiros 4
        const topSelling = data.filter(produto => produto.is_topSelling).slice(0, 4);
        setProdutos(topSelling);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProduct();
    fetchProdutos();
  }, [id]);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/carrinhoPage');
  };

  if (!product) {
    return <p>Carregando informações do produto...</p>;
  }

  return (
    <div>
      <Header />

      <main className="produtoPageContainer">
        <section>
          <div className="produtoDetalhes">
            <div className="produtoImages">
              <div className="thumbnails">
                <img src={product.first_image} alt="Thumbnail 1" />
                <img src={product.second_image} alt="Thumbnail 2" />
                <img src={product.third_image} alt="Thumbnail 3" />
              </div>
              <img src={product.cover_image} alt={product.productname} className="imagemPrincipal" />
            </div>

            <div className="produtoInformacoes">
              <h1>{product.productname}</h1>
              <span className="preco">R$ {product.price}</span>
              <p>{product.description}</p>

              <div className="produtoTamanho">
                <p>Tamanho</p>
                <div className="bttTamanho">
                  {['P', 'M', 'G', 'GG'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleClick(size)}
                      className={selectedSize === size ? 'selected' : ''}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="produtoInfoQuantidade">
                <div className="produtoQuantidade">
                  <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="adcCarrinho" onClick={handleAddToCart}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>

          <div className="productDescricao">
            <h2>Detalhes do Produto</h2>
            <p>{product.detail}</p>
          </div>
        </section>

        <div className="outrasOpcoesContainer">
          <h1>Outras Opções</h1>
          <div className="outrasOpcoes">
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <div className="outrasOpcoesProduto" key={produto.id}>
                  <Link to={`/produtoPage/${produto.id}`}>
                    <img src={produto.cover_image} alt={produto.productname} />
                  </Link>
                  <div className="outrasOpcoesDetalhes">
                    <p className="nomeOutrasOpcoes">{produto.productname}</p>
                    <p className="precoOutrasOpcoes">R$ {produto.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Carregando produtos...</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProdutoPage;
