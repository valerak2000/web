import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

class UnderConstruct extends Component {
    render() {
        return (
            <Typography
                variant = 'subtitle2'
            >
                Раздел находится в разработке
            </Typography>
        );
    }
}

UnderConstruct.muiName = 'UnderConstruct';

export default withStyles(null, { name: 'muiUnderConstruct', flip: false, withTheme: true })(UnderConstruct);
