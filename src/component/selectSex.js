import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectSex extends React.Component {
    state = {
        sex: '',
        name: 'hai',
        labelWidth: 0,
    };



    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">







                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="sex-required">性别</InputLabel>
                    <Select
                        value={this.state.sex}
                        onChange={this.handleChange}
                        name="sex"
                        inputProps={{
                            id: 'sex-required',
                        }}
                        className={classes.selectEmpty}
                    >

                        <MenuItem value={0}>男</MenuItem>
                        <MenuItem value={1}>女</MenuItem>

                    </Select>

                </FormControl>


            </form>
        );
    }
}

SelectSex.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectSex);