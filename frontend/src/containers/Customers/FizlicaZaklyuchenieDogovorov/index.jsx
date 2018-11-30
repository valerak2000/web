import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class FizlicaZaklyuchenieDogovorovView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Заключение договоров на холодное водоснабжение и водоотведение'
                    titleTypographyProps = { card.title }
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

export default withTheme()(FizlicaZaklyuchenieDogovorovView);
export { FizlicaZaklyuchenieDogovorovView as FizlicaZaklyuchenieDogovorovViewNotConnected };
