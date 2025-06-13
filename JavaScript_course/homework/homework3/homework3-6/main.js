// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
//
//
//
// ШАБЛОН
//
// <div class=”product-card”>
//
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
//
// <img src=”IMAGE” alt=”” class=”product-image”>
//
// </div>
//
// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту

let products = [
    {
        title: `milk`,
        price: 22,
        image: `https://images.arla.com/recordid/166B893F-1264-459C-A3B3EAFC404EBE64/picture.jpg?width=375&height=375&format=webp`
    },
    {
        title: `juice`,
        price: 27,
        image: `https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg`
    },
    {
        title: `tomato`,
        price: 47,
        image: `https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74`
    },
    {
        title: `tea`,
        price: 15,
        image: `https://coffeemart.com.ua/images/product_images/popup_images/7027_0.jpg`
    },
];
for (const product of products) {
    document.write (`<div class="product-card">
                    <h3>${product.title}. Price – ${product.price}</h3>
                    <img src="${product.image}" alt="product-image">
                    </div>`)
}



