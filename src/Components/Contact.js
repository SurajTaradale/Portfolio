import '../Style/Contact.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_h960tcn',
      'template_1vv8xfj',
      toSend,
      'user_oWuWhQxJa1qhe8U0by9yR'
    )
      .then((response) => {
        confirmAlert({
          title: 'Thank You.',
          message: '',
          buttons: [           
            {
              label: 'Close',
            }
          ]
        });
        console.log('SUCCESS!', response.status, response.text);
        setToSend({ from_name: ' ' });
        setToSend({ to_name: ' ' });
        setToSend({ message: ' ' });
        setToSend({ reply_to: ' ' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  return (
    <>
    <div className="Contact" id='Contact'>
      <div className="SkillsTitle"> <p>Contact Me</p></div>
      <div className="container123">
        <form onSubmit={onSubmit} id="contact" >
          <h3>Contact Form</h3>
          <fieldset>
            <input name='to_name'
              value={toSend.to_name}
              onChange={handleChange} placeholder="Your name" type="text" tabIndex="1" required />
          </fieldset>
          <fieldset>
            <input name='reply_to'
              value={toSend.reply_to}
              onChange={handleChange} placeholder="Your Email Address" type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <textarea name='message'
              value={toSend.message}
              onChange={handleChange} placeholder="Type your message here...." tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button className='submit' name="submit" type="submit" id="contact-submit" data-submit="...Sending"><i class="fa fa-paper-plane" aria-hidden="true" style={{marginRight:'3%'}}></i>Submit</button>
          </fieldset>

        </form>
      </div>
    </div>
    <div>
      <footer>
        <div className='footer'>
        <div>Copyright @ 2021</div>
        <div>
          Designed by Suraj Taradale
        </div>
        </div>
        
      </footer>
    </div>
    </>

  );
}

export default Contact;