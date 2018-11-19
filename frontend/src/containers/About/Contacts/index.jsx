import React, { Component } from 'react';
//import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
//import ExpansionPanel from '@material-ui/core/ExpansionPanel';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Zoom from 'react-thumbnail-zoom';

import Loader from '../../../components/loaders';
//import { Maps } from '../../../components/Maps';
import PdfLink from '../../../components/PdfLink/PdfLink';

const MapsComponent = Loader(() =>
  import(/* webpackChunkName: "Maps" */ '../../../components/Maps/Maps.jsx')
);

const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

const styles = theme => ({
    media: {
        boxShadow: '',
        width: '40%',
        //height: 277,
        objectFit: 'contain',
        margin: '0 auto',
        backgroundSize: 'contain',
    },
    text: {
        margin: '0.25rem auto 0.25rem 2rem',
    },
    header: {
        paddingBottom: 0,
    },
    /*expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },*/
});
  
class ContactsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        main_office: {
            lat: 45.787037,
            lng: 38.990506,
        },
        abon_office: {
            lat: 45.806224,
            lng: 39.007790,
        },
        zoom: 16,
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            expandedMain: false,
            expandedAbon: false,
        };
    }

    handleExpandMainClick = () => {
        this.setState(state => ({ expandedMain: !state.expandedMain }));
    };

    handleExpandAbonClick = () => {
        this.setState(state => ({ expandedAbon: !state.expandedAbon }));
    };

    render() {
        const { classes } = this.props;
        const { сard } = this.props.theme.app;
        const { subParagraf } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Контакты'
                    titleTypographyProps = { сard.title }
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»'
                    subheaderTypographyProps = { сard.headline }
                    className = { classes.header }
                />
                <PdfLink
                    href = { rekvisity_ooo_bvh } 
                    label = 'Реквизиты ООО «Брюховецкое водопроводное хозяйство»'
                    style = {{ margin: 'auto auto auto 2rem', }}
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков», ООО «БООС»'
                    subheaderTypographyProps = { сard.headline }
                    className = { classes.header }
                />
                <PdfLink
                    href = { rekvisity_ooo_boos } 
                    label = 'Реквизиты ООО «Брюховецкое предприятие отвода и очистки стоков»'
                    style = {{ margin: 'auto auto auto 2rem', }}
                />
                <CardContent
                    style = { сard.text }
                >
                    <CardActionArea
                        onClick = { this.handleExpandMainClick }
                        style = {{ width: '100%' }}
                    >
                        <div
                            style = {{
                                boxSizing: 'border-box',
                                position: 'relative',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <CardHeader
                                title = 'Центральный офис'
                                titleTypographyProps = { сard.subtitle1 }
                                subheader = 'Карта'
                                subheaderTypographyProps = { сard.subtitle2 }
                                style = {{
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    whiteSpace: 'normal',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingRight: 90,
                                }}
                            />
                            <span
                                style = {{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: 4,
                                    height: '100%',
                                }}                            
                            >
                                { this.state.expandedMain ? <ExpandLess /> : <ExpandMore /> }
                            </span>
                        </div>
                    </CardActionArea>
                    <Collapse in = { this.state.expandedMain } timeout = 'auto' unmountOnExit>
                        <MapsComponent
                            lat = { this.props.main_office.lat}
                            lng = { this.props.main_office.lng}
                            zoom = { this.props.zoom }
                            balloonContent = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                            isMarkerShown
                        />
                    </Collapse>
                    <CardMedia
                        component = 'img'
                        src = { bvhMainOfficeBuild }
                        title = 'Центральный офис'
                        className = { classes.media }
                    />
                    <Zoom>
                        <img 
                            src = { bvhMainOfficeBuild }
                            style = {{
                                boxShadow: '',
                                width: '40%',
                                height: 'auto',
                                objectFit: 'contain',
                                margin: '0 auto',
                            }}
                        />
                    </Zoom>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Адрес:</strong><br />
                        <span style = { subParagraf }>
                            352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196
                        </span><br />
                        <span style = { subParagraf }>
                            адрес электронной почты: <a href="mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a>
                        </span>
                        <br />
                        <strong>График работы:</strong><br />
                        <span style = { subParagraf }>
                            Понедельник-пятница с 08-00 до 17-00, перерыв с 12-00 до 13-00
                        </span><br />
                        <span style = { subParagraf }>
                            Выходной: Суббота, Воскресенье
                        </span><br />
                        <strong>Диспетчерская служба</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 35-117
                        </span><br />
                        <span style = { subParagraf }>
                            Круглосуточно, без перерыва и выходных.
                        </span><br />
                        <strong>Приемная директора</strong>: <br />
                        <span style = { subParagraf }>
                            8(86156) 31-194
                        </span><br />
                        <strong>Главный инженер</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 31-194
                        </span><br />
                        <span style = { subParagraf }>
                            Прием населения: Понедельник, Пятница с 08-00 до 12-00.
                        </span><br />
                        <strong>Производственно-технический отдел</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 21-809
                        </span><br />
                        <span style = { subParagraf }>
                            Прием населения: Понедельник, Пятница с 08-00 до 16-00, перерыв с 12-00 до 13-00
                        </span><br />
                        <strong>Вывоз жидких коммунальных стоков</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 35-117
                        </span><br />
                        <strong>Лаборатория</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 31-010
                        </span><br />
                        <strong>Юридический отдел</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 21-809
                        </span><br />
                        <strong>Бухгалтерия</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 35-200
                        </span><br />
                        <strong>Отдел кадров</strong>:<br />
                        <span style = { subParagraf }>
                            8(86156) 31-194
                        </span><br />
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent
                    style = { сard.text }
                >
                    <CardActionArea
                        onClick = { this.handleExpandAbonClick }
                        style = {{ width: '100%' }}
                    >
                        <div
                            style = {{
                                boxSizing: 'border-box',
                                position: 'relative',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <CardHeader
                                title = 'Абонентский отдел'
                                titleTypographyProps = { сard.subtitle1 }
                                subheader = 'Карта'
                                subheaderTypographyProps = { сard.subtitle2 }
                                style = {{
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    whiteSpace: 'normal',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingRight: 90,
                                }}
                            />
                            <span
                                style = {{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: 4,
                                    height: '100%',
                                }}                            
                            >
                                { this.state.expandedAbon ? <ExpandLess /> : <ExpandMore /> }
                            </span>
                        </div>
                    </CardActionArea>
                    <Collapse in = { this.state.expandedAbon } timeout = 'auto' unmountOnExit>
                        <MapsComponent
                            lat = { this.props.abon_office.lat }
                            lng = { this.props.abon_office.lng }
                            zoom = { this.props.zoom }
                            balloonContent = '352750, Краснодарский край, ул. Советская, 56, здание БТИ'
                            isMarkerShown
                        />
                    </Collapse>
                    <CardMedia
                        component = 'img'
                        src = { bvhAbonentsOfficeBuild }
                        title = 'Абонентский отдел'
                        className = { classes.media }
                    />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Адрес:</strong><br />
                        <span style = { subParagraf }>
                            352750, Краснодарский край, ул. Советская, 56, здание БТИ
                        </span><br />
                        <strong>Телефон:</strong><br />
                        <span style = { subParagraf }>
                            <strong>8 (86156) 22-257</strong>
                        </span><br />
                        <strong>График работы:</strong><br />
                        <span style = { subParagraf }>
                            Понедельник-пятница с 08-00 до 16-00 перерыв с 11-00 до 12-00
                        </span><br />
                        <span style = { subParagraf }>
                            Выходной: Суббота и Воскресенье
                        </span><br />
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiContactsView', flip: false, withTheme: true })(ContactsView);
//export { ContactsView as ContactsViewNotConnected };

/*
                    <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon = { <ExpandMore /> }>
                                <CardHeader
                                    title = 'Центральный офис'
                                    titleTypographyProps = { сard.subtitle1 }
                                    subheader = 'Карта'
                                    subheaderTypographyProps = { сard.subtitle2 }
                                />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Maps 
                                    lat = { this.props.main_office.lat}
                                    lng = { this.props.main_office.lng}
                                    zoom = { this.props.zoom }
                                    isMarkerShown
                                />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>   
*/