import Card from "./shared/Card"
import Slack from "../img/slack.png"
import Github from "../img/github.png"

function Links() {

    const texts = [
        {"text" : "Twitter Link"},
        {"text" : "Zuri Team"},
        {"text" : "Zuri Books"},
        {"text" : "Python Books"},
        {"text" : "Background Check for Coders"},
        {"text" : "Design Books"}
    ]



  return (
    <div className="container">
        {texts.map(text => {
            return (
                <Card>
                    <h5 className="cardText">{text.text}</h5>
                </Card>
            )
        })}
        <br />
        <div className="d-flex justify-content-center">
            <div className="me-5"><img src={Slack} alt="" /></div>
            <div><img src={Github} alt="" /></div>
        </div>
        <div className="space"></div>
    </div>
  )
}
export default Links