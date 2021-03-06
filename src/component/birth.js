import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

function Birth(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="出生日期"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

Birth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Birth);