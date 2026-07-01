import './component.css'

function FeaturedPets({image,description,key}) {


    return(
        <>

            <div className="card" key={key}>
                <img src={image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
            </div>
        </>
    )
}
export default FeaturedPets