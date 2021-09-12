import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Contactform() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone || !subject || !msg) {
      return toast.error("Did you fill all the field? 🤔");
    }
    //collectdata
    const formData = {
      name,
      phone,
      email,
      subject,
      msg,
    };

    //submitdata
    axios({
      method: "post",
      url: "http://localhost:8000/send-mail",
      data: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          //refreshdata
          setName("");
          setPhone("");
          setEmail("");
          setSubject("");
          setMsg("");

          toast.success("Mail Sent Successfully! 👍");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="full">
        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
      </div>
      <div className="full">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
