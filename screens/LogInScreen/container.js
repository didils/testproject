import React, { Component } from "react";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: "",
        isSubmitting: false
    };
    render() {
        return <LogInScreen
            {...this.state}
            changeUsername={this._changeUsername}
            changePassword={this._changePassword}
            submit={this._submit}
        />;
    }
    _changeUsername = (text) => {
        console.log(text);
        this.setState({username: text});
    };
    _changePassword = (text) => {
        this.setState({password: text});
    };
    _submit = () => {
        const { username, password, isSubmitting } = this.state;
        const { login } = this.props;
        
        if(!isSubmitting){
            if(username && password){
                this.setState({
                    isSubmitting: true
                });
                login(username, password);
            } else {
                Alert.alert("아이디와 패스워드를 모두 입력해 주세요");
            }
        }
    };
}

export default Container;