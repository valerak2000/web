import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

class OurHistoryView extends Component {
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
                    title = 'Наша история'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        «Дату 18 апреля 1954 года можно считать днем рождения брюховецкого водопровода. Именно в этот воскресный день 350 работников учреждений и организаций  района вышли на воскресник для прокладки трассы будущего водопровода. Накануне по будущей трассе прошел канавокопатель Брюховецкого МТС, который обозначил и углубил траншею на 40 сантиметров. Это значительно облегчило работу участникам воскресника.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Водопроводная сеть станицы каждый год увеличивалась. В 1956 году проложено 5000 погонных метров водопровода. Водопровод дошел до перекрестка улиц  Красная - Ковалева, Ленина-Кирова, Тимофеева – Кирова.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        В 1957 году проложено всего 840 метров водопроводных линий, а в 1958 -  5400 метров. На начало 1959 года в станице было уже 27 водозаборных колонок, и в том же году водопроводная сеть увеличилась еще на 8 000 метров.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        В 1960 году произведен ремонт имеющейся артскважины,  завершились работы по бурению и оборудованию двух дополнительных скважин, а также по строительству 25-ти метровой водонапорной башни.<br />
                        С этого года станица Брюховецкая стараниями многих  людей, работающих в водопроводном хозяйстве, перестала ощущать острый недостаток в воде.»
                    </Typography>
                    <a href = 'http://bru-museum.ru/stati/istoriya-2/317-istoriya-stanichnogo-vodoprovoda' target = '_blank'><cite>http://bru-museum.ru/stati/istoriya-2/317-istoriya-stanichnogo-vodoprovoda</cite></a>
                </CardContent>
            </Card>
        );
    }
}
/*
                    <Typography
                        variant = 'h4'
                        color = 'textSecondary'
                    >
                        <strong>История брюховецкого водопроводного хозяйства</strong>
                    </Typography>
*/

export default withStyles(styles, { name: 'muiOurHistoryView', flip: false, withTheme: true })(OurHistoryView);
//export { OurHistoryView as OurHistoryViewNotConnected };
