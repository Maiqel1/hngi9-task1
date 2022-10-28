import Image from "../img/profile__img.png"

function Header() {
  return (
    <div className="container">
        <header className="text-center">
            <img src={Image} alt="" />
            <p className="headerText">Annette Black</p>
        </header><div className="space"></div>
    </div>
  )
}
export default Header