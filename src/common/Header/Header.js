import React, { Component } from 'react';
import './Header.css';
import { Button, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import PropTypes from 'prop-types';



const customModalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 }, { textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


export class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            contactnumber: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            firstnameRequired : "dispNone",
            lastnameRequired : "dispNone",
            emailRequired : "dispNone",            
            contactnumberRequired : "dispNone",
        };
    }
    openModalHandler = () => {
        this.setState({ 
            modalIsOpen: true , value: 0, 
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            contactnumber: "",
            usernameRequired: "dispNone", 
            passwordRequired: "dispNone", 
            firstnameRequired: "dispNone", 
            lastnameRequired: "dispNone", 
            emailRequired: "dispNone", 
            contactnumberRequired: "dispNone"
        });
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })

    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }
    loginClickedHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({passwordRequired: "dispNone"});
    }
    registerClickedHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({lastnameRequired: "dispNone"});
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({emailRequired: "dispNone"});
        this.state.contactnumber === "" ? this.setState({ contactnumberRequired: "dispBlock" }) : this.setState({contactnumberRequired: "dispNone"});
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }
    inputfirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value })
    }
    inputlastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value })
    }
    inputemailChangeHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    inputcontactnumberChangeHandler = (e) => {
        this.setState({ contactnumber: e.target.value })
    }
    render() {
        return (
            <div className="header">
                <img src={logo} className="app-logo" alt="Logo" />
                <Button className="login-btn" variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler} contentLabel="Login" style={customModalStyle}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" ></Tab>
                        <Tab label="Register" ></Tab>
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="userName" >Username</InputLabel>
                                <Input id="userName" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickedHandler}>Login</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstName" >FirstName</InputLabel>
                                <Input id="firstName" type="text" firstname={this.state.firstName} onChange={this.inputfirstnameChangeHandler}/>
                                <FormHelperText className={this.state.firstnameRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastName">LastName</InputLabel>
                                <Input id="lastName" type="text" lastname={this.state.lastName} onChange={this.inputlastnameChangeHandler}/>
                                <FormHelperText className={this.state.lastnameRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" email={this.state.email} onChange={this.inputemailChangeHandler}/>
                                <FormHelperText className={this.state.emailRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contactNumber">ContactNo</InputLabel>
                                <Input id="contactNumber" type="text" contactnumber={this.state.contactnumber} onChange={this.inputcontactnumberChangeHandler}/>
                                <FormHelperText className={this.state.contactnumberRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickedHandler}>Register</Button>
                        </TabContainer>
                    }

                </Modal>
            </div>
        )
    }
}

export default Header;
