import React from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      {/* <section class="login">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="loginArt">
                <img src="assets/img/loginArt.svg" alt="" />
              </div>
            </div>
            <div class="col-6">
              <div class="loginForm">
                <form>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-main">
                    Login
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary btn-main btn-right"
                  >
                    Signup
                  </button>
                </form>
                <div class="copyright">
                  <p>© Copyright 2023. All right reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Card className="p-4 m-">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
