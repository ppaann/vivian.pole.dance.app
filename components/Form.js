import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const defaultEnteredValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const defaultEdited = {
    name: false,
    email: false,
    phone: false,
    message: false,
  };
  const [enteredValue, setEnteredValue] = useState(defaultEnteredValue);
  const [didEdit, setEdited] = useState(defaultEdited);

  const handleInputChange = (identifier, value) => {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setEdited((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  };

  const phoneIsValid =
    didEdit.phone && enteredValue.phone.match(/\d/g).length === 10;
  const emailIsValid = didEdit.email && enteredValue.email.includes("@");
  const nameIsValid = didEdit.name && enteredValue.name.length > 1;
  const messageIsValid = didEdit.message && enteredValue.message.length > 1;

  const handleInputBlur = (identifier) => {
    setEdited((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setTimeout(() => {
      // show message, reset form
    }, 1000);
    setEnteredValue();
  };

  return (
    <form className="mt-12" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="basis-1/3 relative">
          <label htmlFor="name" className="text-lg">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onBlur={() => handleInputBlur("name")}
            onChange={(event) => handleInputChange("name", event.target.value)}
            value={enteredValue.name}
            required
            className="w-full p-3 border-2 rounded dark:bg-gray-800"
          />
          <span className={`formValidation error ${nameIsValid ? "show" : ""}`}>
            Enter at least one letter
          </span>
        </div>
        <div className="basis-1/3 relative">
          <label htmlFor="email" className="text-lg">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
            required
            className="w-full p-3 border-2 rounded dark:bg-gray-800"
          />
          <span
            className={`formValidation error ${emailIsValid ? "show" : ""}`}
          >
            Enter valid email address
          </span>
        </div>
        <div className="basis-1/3 relative">
          <label htmlFor="phone" className="text-lg">
            Mobile
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            onBlur={() => handleInputBlur("phone")}
            onChange={(event) => handleInputChange("phone", event.target.value)}
            value={enteredValue.phone}
            className="w-full p-3 border-2 rounded dark:bg-gray-800"
          />
          <span
            className={`formValidation error ${phoneIsValid ? "show" : ""}`}
          >
            Enter valid phone number
          </span>
        </div>
      </div>
      <div className="mt-8 relative">
        <label htmlFor="message" className="text-lg">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          placeholder="Type your message here..."
          required
          onChange={(event) => handleInputChange("message", event.target.value)}
          value={enteredValue.message}
          className="w-full p-3 border-2 rounded dark:bg-gray-800"
        ></textarea>
        <span className="formValidation error">Please enter your message</span>
      </div>
      <div className="mt-8 flex flex-row gap-8 justify-start">
        <button
          className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          SUBMIT
        </button>
        <p className="text-gray-500">* required field</p>
      </div>
    </form>
  );
};

export default Form;
