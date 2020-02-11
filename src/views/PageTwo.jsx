import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { ApiContext } from '../components/_context'
import ComicButtonView from '../components/ComicButtonView'

export default function PageTwo() {
  const { handleChange, handleSubmit } = useContext(ApiContext)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Comic ID"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      <ComicButtonView />
    </>
  )
}
