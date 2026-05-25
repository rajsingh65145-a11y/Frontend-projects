const products = [

  {
    id: 1,
    name: "Running Shoes",
    price: 2500,
    image: "https://picsum.photos/300?random=1"
  },

  {
    id: 2,
    name: "Watch",
    price: 4000,
    image: "https://picsum.photos/300?random=2"
  },

  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://picsum.photos/300?random=3"
  },

  {
    id: 4,
    name: "Laptop Bag",
    price: 1800,
    image: "https://picsum.photos/300?random=4"
  }

]

const productContainer = document.getElementById("product-container")

const cartItems = document.getElementById("cart-items")

const totalElement = document.getElementById("total")

const cartCount = document.getElementById("cart-count")

const searchInput = document.getElementById("searchInput")

let cart = []

// DISPLAY PRODUCTS
function displayProducts(items){

  productContainer.innerHTML = ""

  items.forEach(product => {

    const productDiv = document.createElement("div")

    productDiv.classList.add("product")

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <h3>${product.name}</h3>

      <p>₹${product.price}</p>

      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `

    productContainer.appendChild(productDiv)

  })

}

// ADD TO CART
function addToCart(id){

  const selectedProduct = products.find(product => product.id === id)

  cart.push(selectedProduct)

  updateCart()

}

// UPDATE CART
function updateCart(){

  cartItems.innerHTML = ""

  let total = 0

  cart.forEach((item, index) => {

    total += item.price

    const cartDiv = document.createElement("div")

    cartDiv.classList.add("cart-item")

    cartDiv.innerHTML = `
      <span>
        ${item.name} - ₹${item.price}
      </span>

      <button onclick="removeItem(${index})">
        Remove
      </button>
    `

    cartItems.appendChild(cartDiv)

  })

  totalElement.innerText = total

  cartCount.innerText = cart.length

}

// REMOVE ITEM
function removeItem(index){

  cart.splice(index, 1)

  updateCart()

}

// SEARCH PRODUCTS
searchInput.addEventListener("input", () => {

  const searchValue = searchInput.value.toLowerCase()

  const filteredProducts = products.filter(product =>

    product.name.toLowerCase().includes(searchValue)

  )

  displayProducts(filteredProducts)

})

// INITIAL LOAD
displayProducts(products)