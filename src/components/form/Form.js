import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <section class="contact" id="contact-form">
      <div class="container">
        <form action="" id="form">
          <h2>Contact Us</h2>
          <p>We are here to help you!</p>
          <div class="form-control">
            <label class="input-label" for="name">
              Name
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="form-control">
            <label class="input-label" for="email">
              Email Address
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="form-control">
            <label class="input-label" for="subject">
              Subject
            </label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div class="form-control">
            <label class="input-label" for="message">
              Message
            </label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div class="form-control">
            <input type="submit" value="Submit" id="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
