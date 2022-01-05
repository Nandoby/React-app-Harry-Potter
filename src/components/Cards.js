import {Link} from "react-router-dom"
const Cards = ({title,images,alt,describe,link,linkName,btnColor="warning"}) => {
    return (
<>
    <div className="card p-0 m-2 bg-dark shadow" style={{width:"18rem"}}>
    <img src={images} className="card-img-top" alt={alt} />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{describe}</p>
        { <Link to={link} className={`btn btn-${btnColor} d-block text-white`}>{linkName}</Link>}
    </div>
    </div>
</>
    )
}
export default Cards;