import { useState } from 'react'

function Login() {
  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setContact((prevalue) => {
      return { ...prevalue, [name]: value }
    })
  }
  return (
    <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name='fName'
          placeholder='first Name'
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name='lName'
          placeholder='last Name'
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name='email'
          placeholder='email'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
