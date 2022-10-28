import Logo from "../img/logo.png"
import I4G from "../img/I4G.png"

function Footer() {
  return (
    <footer className="container-fluid">
        {/* <div className="d-flex justify-content-between">
            <img className="img-fluid" src={Logo} alt="" />

            <p>Hng internship 9 Frontend task </p>

            <img className="img-fluid" src={I4G} alt="" />
        </div> */}

        <div className="row text-lg-center">
            <div className="col-md-4"><img className="img-fluid" src={Logo} alt="" /></div>
            <div className="col-md-4 mt-2 "><p>Hng internship 9 Frontend task </p></div>
            <div className="col-md-4"><img className="img-fluid" src={I4G} alt="" /></div>
        </div>
    </footer>
  )
}
export default Footer