
let productList = [
    {
        id:"8a676b02-a647-11ed-afa1-0242ac120002",
        name:"Diamond Ring 2 carat Eternity Band",
    price:1200,    
    imageUrl:"https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/Ring-Luxury-Jewelry-Womens-Rich-Precious-Diamond-2405145.jpg",
    hasDiscount: true,
    discountAmount : 0.1
    },
    {id:"8a676dc8-a647-11ed-afa1-0242ac120002",
        name:"1/7 CT. Diamond Contour Band in 14K Gold",
    price:1750,    
    imageUrl:"https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/571612-pxhere.jpg",
    hasDiscount: true,
    discountAmount : 0.2
    },
    {
        id:"8a67711a-a647-11ed-afa1-0242ac120002",
        name:"1/8 ct. Diamond Band in 14K White Gold Handmade",
    price:900,    
    imageUrl:"https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663147-pxhere.jpg",
    hasDiscount: true,
    discountAmount : 0.3
    }

];

export function getProductList(){
    return productList;    
}