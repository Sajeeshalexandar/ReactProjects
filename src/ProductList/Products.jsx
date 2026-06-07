

function Products({ productz, category }) {

    const newProducts = productz.map((product) => (
        <p>The {product.name} is {product.price} Rupees</p>
    ))
    return (
        <>
            <h1>{category}</h1>
            <div>
                {newProducts}
            </div>
        </>
    )
}
export default Products