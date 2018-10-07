import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardMedia, CardContent } from '@material-ui/core';

const bvhLogo = '/static/images/water-glass-and-faucet.png';

class HomeView extends Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
    componentDidCatch(error, info) {
        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        console.log(info.componentStack);
    }

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        return (
            <Card
                style= {{
                    width: '100%',
                    margin: '0 auto'
                }}
            >
                <CardMedia
                    component = 'img'
                    image = { bvhLogo }
                    style= {{
                        width: '50%',
                        margin: '0 auto'
                    }}
                />
                <CardContent>
                </CardContent>
            </Card>
        );
    }
}

/*
                <CardTitle
                    title = 'ООО «Брюховецкое водопроводное хозяйство»'
                    subtitle = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                />
                <CardActions>
                    {
                    <FlatButton label = '' ><span>Доступ к <b>личной информации</b>.</span></FlatButton>
                    }
                </CardActions>
*/

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default withTheme()(connect(mapStateToProps)(HomeView));
export { HomeView as HomeViewNotConnected };
