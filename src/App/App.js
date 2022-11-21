import { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header/Header.js";
import { SectionProducts } from "../components/SectionProducts/SectionProducts.js";
import { Filters } from "../components/Filters/Filters.js";
import { useState } from "react";
import products from "../assets/products.json";
import { ContainerMain, SectionHome, ContainerProducts } from "./styled";
import { Footer } from "../components/Footer/Footer.js";
import Typewriter from "typewriter-effect";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: #2b2f77;
    background: -webkit-linear-gradient(
    0deg,
    #2b2f77 0%,
    #141852 50%,
    #070b34 100%,
  );
  background: linear-gradient(0deg, #2b2f77 0%, #141852 50%, #070b34 100%);
  overflow-y: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
  }
`;

function App(props) {
  const [searchProducts, setSearchProducts] = useState("");
  const [minimumPrice, setMinimumPrice] = useState(-Infinity);
  const [maximumPrice, setMaximumPrice] = useState(Infinity);
  const [sorting, setSorting] = useState("name");
  const [order, setOrder] = useState("asc"); //asc: abreviação para ordem crescente
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart];
    
    const productFound = newCart.find(
      (productInCart) => productInCart.id === product.id
    );
    
    if (!productFound) {
      const newProduct = { ...product, quantity: 1 };
      newCart.push(newProduct);
    } else {
      productFound.quantity++;
    }
    
    setCart(newCart);
  };

  return (
    <>
      <GlobalStyle />
      <Header
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
        cart={cart}
      />

      <SectionHome>
        <div className="typing">
          <Typewriter
            options={{
              strings: ["SPACEZONE"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </SectionHome>

      <ContainerMain>
        <h2>Produtos</h2>

        <Filters
          minimumPrice={minimumPrice}
          setMinimumPrice={setMinimumPrice}
          maximumPrice={maximumPrice}
          setMaximumPrice={setMaximumPrice}
          sorting={sorting}
          setSorting={setSorting}
          order={order}
          setOrder={setOrder}
          color={color}
          setColor={setColor}
          category={category}
          setCategory={setCategory}
        />

        <ContainerProducts>
          {products
            .filter((product) => {
              return (
                product.name
                  .toLowerCase()
                  .includes(searchProducts.toLowerCase()) ||
                product.description
                  .toLowerCase()
                  .includes(searchProducts.toLowerCase())
              );
            })
            .filter((product) => {
              return product.price >= minimumPrice || minimumPrice === "";
            })
            .filter((product) => {
              return product.price <= maximumPrice || maximumPrice === "";
            })
            .filter((product) => {
              return product.color.toLowerCase().includes(color.toLowerCase());
            })
            .filter((product) => {
              return product.category
                .toLowerCase()
                .includes(category.toLowerCase());
            })
            .sort((currentProduct, nextProduct) => {
              switch (sorting) {
                case "price":
                  return currentProduct.price - nextProduct.price;
                default:
                  return currentProduct.name.localeCompare(nextProduct.name);
              }
            })
            .sort(() => {
              if (order === "asc") {
                return 0;
              } else {
                return -1;
              }
            })
            .map((product) => {
              return <SectionProducts key={product.id} product={product} addToCart={addToCart}/>;
            })}
        </ContainerProducts>
      </ContainerMain>
      <Footer />
    </>
  );
}

export default App;
