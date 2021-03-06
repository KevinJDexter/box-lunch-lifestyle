import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import { CardMedia } from '@material-ui/core';

const styles = theme => ({
    root1: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        right: '15px',
        boxShadow: 'none',
    },
    image: {
        float: 'right',
        flex: 1,
    },
    title: {
        display: 'flex',
        fontSize: '18px',
    },
    date: {
        color: '#808080',
        textAlign: 'left',
        fontSize: '16px',
    },
    text: {
        margin: 0,
        flex: 4,
    },
    content: {
        display: 'flex',
    },
});

const mapStateToProps = reduxState => ({
    entries: reduxState.entries,
})

class VictorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImg: true,
        };
    }

    render() {
        const { classes } = this.props;

        let imgOutline = '/images/champion-belt.png'
        let imgColor = '/images/champion-belt-color.png'

        let displayImg;
        let displayDate;

        if (this.props.entries.allEntries.length >= 25) {
            displayImg = imgColor;
            let achievedDate = this.props.entries.allEntries[24].date_posted;
            displayDate = moment(achievedDate).format("MMM Do, YYYY");
        } else {
            displayImg = imgOutline;
        }

        return (
            <div>
                <Grid className={classes.root1} item xs={12}>
                    <Card >
                        <CardContent className={classes.content}>
                            <div className={classes.text}>
                                <Typography className={classes.date} color="textSecondary">
                                    {displayDate}
                                </Typography>
                                <Typography className={classes.title} variant="headline" component="h2">
                                    Victor (25 Days)
                        </Typography>
                            </div>
                            <CardMedia className={classes.image}>
                                <img src={displayImg} />
                            </CardMedia>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}

VictorItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(VictorItem));