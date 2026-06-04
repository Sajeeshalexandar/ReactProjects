import List from "./List";

function ListApp(){

    const fruits = [
        {name : "Apple",calories : 95},
        {name : "orange",calories : 98},
        {name : "banana",calories : 45},
        {name : "grapes",calories : 78},
        {name : "mango",calories : 45},
        {name : "kiwi",calories : 90},
    ];
    const vegitables = [
        {name : "oinon",calories : 55},
        {name : "carrot",calories : 99},
        {name : "corn",calories : 80},
        {name : "rice",calories : 98},
        {name : "drumstick",calories : 66},
        {name : "tomato",calories : 89},
    ];

    return(
        <>
        <List items={fruits} category="fruits"/>
        <List items={vegitables} category="vegitables"/>
        </>
    )
}
export default ListApp