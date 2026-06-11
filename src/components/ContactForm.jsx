import { useState } from 'react'; 
import '../styles/ContactForm.css'
import Button from './Button';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "10308168-7ce9-4646-aa43-fc6d5dd425c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit} className='contact-form'>
      <span className='label'>Full Name</span>
      <input className='input-field name-input' type="text" name="name" required/>
      <span className='label'>Email</span>
      <input className='input-field email-input' type="email" name="email" required/>
      <span className='label'>Message</span>
      <textarea className='input-field msg-input' name="message" required></textarea>
      <Button>Submit</Button>
      <p>{result}</p>
    </form>
  );
}