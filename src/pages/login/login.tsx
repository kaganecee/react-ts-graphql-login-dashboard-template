import { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH_TOKEN } from '../../constants/constants';
import { LOGIN_MUTATION } from './mutation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { eventNames } from 'process';
type loginProps = {};
export const Login: FunctionComponent<loginProps> = () => {
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: ''
    });
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: (data) => {
            console.log(data.login);
            localStorage.setItem(AUTH_TOKEN, data.login);
            window.location.reload();
        }
    });
    return (
        <div className="container loginPage justify-content-center d-flex flex-column">
            <h4 className="mv3">Login</h4>
            <Form
                onSubmit={(event) => {
                    event.preventDefault();
                    login();
                }}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Your email address"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={formState.password}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                password: e.target.value
                            })
                        }
                        type="password"
                        placeholder="Choose a safe password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
