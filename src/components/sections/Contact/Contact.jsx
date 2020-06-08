import React from "react";

import { Wrapper } from "../../../hoc";
import { Field } from "./";

import "./Contact.scss";

const NAME = /^[a-zA-Z ]{2,50}$/,
  EMAIL = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
  PHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  FIELDS = [
    {
      name: "name",
      label: "Name",
      required: true,
    },
    {
      name: "phone",
      label: "Phone number",
      required: true,
    },
    {
      name: "email",
      label: "Email address",
      required: true,
    },
    {
      name: "notes",
      label: "Notes (optional)",
      type: "textarea",
      required: false,
    },
  ];

class Contact extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    notes: "",
    errors: {
      name: "",
      phone: "",
      email: "",
    },
  };

  handleFormSubmit = (e) => {
    let nameError = "",
      phoneError = "",
      emailError = "";

    if (this.state.name === "") {
      nameError = "Name cannot be blank.";
    } else if (!NAME.test(this.state.name)) {
      nameError = "Name is invalid.";
    }

    if (this.state.phone === "") {
      phoneError = "Phone cannot be blank.";
    } else if (!PHONE.test(this.state.phone)) {
      phoneError = "Phone is invalid.";
    }

    if (this.state.email === "") {
      emailError = "Email cannot be blank.";
    } else if (!EMAIL.test(this.state.email)) {
      emailError = "Email is invalid.";
    }

    if (nameError || phoneError || emailError) {
      e.preventDefault();
      this.setState({
        errors: { name: nameError, phone: phoneError, email: emailError },
      });
    }
  };

  handleInputChange = (name, value) => {
    if (this.state.errors[name]) {
      this.setState({
        [name]: value,
        errors: { ...this.state.errors, [name]: "" },
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <section className="Contact" centered={String(!!this.props.centered)}>
        <Wrapper>
          <h2>Contact us</h2>
          <form className="Contact_form">
            {FIELDS.map((field) => (
              <Field
                key={field.name}
                error={this.state.errors[field.name]}
                {...field}
                input={this.state[field.name]}
                change={this.handleInputChange}
              />
            ))}
            <button
              className="Contact_button"
              onClick={this.handleFormSubmit}
              type="submit"
            >
              Submit
            </button>
          </form>
        </Wrapper>
      </section>
    );
  }
}

export default Contact;
