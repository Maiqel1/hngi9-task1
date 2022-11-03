function Contact() {
  return (
    <>
      <br /><br />
      <div className="container">
        <div className="contactHeader">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form>
          <div className="form row">
            <section className="d-grid d-md-flex row col-md-6 ms-0">
              <label htmlFor="FirstName" className="formLabel">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="formInput"
                id="first_name"
              />
            </section>

            <section className="d-grid d-md-flex row col-md-6 ms-0 ms-md-2 mt-3 mt-md-0">
              <label htmlFor="LastName" className="formLabel">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your Last name"
                className="formInput"
                id="last_name"
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
              type="text"
              placeholder="yourname@email.com"
              className="emailInput col-12 col-md-12 "
            />
          </section>
          <br></br>
          <section className="ms-1 ms-md-0">
            <label htmlFor="message" className="formLabel ms-2">
              Message
            </label>
            <textarea
              id="message"
              className="textAreaInput col-12 col-md-12"
              placeholder="Send me a message and I'll reply you as soon as possible"
            ></textarea>
          </section>
          <br></br>
          <section className="d-flex">
            <input type='checkbox' className="checkInput" />
            <p className="checkText ms-1 ms-md-3">
              You agree to providing your data to Maiqel who may contact you.
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
