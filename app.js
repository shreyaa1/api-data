function data() {
    const url = "https://flipkart-cart-mock.now.sh/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            apiData(data)
        });
}

function apiData(data) {
    data.map(product => {
        console.log("helloo", product)
        document.querySelector(".title1").innerHTML = product["product_meta"]["title"];
        document.querySelector(".image1").src = product["product_meta"]["img"];
    });

}


