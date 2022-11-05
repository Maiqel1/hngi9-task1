import { useState } from "react";
import {toast} from 'react-toastify'

function Contact() {

  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const { first_name, last_name, email, message } = formData;
  const name = "Maiqel";

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('We have received your feedback')
  };

  const formChange = () => {
    // if (!first_name / !last_name / !email / !message) {
    //   setDisabled(true);
    // } else if(checked === false){
    //   setDisabled(false)
    // } else{
    //   setDisabled(true)
    // }

    if (!first_name) {
      setDisabled(true)
    } else if (!last_name) {
      setDisabled(true)
    } else if (!email) {
      setDisabled(true)
    } else if (!message) {
      setDisabled(true)
    } else if (checked === true) {
      setDisabled(true)
    } else{
      setDisabled(false)

    }
  };

  const handleChecked = (e) => {
    
    setChecked((current) => !current);
  };

  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="contactHeader">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form onSubmit={onSubmit} onChange={formChange}>
          <div className="form row">
            <section className="d-grid d-md-flex row col-md-6 ms-0">
              <label htmlFor="firstName" className="formLabel">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className={!first_name ? "formInputError" : "formInput"}
                id="first_name"
                onChange={onChange}
                value={first_name}
              />
              <p className="text-danger">
                {!first_name ? "Please enter your first Name" : null}
              </p>
            </section>

            <section className="d-grid d-md-flex row col-md-6 ms-0 ms-md-2 mt-3 mt-md-0">
              <label htmlFor="LastName" className="formLabel">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your Last name"
                className={!last_name ? "formInputError" : "formInput"}
                id="last_name"
                onChange={onChange}
                value={last_name}
              />
              <p className="text-danger">
                {!last_name ? "Please enter your last Name" : null}
              </p>
            </section>
            <div className="space"></div>
          </div>
          <section className="ms-0 ms-md-1">
            <label htmlFor="Email" className="formLabel ms-3 ms-md-0">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@email.com"
              className={
                !email
                  ? "emailInputError col-12 col-md-12"
                  : "emailInput col-12 col-md-12"
              }
              onChange={onChange}
              value={email}
            />
            <p className="text-danger">
              {!email ? "Please enter your Email" : null}
            </p>
          </section>
          <br></br>
          <section className="ms-1 ms-md-0">
            <label htmlFor="message" className="formLabel ms-2">
              Message
            </label>
            <textarea
              id="message"
              className={
                !message
                  ? "textAreaInputError col-12 col-md-12"
                  : "textAreaInput col-12 col-md-12"
              }
              placeholder="Send me a message and I'll reply you as soon as possible"
              onChange={onChange}
              value={message}
            ></textarea>
            <p className="text-danger">
              {!message ? "Please enter a message" : null}
            </p>
          </section>
          <br></br>
          <section className="d-flex">
            <input
              type="checkbox"
              className={!checked ? 'checkInputError': 'checkInput'}
              checked={checked}
              onChange={handleChecked}
            />
            <p className="checkText ms-1 ms-md-3">
              {`You agree to providing your data to ${name} who may contact you.`}
            </p>
          </section>

          <button
            type="submit"
            id="btn__submit"
            className="btn btn-lg btn-primary text-white col-12 d-flex justify-content-center "
            disabled={disabled}
          >
            Send Message
          </button>
        </form>
        <br /> <br />
        <br />
      </div>
    </>
  );
}
export default Contact;
