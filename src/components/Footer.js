const Footer = () => {
  return (
      <footer className="bg-dark">
        <div className="container p-3">
          <div className="row">
            <div className="col-6">
              <div className="text-white">Harry Potter</div>
            </div>
            <div className="col-6">
              <h4 className="text-warning">Liens utiles</h4>
              <div className="row">
                <div className="col-2">
                  <ul>
                    <li><a href="/" className="text-warning">Home</a></li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li><a href="/serpentard" className="text-warning">Serpentard</a></li>
                    <li><a href="/gryffondor" className="text-warning">Gryffondor</a></li>
                    <li><a href="/poufsouffle" className="text-warning">Poufsouffle</a></li>
                    <li><a href="/serdaigle" className="text-warning">Serdaigle</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="text-white text-center">Made with <span className="text-danger">&hearts;</span> by <b>Wetterene Rémy</b> and <b>Biaccalli Ferdinando</b>
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;