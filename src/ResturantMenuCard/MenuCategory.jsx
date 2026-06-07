import MenuItems from "./MenuItems"
import s from './MenuCategory.module.css'

function MenuCategory({ category, items }) {

    const headstyle = {
        fontFamily: "arial",
        color: "rgb(0, 98, 179)",
        textShadow :"2px 2px 1px rgba(144, 199, 251, 0.84)",
        textAlign: "center",
        padding : "2rem 1rem",
        textTransform : "uppercase"
    }

    return (
        <>
            <div >
                <h2 style={headstyle}>{category}</h2>
                <div className={s.card}>
                    {items.map(item => (

                        <MenuItems
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>



            </div>
        </>
    )
}
export default MenuCategory