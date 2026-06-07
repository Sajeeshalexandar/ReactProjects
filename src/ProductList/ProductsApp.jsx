import Products from "./Products";

function ProductsApp(){
    const productList = [
        {name : "samsung TV",price : 25000},
        {name : "Realme C55",price : 12000},
        {name : "LED Light",price : 250},
        {name : "Washing machine",price : 50000}
    ];

    return(
        <>
            <Products productz={productList} category="Product List"  />
        </>
    )
}
export default ProductsApp