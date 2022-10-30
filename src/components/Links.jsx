import Card from "./shared/Card";
import Slack from "../img/slack.png";
import Github from "../img/github.png";

function Links() {
  const texts = [
    { id: "my_twitter", text: "Twitter Link", href: "https://twitter.com/Maiq_el/" },
    { id: "btn_zuri", text: "Zuri Team", href: "https://training.zuri.team/" },
    {id: "books", text: "Zuri Books", href : "http://books.zuri.team", title:"On this website you'll find all the materials you need to learn about design and coding" },
    {id: "book__python", text: "Python Books", href : "https://books.zuri.team/python-for-beginners?ref_id=maiqel", title:"For the very Affordable price of $4.99 get access to the fundamentals of coding" },
    {id: "pitch", text: "Background Check for Coders", href: "https://background.zuri.team",title: "You're hiring a coder and need to know detailed important information about his past and work history? Then you're in the right place " },
    {id: "book__design", text: "Design Books", href: "https://books.zuri.team/design-rules", title:"Start your design journey with this FREE guide!!" }
  ];

  return (
    <div className="container">
      {texts.map((text) => {
        return (
          <a href={text.href} target="_blank" rel="noreferrer" className="cardText" title={text.title}>
          <Card key={text.id}>
              {text.text}
          </Card>
          </a>
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
