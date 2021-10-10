import { useState } from "react";
import "../css/comp-contact.css";


const ContactForm = () => {
  const [email, SetEmail] = useState("");
  const [nameUser, SetNameUser] = useState("");
  const [msgBody, SetMsgBody] = useState("");
  const [msgError, SetMsgError] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    SetMsgError([]);

    if (email.length < 6) {
      SetMsgError(prevState => ["Messing Email", ...prevState]);
    }

    if (nameUser.length < 3) {
      SetMsgError(prevState => ["Messing name", ...prevState]);
    }

    if (msgBody.length < 10) {
      SetMsgError(prevState => ["Message field Should Contain at least 10 Charecters", ...prevState]);
    }

    if(msgError.length === 0){
      //send The message to my gmail account using javaScript and parametre injaction.
      // if there is no error message to show then we are good to send the email

      window.open("mailto:abdenassaramimi99@gmail.com?subject=msessage from " + nameUser + ' throught portfolio &body='+msgBody);

      SetEmail("");
      SetNameUser("");
      SetMsgBody("");
      SetMsgError([]);
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
    <div className="form" method="post">
      <h2 className='email-me-text'>Email Me</h2>
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
            value={nameUser}
            onChange={handleNameChange}
          />
          <textarea
            name="msgBody"
            id=""
            cols="30"
            rows="7"
            value={msgBody}
            onChange={handleMsgChange}
            placeholder="Message Body?"
          ></textarea>
          <input type="submit" />
        </div>
      </form>
      <div className="errorMsg">
      <ul>
      {msgError.map(message => <li>{message}</li>)}
      </ul>
      </div>
    </div>
  );
};

export default ContactForm;
