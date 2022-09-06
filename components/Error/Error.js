class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Что-то пошло нет так...</h3>
                    <p>Вернитесь позже</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();