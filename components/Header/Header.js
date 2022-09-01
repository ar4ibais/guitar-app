class Header {
    render(count) {
        const html = `
            <div class="header__container">
                <div class="header__counter"> 🔥 ${count - 1}</div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);