import { useState } from "react";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate()

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
    navigate('/')
    toast.success('We have received your feedback')
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
        <form onSubmit={onSubmit}>
          <div className="form row">
            <section className="d-grid d-md-flex row col-md-6 ms-0">
              <label htmlFor="firstName" className="formLabel">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className={!first_name ? 'formInputError' : 'formInput'}
                id="first_name"
                onChange={onChange}
                value={first_name}
                required
              />
              {/* <p className="text-danger">
                {error}
              </p> */}
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
                required
              />
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
              required
            />
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
              required
            ></textarea>
          </section>
          <br></br>
          <section className="d-flex">
            <input
              type="checkbox"
              className={'checkInput'}
              required
            />
            <p className="checkText ms-1 ms-md-3">
              {`You agree to providing your data to ${name} who may contact you.`}
            </p>
          </section>

          <button
            type="submit"
            id="btn__submit"
            className="btn btn-lg btn-primary text-white col-12 d-flex justify-content-center "
            
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
