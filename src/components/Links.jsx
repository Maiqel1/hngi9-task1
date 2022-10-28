import Card from "./shared/Card"

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
   
    </div>
  )
}
export default Links