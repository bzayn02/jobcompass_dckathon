import React, { useState } from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';

const initialState = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};
const Register = () => {
  const [user, setUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // reset error message
    passwordError && name === 'confirmPassword' && setPasswordError('');

    console.log({ name, value });
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = user;
    password !== confirmPassword && setPasswordError('Password did not match!');
    console.log('from handle on submit', user);
  };

  console.log(user);
  return (
    <div>
      <Card className="p-4 m-5">
        <Form
          action="/"
          method="get"
          className="login"
          onSubmit={handleOnSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              name="fname"
              placeholder="First Name"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              name="lname"
              placeholder="Last Name"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              placeholder="Phone"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleOnChange}
            />
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
