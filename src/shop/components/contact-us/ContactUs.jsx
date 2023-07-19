function ContactUs() {
  return (
    <>
      {/*start page content*/}
      <section className="py-4">
        <div className="container">
          <h3 className="d-none">Google Map</h3>
          <div className="contact-map p-3 bg-light rounded-0 shadow-none">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2818.260654134954!2d97.34803563876724!3d16.942777010500542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1689775190708!5m2!1sen!2smm"
              className="w-100"
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="p-3 bg-light">
                <form>
                  <div className="form-body">
                    <h6 className="mb-0 text-uppercase">Drop us a line</h6>
                    <div className="my-3 border-bottom" />
                    <div className="mb-3">
                      <label className="form-label">Enter Your Name</label>
                      <input type="text" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Enter Email</label>
                      <input type="text" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="text" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control rounded-0"
                        rows={4}
                        cols={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-dark rounded-0 btn-ecomm">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-3 bg-light">
                <div className="address mb-3">
                  <h6 className="mb-0 text-uppercase">Address</h6>
                  <p className="mb-0 font-12">
                    123 Street Name, City, Australia
                  </p>
                </div>
                <div className="phone mb-3">
                  <h6 className="mb-0 text-uppercase">Phone</h6>
                  <p className="mb-0 font-13">Toll Free (123) 472-796</p>
                  <p className="mb-0 font-13">Mobile : +91-9910XXXX</p>
                </div>
                <div className="email mb-3">
                  <h6 className="mb-0 text-uppercase">Email</h6>
                  <p className="mb-0 font-13">mail@example.com</p>
                </div>
                <div className="working-days mb-3">
                  <h6 className="mb-0 text-uppercase">WORKING DAYS</h6>
                  <p className="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </section>
      {/*end start page content*/}
    </>
  );
}

export default ContactUs;
