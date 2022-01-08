import React, { useRef } from "react";
import { Connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import emailjs from "emailjs-com";

const Form = (props) => {
  const renderInput = ({ input, label, type, value, list, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          type={type}
          value={value}
          list={list}
          autoComplete="off"
        />
        {renderError(meta)}
        <datalist id="services">
          <option value="Front-end development" />
          <option value="React development" />
          <option value="basic static webpage (html, css, js)" />
        </datalist>
      </div>
    );
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const form = useRef();

  const onSubmit = (formValues) => {
    emailjs
      .sendForm(
        "gmail",
        "template_y21osy6",
        form.current,
        "user_y8wa7flBZkQ3uz34GFGl8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        className="ui form error"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <Field
          name="name"
          component={renderInput}
          label="Your Name"
          type="text"
        />
        <Field
          name="email"
          component={renderInput}
          label="Your E-mail ID"
          type="email"
        />
        <Field
          name="service"
          component={renderInput}
          label="Choose a Service"
          type="text"
          list="services"
        />
        <Field
          name="budget"
          component={renderInput}
          label="What is your Budget?"
          type="text"
        />
        <Field
          name="message"
          component={renderInput}
          label="Message me "
          type="text"
        />
        <Field name="sumbit" component={renderInput} type="submit" />
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter your name";
  }
  if (!formValues.email) {
    errors.email = "You must enter your email address";
  }
  if (!formValues.service) {
    errors.service = "You must choose your service";
  }
  if (!formValues.budget) {
    errors.budget = "You must enter your budget";
  }
  if (!formValues.message) {
    errors.message = "Please let me know what you think !";
  }
  return errors;
};

export default reduxForm({
  form: "portfolioContactForm",
  validate: validate,
})(Form);
