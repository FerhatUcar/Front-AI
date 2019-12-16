import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = ({ title, title2 }) => {
    const [ anchorEl, setAnchorEl ] = useState(null);

    const handleClick = e => setAnchorEl(e.currentTarget);

    const handleClose = () => setAnchorEl(null);

    return (
        <div className="navbar">
            <h1>
                {title} <span>{title2}</span>
            </h1>
            <ul>
                <li>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <span className="navbar__name"> Menu
                    </span>
                        <i className="fas fa-chevron-down"/>
                    </Button>
                </li>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/" className="menu-link">
                            <i className="fas fa-home" /> Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/read" className="menu-link">
                            <i className="fas fa-info-circle" /> Read Front
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/classify" className="menu-link">
                            <i className="fas fa-info-circle" /> Classify Front
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/see" className="menu-link">
                            <i className="fas fa-info-circle" /> See Front
                        </Link>
                    </MenuItem>
                </Menu>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Front',
    title2: 'AI'
};

export default Navbar;

