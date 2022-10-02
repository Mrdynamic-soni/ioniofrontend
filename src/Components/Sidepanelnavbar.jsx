import React from 'react'
import { MdHome } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

const Sidepanelnavbar = () => {
    const history = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        history("/")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light px-4 bg">
                <a className="navbar-brand " href="#"> <MdHome size='50px' /> Overview</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div style={{ marginLeft: "auto" }} className="nav-item" id="navbarSupportedContent">
                        <Dropdown >
                            <Dropdown.Toggle className='btn-light' id="dropdown-basic">
                                <img height={40} width={40} className='img mx-2 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTd88GDfAKM_m8rDIa2f_NlFGDvhsLVeArQ&usqp=CAU" alt="Deadpool" />
                                Deadpool
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => logout(e)} href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidepanelnavbar