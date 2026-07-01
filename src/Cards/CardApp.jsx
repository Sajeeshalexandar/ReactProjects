import Card from "./Card";

function CardApp() {
    const cardArray = [
        {
            tittle: "Burger",
            image: "https://static.vecteezy.com/system/resources/previews/019/023/604/non_2x/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg",
            description: "A hamburger, often known as a burger, consists of fillings—usually a patty of panfried or grilled ground meat, typically beef—placed inside a sliced bun, sesame seed bun, or bread roll. These patties are often served with lettuce, tomato, onion, pickles, bacon, or chilis, together in the bun or roll. "

        },
        {
            tittle: "Pizza",
            image: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg",
            description: "Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            tittle: "Sandwich",
            image: "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
            description: "A sandwich is a dish typically consisting variously of meat, cheese, sauces, and vegetables used as a filling between slices of bread, or placed atop a slice of bread; or, more generally, any dish in which bread serves as a container or wrapper for another food type."
        },

    ];
    return (

        <>
        {cardArray.map((item,index )=> (
            <Card tittle = { item.tittle } image = { item.image } description = { item.description }  key={index}/>
            ))}
        </>
       
        
    );
}
export default CardApp