import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class FizlicaPriboryUchetaView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Приборы учета'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <UnderConstruct />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiFizlicaPriboryUchetaView', flip: false, withTheme: true })(FizlicaPriboryUchetaView);
//export { FizlicaPriboryUchetaView as FizlicaPriboryUchetaViewNotConnected };
