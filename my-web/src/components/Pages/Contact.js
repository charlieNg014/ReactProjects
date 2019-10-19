import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

//Re-usable items
import Footer from "../Pages/Footer";
import "../css/style.css";

const fields = {
  section: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name"
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "Your email"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "textarea",
        placeholder: "Type your message"
      }
    ]
  ]
};

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase"> Contact Us </h2>{" "}
                <h3 className="section-subheading text-muted">
                  {" "}
                  Get in touch with us.{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row">
              <div className="col-lg-12">
                <form
                  name="sentMessage"
                  novalidate="novalidate"
                  onSubmit={this.props.handleSubmit}
                >
                  <div className="row">
                    {" "}
                    {fields.section.map((section, sectionIndex) => {
                      // console.log("Rendering section", sectionIndex, "with", section);
                      return (
                        <div className="col-md-6" key={sectionIndex}>
                          {" "}
                          {section.map((field, i) => {
                            return (
                              <Field
                                {...field}
                                key={i}
                                value={this.props.values[field.name]}
                                name={field.name}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                                touched={this.props.touched[field.name]}
                                errors={this.props.errors[field.name]}
                              />
                            );
                          })}{" "}
                        </div>
                      );
                    })}{" "}
                    <div className="clearfix"> </div>{" "}
                    <div className="col-lg-12 text-center">
                      <div id="success"> </div>{" "}
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl submitbtn text-uppercase"
                        type="submit"
                      >
                        {" "}
                        Send Message{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {this.props.noFooter || <Footer />}{" "}
      </div>
    );
  }
}

export default withFormik({
  // Setup the values
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: ""
  }),

  //Yup for validation
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Your name must be at least 3 characters"),
    email: Yup.string().email("You need to give us a valid email"),
    phone: Yup.string().min(10, "Your phone number must be at least 10 digits"),
    message: Yup.string()
  }),

  // function to handle submit
  handleSubmit: (values, { setSubmitting }) => {
    alert("You've submitted the form");
  }
})(Contact);
