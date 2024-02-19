 import React from 'react';
 import {  Form, Button, Container } from 'react-bootstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
 import './login.css';

 function Login() {
   return (
     <div className="login-container">
       <Container className="login-card">
         <Container.Body>
           <Container.Title>Login</Container.Title>
           <Form>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
             </Form.Group>
             <Button variant="primary" type="submit">
               Submit
             </Button>
           </Form>
         </Container.Body>
       </Container>
     </div>
  );
 }

 export default Login;
