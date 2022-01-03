import {Link} from "react-router-dom"

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <Link to="/" style={{fontFamily: 'magic', fontSize: '40px'}} className="navbar-brand">Harry Potter <img
              className="blason"  src="images/vivedor.png" alt="blason"/></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                  Ecoles
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/serpentard" className="dropdown-item">Serpentard</Link></li>
                  <li><Link to="/gryffondor" className="dropdown-item">Gryffondor</Link></li>
                  <li><Link to="poufsouffle" className="dropdown-item">Poufsouffle</Link></li>
                  <li><Link to="serdaigle" className="dropdown-item">Serdaigle</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header