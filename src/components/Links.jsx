import Card from "./shared/Card";
import Slack from "../img/slack.png";
import Github from "../img/github.png";

function Links() {
  const texts = [
    { id: "my_twitter", text: "Twitter Link", href: "https://twitter.com/Maiq_el/" },
    { id: "btn_zuri", text: "Zuri Team", href: "https://training.zuri.team/" },
    {id: "books", text: "Zuri Books", href : "http://books.zuri.team" },
    {id: "book__python", text: "Python Books", href : "http://books.zuri.team" },
    {id: "pitch", text: "Background Check for Coders", href: "https://background.zuri.team" },
    {id: "book__design", text: "Design Books", href: "https://books.zuri.team/design-rules" }
  ];

  return (
    <div className="container">
      {texts.map((text) => {
        return (
          <Card key={text.id}>
            <a href={text.href} target="_blank" className="cardText">
              {text.text}
            </a>
          </Card>
        );
      })}
      <br />
      <div className="d-flex justify-content-center">
        <div className="me-5">
          <img src={Slack} alt="" />
        </div>
        <div>
          <img src={Github} alt="" />
        </div>
      </div>
      <div className="space2"></div>
    </div>
  );
}
export default Links;
