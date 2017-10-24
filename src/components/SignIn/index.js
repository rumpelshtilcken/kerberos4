import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import style from './index.css';

class SignIn extends React.Component {
    state = {
        content: [
            {
                floatingLabelText: 'Enter your login or email to sign in'
            },
            {
                floatingLabelText: 'Enter you password to sign in'
            }
        ]
    }

    handleOpenSignUpModal = () => this.props.handleOpenSignUpModal();

    renderContent = () =>  this.state.content.map( x => 
        (
           <div className="textFieldClass">
             <TextField
                floatingLabelText={x.floatingLabelText}
            />
           </div>
        ));

    render(){
        return (
            <div className="signInContainer">
                {this.renderContent()}
                <div className="btns">
                    <a href="#" onClick={this.handleOpenSignUpModal}> or singup </a>
                    <RaisedButton
                        label="Sign In"
                    />
                </div>
            </div>
        )
    }
}

export default SignIn;