import React, { useState } from 'react'
import Styles from "../styles.module.css"

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function submitHandler(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className={`container-md p-3 d-flex justify-content-center ${Styles.main}`} >
      <form className={`${Styles.form} m-4 p-3 rounded shadow`} onSubmit={submitHandler}>
        <h1 className='text-center fs-3 mt-3'>Contact me</h1>
        <div className='px-3 align-items-center'>
          <div className="mb-3 mt-5">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="form-control" id="message" required />
          </div>

          <button type="submit" className={`btn ${Styles.button} shadow`}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
