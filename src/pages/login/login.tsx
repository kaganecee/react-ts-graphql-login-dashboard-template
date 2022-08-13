import { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants/constants';
import { LOGIN_MUTATION } from './mutation';

type loginProps = {};

export const Login: FunctionComponent<loginProps> = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
            navigate('/');
        }
    });
    return (
        <div>
            <h4 className="mv3">{formState.login ? 'Login' : 'Sign Up'}</h4>
            <div className="flex flex-column">
                {!formState.login && (
                    <input
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                name: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Your name"
                    />
                )}
                <input
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
                <input
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
            </div>
            <div className="flex mt3">
                <button className="pointer mr2 button" onClick={() => login}>
                    {formState.login ? 'login' : 'create account'}
                </button>
                <button
                    className="pointer button"
                    onClick={(e) =>
                        setFormState({
                            ...formState,
                            login: !formState.login
                        })
                    }
                >
                    {formState.login ? 'need to create an account?' : 'already have an account?'}
                </button>
            </div>
        </div>
    );
};
