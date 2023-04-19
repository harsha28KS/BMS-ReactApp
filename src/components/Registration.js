import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Registration(){
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");
    const [username, setUsername] = useState("");
    // console.log(emailaddress, passwordd);

    function clearInput(){
        setUsername("");
        setEmailAddress("");
        setPasswordd("");
        // window.alert("User Added");
    }

    async function UserPost(){
        // console.log(username, emailaddress, passwordd);
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": passwordd
        }
        // console.log(userDetails);
        // const response = await axios.post('http://localhost:5000/user-register', userDetails);
        await axios
        // .post('http://localhost:5000/user-register', userDetails)
        .post('https://bms-backend-gs3k.onrender.com/user-register', userDetails)
        .then((data) => {Swal.fire({
            icon: 'success',
            // title: 'Submitted !!!!',
            title: `${data.data.message}`
            // showCloseButton: true,
            }); 
            clearInput()}
        )
        .catch((err) => Swal.fire({
            icon: 'error',
            title: `${err.message}`,
            // showCloseButton: true,
            })
        )  
    }

    return(
        <div>
            <Container style={{padding:"5%"}}>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Enter UserName" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
};

export default Registration;