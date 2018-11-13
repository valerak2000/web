import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    text: {
        margin: 'auto auto auto 2rem',
    },
});

Moment.globalMoment = moment;
// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'ru';
//const ruLocale = require('moment/locale/ru'); 
const dateVacancy = new Date();

const rows = [
    {
        id: 1,
        vacancy: 'экскаваторщик',
        requirements: 'знать мат часть',
    },
];

class VacanciesView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { сard } = this.props.theme.app;
        const formatedDateVacancy = dateVacancy.toLocaleDateString();

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Вакансии'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    {
                        rows.length > 0 ? (
                            <React.Fragment key = 'vacancy_table'>
                                <Typography
                                    variant = 'body1'
                                    color = 'textSecondary'
                                    className = { classes.text }
                                >
                                    Вакансии по состоянию на { formatedDateVacancy }.
                                </Typography>
                                <Table className = { classes.table }>
                                    <TableHead>
                                        <TableRow hover = { true } >
                                            <TableCell>Вакансия</TableCell>
                                            <TableCell>Требования</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        rows.map(r => (
                                            <TableRow key = { r.id }>
                                                <TableCell component = 'th' scope = 'row'>
                                                    { r.vacancy }
                                                </TableCell>
                                                <TableCell>{ r.requirements }</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    </TableBody>
                                </Table>
                            </React.Fragment>
                        ) : (
                                <Typography
                                    variant = 'body1'
                                    color = 'textSecondary'
                                    className = { classes.text }
                                >
                                    Вакансии отсутствуют.
                                </Typography>
                            )
                    }
                    <Moment>{ dateVacancy }</Moment>
                </CardContent>
            </Card>
        );
    }
}
/*
*/

export default withStyles(styles, { name: 'muiVacanciesView', flip: false, withTheme: true })(VacanciesView);
//export { VacanciesView as VacanciesViewNotConnected };
