
 class order {
            constructor() {
                this.products = []
            }
            add(product) {
                return this.products.push(product)
            }
            show() {
                return this.products
            }
            remove() {
                return this.products.pop()
            }
        }
        let Orders = new order()
        let ordersShow = Orders.show()
        let addToCart = document.querySelector(".add-to-cart")
        let checkout = document.querySelector(".checkout")
        let input = document.querySelector(".input-box")
        let cartItems = document.querySelector(".cart-items")
        let finalList = document.querySelector(".final-list")

        addToCart.addEventListener('click', () => {
            let userInput = parseInt(input.value)

            if (userInput >= 1 && userInput <= 6) {
                switch (userInput) {
                    case 1:
                        Orders.add("Pen");
                        console.log(Orders.show())
                        break;
                    case 2:
                        Orders.add("Bag")
                        break;
                    case 3:
                        Orders.add("Stickers")
                        break;
                    case 4:
                        Orders.add("Book")
                        break;
                    case 5:
                        Orders.add("Chocolate")
                        break;
                    case 6:
                        Orders.add("Pencil")
                        break;


                }

                console.log(ordersShow)
                console.log(Orders)
                cartItems.innerText = `[${ordersShow}]`;
            } else { alert("not-valid") }

        })
        checkout.addEventListener('click', () => {
            for (let i = 0; i < ordersShow.length; i++) {
                let li = document.createElement("li");
                li.innerText = ordersShow[i];
                finalList.appendChild(li);
            }
            cartItems.remove();
            addToCart.disabled = true;
            input.disabled = true;
            checkout.disabled = true;
        })

   