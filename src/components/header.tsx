import { FunctionComponent, MouseEventHandler } from 'react';
import { FaUserCircle } from 'react-icons/fa';
type headerProps = { userName: String };
export const Header: FunctionComponent<headerProps> = ({ userName }) => {
    const logout: MouseEventHandler<HTMLButtonElement> = () => {
        localStorage.removeItem('auth-token');
        window.location.reload();
    };

    return (
        <header>
            <nav className="container d-flex justify-content-between align-items-center">
                <h6>Dashboard</h6>
                <ul className="gap-5 d-flex ">
                    <li className="d-flex gap-2 justify-content-center align-items-center">
                        <FaUserCircle style={{ fontSize: '2rem', color: 'white' }} />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p style={{ fontSize: '.9rem' }}>{userName}</p>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: '#0a1551',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '.9rem'
                                }}
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
