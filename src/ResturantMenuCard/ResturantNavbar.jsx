import s from './ResturantNavbar.module.css'
function ResturantNavbar(){
    return(
    <>

    <nav className={s.nav}>
        <h1 className={s.h1}>Resturant Menu</h1>
        <ul className={s.ul}>
            <li className={s.li}><a href="" className={s.a}>Home</a></li>
            <li className={s.li}><a href="" className={s.a}>Offers</a></li>
            <li className={s.li}><a href="" className={s.a}>Services</a></li>
            <li className={s.li}><a href="" className={s.a}>Contact</a></li>
           
        </ul>
    </nav>
    </>
    )
}
export default ResturantNavbar