import s from './ResturantFooter.module.css'

function ResturantFooter(){
    return(
        <>
        <footer className={s.footer}>
            <h2>Contact Us</h2>
            <div>
                <a href="">Gmail</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
                <a href="">Facebook</a>
            </div>
             <p className={s.location}> Tvm | Kochi | Banglore </p>
            <p className={s.rights}>Reserved all rights from Zatrix.org</p>
           
            <p className={s.copyright}>@copyright from foodAuthority</p>
        </footer>
        </>
    )
}
export default ResturantFooter