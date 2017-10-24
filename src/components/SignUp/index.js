import React from 'react';

import Modal from 'react-modal';

import style from './index.css';

class SignUp extends React.Component {

    state = {
        formInputs: [
            {
                type: 'text',
                placeholder: 'FullName',
                value: ''
            },
            {
                type: 'text',
                placeholder: 'LastName',
                value: ''
            },
            {
                type: 'email',
                placeholder: 'example@exapmle.com',
                value: ''
            },
            {
                type: 'password',
                placeholder: 'Password',
                value: ''
            },
            {
                type: 'button',
                value: 'Submit'
            },
        ],
        isSignUpOpen: this.props.isOpen
    }

    handleRequestCloseModal = () => this.setState({isSignUpOpen: false});

    renderFormInputs = () => 
        this.state.formInputs.map( x => (
            <div>
                <input 
                    type={x.type} 
                    placeholder={x.placeholder} 
                    value={x.value}
                    onChange= {this.handleChange}
                />
            </div>
    ));

    render(){
        return (
            <Modal
                isOpen = {this.state.isSignUpOpen}
                onRequestClose={this.handleRequestCloseModal}
                className="signUpModal"
                overlayClassName="signUpOverlayModal"
            >
            <div className="registrationForm">
                <h2>Registration Form</h2>
                <form onClick={this.handleSubmit}>
                    {this.renderFormInputs()}
                </form>
            </div>
            </Modal>
        )
    }
}

export default SignUp;