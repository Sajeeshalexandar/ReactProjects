import styles from './Card.module.css'
import Button from '../button'

function Card({tittle,image,description}){
    return(
        <>
        <div className={styles.cardStyle}>
            <img src={image} alt={tittle}  className={styles.imageStyle}/>
            <h2 className={styles.headStyle}>{tittle}</h2>
            <p className={styles.para}>{description}</p>
            <Button/>
        </div>
        </>
    )
}
export default Card