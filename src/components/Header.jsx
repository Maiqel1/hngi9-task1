import Icon from "../img/Icon.png"
import Icon2 from "../img/Icon2.png"

function Header() {
  return (
    <div className="container">
      <br/>
      <header className="">
          <div className="d-flex">
            <div className="text-center align-center mx-auto ps-5">
                <section className="">
                <div id="profile__img" className="profile"></div>
                <p className="headerText" id="twitter">
                  Maiqel
                </p>
                </section>
            </div>
            <div className="pe-5">
                <div className="share">
                    <img src={Icon} alt="" className="d-none d-md-block mx-auto mt-2"/>
                    <img src={Icon2} alt="" className="d-block d-md-none mx-auto mt-3" />
                </div>
            </div>
          </div>
        {/* SLACK USERNAME: MAIQEL */}
        <div className="d-none" id="slack">
          SLACK USERNAME : MAIQEL
        </div>
      </header>

      <div className="space"></div>
    </div>
  );
}
export default Header;
