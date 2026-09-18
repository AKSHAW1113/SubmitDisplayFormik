import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'

const initialValues = {
  name: '',
  email: '',
}

function App() {
  const [data, setData] = useState([])

  const handleSubmit = (values, { resetForm }) => {
    setData([...data, values])
    resetForm()
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Name" />
          <Field name="email" placeholder="Email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table border="1">
        <tbody>
          <tr>
            <td>Name</td>
            {data.map((item, i) => (
              <td key={i}>{item.name}</td>
            ))}
          </tr>

          <tr>
            <td>Email</td>
            {data.map((item, i) => (
              <td key={i}>{item.email}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App