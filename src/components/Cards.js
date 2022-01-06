import {Link} from "react-router-dom"
const Cards = ({title,images,alt,describe,link,linkName,btnColor="warning"}) => {
    return (
<>
    <div className="card p-0 m-2 bg-secondary shadow cards-trans" style={{width:"18rem"}}>
    <img src={images} className="card-img-top" alt={alt} />
    <div className="card-body">
        <h5 className={"card-title text-warning fs-1"} style={{ fontFamily : "magic" }}>{title}</h5>
        <p className="card-text  text-white">{describe}</p>
        { <Link to={link} className={`btn btn-${btnColor} d-flex justify-content-center align-items-center text-white shadow  `}>{linkName}</Link>}
    </div>²
    </div>
</>
    )
}
export default Cards;