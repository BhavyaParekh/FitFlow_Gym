 import React from 'react';
 import { Card, Form, Button } from 'react-bootstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
 import './login.css';

 function Login() {
   return (
     <div className="login-container">
       <Card className="login-card">
         <Card.Body>
           <Card.Title>Login</Card.Title>
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
         </Card.Body>
       </Card>
     </div>
  );
 }

 export default Login;
