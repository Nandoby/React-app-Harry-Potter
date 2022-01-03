const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a style={{fontFamily: 'magic', fontSize: '40px'}} className="navbar-brand" href="/">Harry Potter <img
              className="blason" src="/baguette.png" alt="blason"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Ecoles
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/serpentard">Serpentard</a></li>
                  <li><a className="dropdown-item" href="/gryffondor">Gryffondor</a></li>
                  <li><a className="dropdown-item" href="/poufsouffle">Poufsouffle</a></li>
                  <li><a className="dropdown-item" href="/serdaigle">Serdaigle</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header