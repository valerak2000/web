import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

//import './style.scss';

class CommonInfoView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;
        const { li } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'О компании'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                    className = 'content'
                >
                    <p><strong>ООО «Брюховецкое водопроводное хозяйство»</strong> занимается водоснабжением
                    ст.Брюховецкой, ст.Переяславской, х.Сопова Балка, с.Свободное.<br/>
                    Предприятие было образовано 22 декабря 2005 года.<br/>
                    В настоящее время источником хозяйственно-питьевого и производственного
                    водоснабжения поселения являются подземные воды, население снабжается водой от 10 артскважин дебетом 3384 м3/ч.<br/>
                    Общая протяженность водопроводных сетей по всему сельскому поселению составляет 95.6 км.
                    </p>
                    2016 0.119 т.м.куб

                    <p>В силу геологического расположения Краснодара добыча воды ведется только из подземных источников артезианских скважин глубиной от 80 до 800 метров. Все они входят в состав 11 водозаборных сооружений ООО «Краснодар Водоканал».</p>
                    <p>В 2009-2010 году ООО «Краснодар Водоканал» получило Дипломы II и III степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2009 г. В 2011 г. – предприятие получило высшую оценку – Диплом I степени на Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2010 г.</p>
                    <p>В период с 2007 по 2013 г. краснодарское предприятие «РОСВОДОКАНАЛА» реализует инвестиционную программу объемом 3,16 млрд рублей. В рамках инвестпрограммы будет проведена реконструкция водопроводных сооружений, насосных и канализационных станций, очистных сооружений и хлораторных установок, будут реконструированы существующие и построены новые сети водоснабжения и водоотведения.</p>
                    <p><strong>Экономический эффект от выполненных с 2006 г. работ:</strong></p>
                    <li style = { li }>
                        Потребление электроэнергии снижено <strong>на 14%.</strong>
                    </li>
                    <li style = { li }>
                        Потери воды сокращены <strong>на 15%.</strong>
                    </li>
                    <li style = { li }>
                        Количество крупных аварий уменьшено <strong>в 2,3 раза.</strong>
                    </li>
                    <p><strong>Награды:</strong></p>
                    <li style = { li }>
                        По итогам 2008 года «Краснодар Водоканал» был признан лучшим предприятием сферы ЖКХ города.
                    </li>
                    <li style = { li }>
                        В 2009 году предприятие получило Диплом II степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2008 г.;
                    </li>
                    <li style = { li }>
                        Стало победителем конкурса среди предприятий муниципального образования город Краснодар на «Лучшее предприятие отрасли» по итогам I квартала; спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар.
                    </li>
                    <li style = { li }>
                        В 2010 году предприятие получило Диплом III степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2009 г., спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар;
                    </li>
                    <li style = { li }>
                        ООО «Краснодар Водоканал» получило свидетельство участника краевой целевой Программы «Качество» по виду деятельности: «Услуги по водоснабжению потребителей города», что является подтверждением высокого качества его услуг;
                    </li>
                    <li style = { li }>
                        Спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар.
                    </li>
                    <li style = { li }>
                        В 2011-2012 г.г. – предприятие получало высшую оценку – Диплом I степени на Всероссийском  конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2010 и 2011 г.г. Также в в 2011 г. «Краснодар Водоканал» вошел в число самых экономически успешных компаний по данным Всероссийского бизнес-рейтинга и получил статус «Лидер экономики России -2010».
                    </li>
                    <Divider />
                    <br/>
                    <p><strong>ООО «Брюховецкое предприятие отвода и очистки стоков»</strong> занимается водоотведением ст.Брюховецкой.<br/>
                    Предприятие было образовано 23 декабря 2005 года.<br/>
                    </p>
                </CardContent>
            </Card>
        );
    }
}

export default withTheme()(CommonInfoView);
export { CommonInfoView as CommonInfoViewNotConnected };
