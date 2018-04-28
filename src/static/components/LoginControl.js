import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import AppBar from 'material-ui/AppBar';
//import { getStyles } from 'material-ui/AppBar/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { authLogoutAndRedirect } from '../actions/auth';

export function Login(props) {
    return (
        <FlatButton
            label = 'Войти'
            labelPosition = 'before'
            labelStyle = { props.style.Button.Label }
            icon = {
                <FontIcon
                    className = 'fa fa-sign-in'
                />
            }
            onClick = { props.onClick }
            style = { props.style.Button }
        />
    );
}

export function Logged(props) {
    return (
        <IconMenu
            iconButtonElement = {
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin = {{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin = {{ horizontal: 'right', vertical: 'top' }}
        >
            <MenuItem
                primaryText = 'Личный кабинет'
                leftIcon = { <FontIcon className='fa fa-lock' /> }
                onClick = { props.onClickProtected }
            />
            <Divider />
            <MenuItem
                primaryText = { props.userName } /*'Выйти'*/
                rightIcon = { <FontIcon className='fa fa-sign-out' /> }
                onClick = { props.onClickLogout }
            />
        </IconMenu>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static propTypes = {
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        userName: '',
    };

    handleLoginClick = () => {
        this.props.dispatch(push('/login'));
    };

    handleLogoutClick = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    handleProtectedClick = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        const { isAuthenticated, userName } = this.props;
        const login = this.props.muiTheme.appBar.ElementRight.Login;

        return (
            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badgeStyle = {{
                    top: '0rem',
                    right: '3rem',
                    height: 'inherit',
                    width: '30rem',
                    backgroundColor: 'inherit',
                    fontFamily: 'PFBeauSansPro-Reg, sans-serif',
                    fontSize: 14,
                }}
            >
            {
                isAuthenticated ? (
                    <Logged
                        userName = { userName }
                        onClickLogout = { this.handleLogoutClick }
                        onClickProtected = { this.handleProtectedClick }
                        style = { login }
                    />
                ) : (
                    <Login
                        onClick = { this.handleLoginClick }
                        style = { login }
                    />
                )
            }
            </Badge>
        );
    }
}
/*
                <div style = {{ margin: '-1rem -1rem', height: '2rem', }}>
                    <span style = { this.props.muiTheme.appBar.titleStyle.phoneHeader }>
                        Телефон горячей линии:
                    </span>
                    <a href="tel:88615635117" style = { this.props.muiTheme.appBar.titleStyle.phone }>8 (86156) 35-117</a>
                </div>

*/

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

LoginControl.muiName = 'Login';

export default muiThemeable()(connect(mapStateToProps)(LoginControl));
