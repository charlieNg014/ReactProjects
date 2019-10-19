import React, { Component } from "react";
//import images
import img1 from "./assets/img/01-thumbnail.jpg";
import img2 from "./assets/img/02-thumbnail.jpg";
import img3 from "./assets/img/03-thumbnail.jpg";
import img4 from "./assets/img/04-thumbnail.jpg";
import img5 from "./assets/img/05-thumbnail.jpg";
import img6 from "./assets/img/06-thumbnail.jpg";
const porfolio = [
  {
    id: 1,
    title: "Cheese Cake",
    subtitle: "A perfect cake for picnic or family",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img1, 
    inCart: 0,
    count: 0,
    total: 0
  },

  {
    id: 2,
    title: "Macarons",
    subtitle: "Tiny but beautiful",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img2,
    inCart: 0,
    count: 0,
    total: 0
  },

  {
    id: 3,
    title: "Red Velvet",
    subtitle: "Enjoy the velvet",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img3,
    inCart: 0,
    count: 0,
    total: 0
  },

  {
    id: 4,
    title: "Mousse Cake",
    subtitle: "Strawberry with mousse",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img4,
    inCart: 0,
    count: 0,
    total: 0
  },

  {
    id: 5,
    title: "Watermelon Cake",
    subtitle: "Perfect combination of watermelon and cake",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img5,
    inCart: 0,
    count: 0,
    total: 0
  },

  {
    id: 6,
    title: "Buscuit Cake",
    subtitle: "A bees-kwee",
    description:"asdfjaklsdjjjjjjjjjfjfkjadskfjkasjdkfjkasjfkljasdlkfjklasd",
    image: img6,
    inCart: 0,
    count: 0,
    total: 0
  }
];

const detailProduct = [
  {
    id: 1,
    title: "Test",
    subtitle: "test sub",
    image: ""
  }
]

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    modalOpen: false,
    detailProduct: detailProduct
  };
  

  setProduct = () => {
      let tempProducts = [];
      porfolio.forEach(item => {
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
      })

      this.setState(() => {
          return (
              {products: tempProducts}
          )
      })
  }

  getItem = (id) => {
      const product = this.state.products.find(item => item.id === id);
      return product;
  }

  componentDidMount() {
      this.setProduct();
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true, 
        detailProduct: product,
        cart: []
      }
    })
  };

  closeModal = (id) => {
    this.setState(() => {
      return {
        modalOpen: false
      }
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index  = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = 1;
    product.total = 10; 

    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart,product]
      }
    },() => {
      console.log(this.state);
    })
  };

  increament(id) {
    console.log("increament");
  }

  decreament(id) {
    console.log("decreament");
  }

  removeItem(id) {
    console.log("remove");
  }

  clearCart(id) {
    console.log("clear");
  }



  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          addToCart: this.addToCart,
          closeModal: this.closeModal,
          increament: this.increament,
          decreament: this.decreament,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {" "}
        {this.props.children}{" "}
        
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
