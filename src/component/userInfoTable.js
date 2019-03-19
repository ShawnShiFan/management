import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ImageAvatars from "./imageAvatars";
import Button from '@material-ui/core/Button';
import Birth from "./birth";
import SelectSex from "./selectSex";


class  UserInfoTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           age:"",
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
render(){
    return (
        <React.Fragment>
            <ImageAvatars />
            <Typography variant="h6" gutterBottom>
               用户信息编辑
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="userName"
                    name=""
                    label="请填写姓名"
                    fullWidth
                    autoComplete="fname"
                />
                </Grid>

                <Grid item xs={12} sm={3}>
                   <SelectSex/>

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
                        id="userBirthAddress"
                        name="userBirthAddress"
                        label="出生地"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Birth />
                </Grid>


 {/*               <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox  color="secondary" name="saveAddress" value="yes" />}
                        label="已仔细填写完"
                    />
                </Grid>*/}
            </Grid>
             <br/>
                <Button  variant="contained" color="primary" onClick={this.handleBtnClick.bind(this)} >
                    保存
                </Button>




        </React.Fragment>
    )
}

    handleBtnClick(){
        alert("保存成功")

    }

}

export default UserInfoTable;