import { useState } from "react";

const ContactForm = () => {
  const [email, SetEmail] = useState("");
  const [nameUser, SetNameUser] = useState("");
  const [msgBody, SetMsgBody] = useState("");
  const [msgError, SetMsgError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email.length < 6) {
      SetMsgError("Missing Email");
    }

    if (nameUser.length < 3) {
      SetMsgError("Missing Name");
    }

    if (msgBody.length < 10) {
      SetMsgError("Message Should Contain More than 10 Charecters");
    }
  };
  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    SetNameUser(e.target.value);
  };
  const handleMsgChange = (e) => {
    SetMsgBody(e.target.value);
  };

  return (
    <div className="form">
      <h2>Email Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-inputs">
          <input
            type="email"
            name="email"
            placeholder="Email?"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="text"
            name="name"
            placeholder="FullName?"
            required
            value={nameUser}
            onChange={handleNameChange}
          />
          <textarea
            name="msgBody"
            id=""
            cols="30"
            rows="10"
            value={msgBody}
            onChange={handleMsgChange}
            placeholder="Message Body?"
          ></textarea>
          <input type="submit" className="submit-btn" />
        </div>
      </form>
      <div className="errorMsg">{msgError}</div>
    </div>
  );
};

export default ContactForm;
