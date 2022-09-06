class Shopping {
    constructor() {

    }

    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
        document.documentElement.style.overflow = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) != -1) {
                htmlCatalog += `
                    <div class="cart__inner">
                        <div class="cart__name">⚡️${name}</div>
                        <div class="cart__price">${price.toLocaleString()} USD</div>
                    </div>
                `;

                sumCatalog += price;
            }
        });

        const html = `
            <div class="cart-container">
                <div class="cart__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <div class="cart__inner">
                        <div class="cart__name">💥Сумма: </div>
                        <div class="cart__price">${sumCatalog.toLocaleString()} USD</div>
                    </div>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();