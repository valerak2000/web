import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import UnderConstruct from '../../../components/UnderConstruct';
//import bgHeader from '../../../images/bg-header.png';

class NewsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                style = { сard }
            >
                <CardHeader
                    title = 'Новости'
                    titleTypographyProps = { сard.title }
                />
                <CardContent>
                    <UnderConstruct />
                </CardContent>
            </Card>
        );
    }
}

export default withTheme()(NewsView);
export { NewsView as NewsViewNotConnected };
