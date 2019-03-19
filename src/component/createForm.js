import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ImageAvatars from "./imageAvatars";
import IconLabelButtons from "./button";


function CreateFrom() {
    return (
        <React.Fragment>
          <ImageAvatars />
            <Typography variant="h6" gutterBottom>
                用户信息创建
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="userName"
                        name="userName"
                        label="请填写姓名"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="userPhone"
                        name="userPhone"
                        label="联系方式"
                        fullWidth
                        autoComplete="billing phone-line1"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="userBirth"
                        name="userBirth"
                        label="出生日期"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="userBirthAddress"
                        name="userBirthAddress"
                        label="出生地"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>


                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="已仔细填写完"
                    />
                </Grid>
            </Grid>



        </React.Fragment>
    );
}

export default CreateFrom;