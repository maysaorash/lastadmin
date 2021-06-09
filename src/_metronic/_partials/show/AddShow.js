import React from "react";
import { Col, Form, Button } from "react-bootstrap";
export function AddShow() {
  return (
    // <>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
  </Form.Row>
​
<Form.Group controlId="exampleForm.ControlTextarea1">
    {/* <Form.Label>Description</Form.Label> */}
    <Form.Control placeholder="Description" as="textarea" rows="3" />

  {/* <Form.Group controlId="formGridDescription">
    <Form.Control placeholder="Description" /> */}
  </Form.Group>

  
  <Form.Label>Status</Form.Label>
  <Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="radio" label="Enable" />
  </Form.Group>
  <br />
  <Form.Group id="formGridCheckbox">
    <Form.Check type="radio" label="Disable" />
  </Form.Group>
  </Form.Row>
  <Button variant="danger" type="submit">
    Submit
  </Button>
  <Button variant="secondary" type="cancel">
    Cancel
  </Button>
</Form>
    // </>
  );
}