import s from './MenuItems.module.css'

function MenuItems({name,image,price}){
    return(
        <>
        <div className={s.box}>
            <img src={image} alt={name}  className={s.image}/>
            <h3 className={s.tittle}>{name}</h3>
            <h4 className={s.price}>{price} Rs</h4>
        </div>
        </>
    )
}
export default MenuItems