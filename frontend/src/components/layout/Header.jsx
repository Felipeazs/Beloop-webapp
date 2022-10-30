import React, { useContext } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'

import AuthContext from '../../context/user-context'

const Header = () => {
    const navigate = useNavigate()
    const { isLoggedIn, userId, logout } = useContext(AuthContext)

    const logoutHandler = () => {
        logout()
        toast.info('Su sesión ha sido cerrada correctamente')
        navigate('/sesion')
    }

    return (
        <>
            <ToastContainer />
            <div className='h_line'></div>
            <nav className='flex flex-row justify-between items-center sm:p-header_sm md:p-header_md lg:p-header_lg bg-tertiary text-default font-metropolis font-black h-header'>
                <div className='sm:mx-auto md:mx-0'>
                    <Link to='/'>
                        <img
                            src='/logos/logo-2-md.svg'
                            alt='logo2smd'
                            width='190'
                        />
                    </Link>
                </div>
                <div className='flex flex-row sm:hidden md:flex md:gap-12 lg:gap-16 leading-18'>
                    <NavLink to='/inicio'>INICIO</NavLink>
                    <NavLink to='/ley-rep'>¿LEY REP?</NavLink>
                    {isLoggedIn &&
                        <>
                            <NavLink to={`/cuenta/${userId}`}>CUENTA</NavLink>
                            <button onClick={logoutHandler}>
                                <LogoutOutlined />
                            </button>
                        </>
                    }
                    {!isLoggedIn &&
                        <NavLink to='/sesion'>
                            <LoginOutlined />
                        </NavLink>
                    }
                </div>
                <div className='sm:hidden md:inline-block w-190'>
                    <img
                        src='/logos/logo-1-sm.svg'
                        alt='logo1sm'
                        width='41'
                    />
                </div>
            </nav>
            <div className='h_line'></div>
        </>
    );
};

export default Header;
