import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import CardActionArea from '@material-ui/core/CardActionArea';
import Slider from 'react-slick-beyli-fork'; //'react-slick';
//import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
//import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ImageZoom from 'react-medium-image-zoom';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const watherItsLive = '/static/images/water-glass-and-faucet.png';
const watherItsLiveWP = '/static/images/water-glass-and-faucet.webp';
const bvhVodozaborMashZal = '/static/images/vodozab1_mash.jpg';
const bvhVodozaborMashZalWP = '/static/images/vodozab1_mash.webp';
const bvhOchstnye1 = '/static/images/ochist1.jpg';
const bvhOchstnye1WP = '/static/images/ochist1.webp';
const bvhOchstnye2 = '/static/images/ochist2.jpg';
const bvhOchstnye2WP = '/static/images/ochist2.webp';
const bvhOchstnyeLaba = '/static/images/ochist_lab.jpg';
const bvhOchstnyeLabaWP = '/static/images/ochist_lab.webp';
const sberPayOnline = '/static/images/myTarget_600x600.jpg';
const avtoplatezh = '/static/images/avtoplatezh.gif';
const instruktsiyaAvtoplatezh = '/static/images/instruktsiya_avtoplatezh.jpg';
const instruktsiyaAvtoplatezhWP = '/static/images/instruktsiya_avtoplatezh.webp';

const splashSteps = [
    {
        label: 'Природа дарит воду – мы доставляем её Вам',
        webpPath: watherItsLiveWP,
        imgPath: watherItsLive,
    },
    {
        label: 'Водозабор - Насосный зал',
        webpPath: bvhVodozaborMashZalWP,
        imgPath: bvhVodozaborMashZal,
    },
    {
        label: 'Очистные - Аэротенк',
        webpPath: bvhOchstnye1WP,
        imgPath: bvhOchstnye1,
    },
    {
        label: 'Очистные - Отстойник ',
        webpPath: bvhOchstnye2WP,
        imgPath: bvhOchstnye2,
    },
    {
        label: 'Очистные - Лаборатория',
        webpPath: bvhOchstnyeLabaWP,
        imgPath: bvhOchstnyeLaba,
    },
    {
        label: 'Акция «Плати онлайн»',
        webpPath: sberPayOnline,
        imgPath: sberPayOnline,
    },
];

const styles = theme => ({
    imageZoom: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    },
    imageZoomed: {
      height: 350,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      objectFit: 'contain',
    },
    bannerSber: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        //width: '50%',
    },
});
  
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className = { className }
        style = {{ ...style, display: 'block', color: 'before:black'/*, background: "red"*/ }}
        onClick = { onClick }
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className = { className }
        style = {{ ...style, display: 'block'/*, background: "green"*/ }}
        onClick = { onClick }
      />
    );
  }
  
class HomeView extends Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    state = {
        activeStep: 0,
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

    /*handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };
    
    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };
    
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };*/
/*
<picture>
<source
    srcSet = { step.webpPath }
    media = '(min-width: 865px)'
    className = { classes.img }
/>
<img
    src = { step.webpPath }
    alt = { step.label }
    className = { classes.img }
/>
</picture>
*/

    render() {
        const { card } = this.props.theme.app;
        const { classes, theme } = this.props;
        const { subParagraf } = this.props.theme;
        const { activeStep } = this.state;
        const maxSteps = splashSteps.length;
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            //speed: 2000,
            autoplaySpeed: 3000,
            //className: 'center',
            centerMode: true,
            centerPadding: '60px',
            swipe: true,
            arrows: true,
            className: '',
            adaptiveHeight: true,
            beforeChange: (current, next) => this.setState({ activeStep: next }),
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Брюховецкий водоканал'
                    titleTypographyProps = { card.titleTypography }
                    style = { card.title }
                />
                <CardContent
                    style = { card.text }
                >
                    <Paper square elevation = { 0 } className = { classes.header }>
                        <Typography>{ splashSteps[activeStep].label }</Typography>
                    </Paper>
                    <Slider {...settings}>
                        { splashSteps.map((step, index) => (
                            <div
                                key = { step.label }
                            >
                                { Math.abs(activeStep - index) <= 2 ? (
                                    <img
                                        src = { step.webpPath }
                                        alt = { step.label }
                                        title = { step.label }
                                        className = { classes.imageZoom }
                                    />
                                ) : null }
                            </div>
                        ))}
                    </Slider>
                    <br />
                    <br />
                    <Button
                        focusRipple = { false }
                        aria-selected = { false }
                        centerRipple = { false }
                        disableRipple = { true }
                        disableTouchRipple = { true }
                        href = 'http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh#blok'
                        target = '_blank'
                    >
                        <img
                            src = { avtoplatezh }
                            alt = 'Автоплатеж Сбербанк'
                            title = 'Автоплатеж Сбербанк'
                            className = { classes.bannerSber }
                        />
                    </Button>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Для подключения услуги Автоплатеж перейдите по этой <a href = 'http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh' target = '_blank'>ссылке</a>.
                        <ImageZoom
                            image = {{
                                src: instruktsiyaAvtoplatezhWP,
                                alt: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                                title: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                                className: classes.imageZoom,
                            }}
                            zoomImage = {{
                                src: instruktsiyaAvtoplatezh,
                                alt: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                            }}
                            shouldRespectMaxDimension = { true }
                            defaultStyles = {{
                                zoomContainer: {
                                    zIndex: 10000,
                                },
                            }}
                        />
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

/*
                    <AutoPlaySwipeableViews
                        axis = { theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                        index = { activeStep }
                        onChangeIndex = { this.handleStepChange }
                        interval = { 10000 }
                        enableMouseEvents
                    >
                        {
                            splashSteps.map((step, index) => (
                            <div
                               key = { step.label }
                            >
                            {
                                Math.abs(activeStep - index) <= 2 ? (
                                    <ImageZoom
                                        image = {{
                                            src: step.webpPath,
                                            alt: step.label,
                                            title: step.label,
                                            className: classes.imageZoom,
                                        }}
                                        zoomImage = {{
                                            src: step.imgPath,
                                            alt: step.label,
                                        }}
                                        shouldRespectMaxDimension = { true }
                                        defaultStyles = {{
                                            zoomContainer: {
                                                zIndex: 10000,
                                            },
                                        }}
                                    />
                                ) : null 
                            }
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>

                <CardMedia
                    component = 'img'
                    image = { bvhLogo }
                    style= {{
                        width: '50%',
                        margin: '0 auto'
                    }}
                />
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

export default withStyles(styles, { name: 'muiHomeView', flip: false, withTheme: true })(connect(mapStateToProps)(HomeView));
//export { HomeView as HomeViewNotConnected };