import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/xleqrkkr" method="POST">
            <label> Your Name </label>
            <input type="text"></input>
            <label> EMail </label>
            <input type="email"></input>
            <label> Subject </label>
            <input type="text"></input>
            <label> Message </label>
            <textarea rows="6" placeholder="Type Your Message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form