import Image from "../img/profile__img.png";

function Header() {
  return (
    <div className="container">
      <header className="text-center">
        <img src={Image} id="profile__img" alt="" className="img-fluid" />
        <p className="headerText" id="twitter">
          Annette Black
        </p>

        {/* SLACK USERNAME: MAIQEL */}
        <div className="d-none" id="slack">SLACK USERNAME : MAIQEL</div>
      </header>

      <div className="space"></div>
    </div>
  );
}
export default Header;
