import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import bvhLogo from '../../images/logo_bvh.png';

class HomeView extends React.Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        return (
            <div className="container">
                <div className="margin-top-medium text-center">
                    <img className="page-logo margin-bottom-medium"
                        src={bvhLogo}
                        alt="ReactJs"
                    />
                </div>
                <div className="text-center">
                    <h1>ООО «Брюховецкое водопроводное хозяйство»</h1>
                    <h3>352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196</h3>
                    <h4>Привет, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="margin-top-medium text-center">
                    <p>Доступ к <a onClick={this.goToProtected}><i className="fa fa-lock" /> <b>Личной информации</b></a>.</p>
                </div>
                <div className="margin-top-medium">
                    {this.props.statusText ?
                        <div className="alert alert-info">
                            {this.props.statusText}
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
