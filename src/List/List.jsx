

function List({ items, category }) {

    //inline css
    const styleli = {
        fontFamily: "arial", color: "blue", padding: ".5rem 2rem", backgroundColor: "azure"
    }
    const styleh3 = {
        fontFamily: "arial", color: "red", padding: ".5rem 2rem", textTransform: "uppercase", backgroundColor: "beige" 
    }

    //mapping  each items into new array and performin map function on each items

    const sortItems = items.sort((a,b)=> a.name.localeCompare(b.name));

    const listItems = sortItems.map(item =>(
        <li style={styleli}>
            {item.name} : &nbsp; <b>{item.calories}</b>
        </li>
    ));
  
    return (
        <>
            <h3 style={styleh3}>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}
export default List;