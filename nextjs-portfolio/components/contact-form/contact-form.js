import React from 'react'
import * as emailjs from 'emailjs-com'
import styles from './contact-form.module.css'

const toName = "Ross Ketron"
const toEmail = "rossketron@gmail.com"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message"
    }

    render() {
      return (
        <div className="container">
          <div class="row input-container">
               <div class="col-xs-12">
                 <div class="styled-input wide">
                   <input type="text" required />
                   <label>Name</label> 
                 </div>
               </div>
               <div class="col-md-6 col-sm-12">
                 <div class="styled-input">
                   <input type="text" required />
                   <label>Email</label> 
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="styled-input" style="float:right;">
                  <input type="text" required />
                  <label>Phone Number</label> 
                </div>
              </div>
              <div class="col-xs-12">
                <div class="styled-input wide">
                  <textarea required></textarea>
                  <label>Message</label>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="btn-lrg submit-btn">Send Message</div>
              </div>
          </div>
        </div>
      )
    }
  }
}