class Products {
    constructor() {

    }

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, price, img}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}">
                    <span>${price}</span>
                    <button>Добавить в корзину</button>
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCT.innerHTML = html;
    }
}

const productsPage = new Products();

productsPage.render();