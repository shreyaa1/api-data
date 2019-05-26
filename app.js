function data() {
    const url = "https://flipkart-cart-mock.now.sh/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
