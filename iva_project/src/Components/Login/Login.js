import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Button as Buttonever} from 'evergreen-ui'
import "./Login.css";


const login = (props) => {

    return (
        <div className="Login">
            <form onSubmit={props.handleSubmit}>
                <div className="Input">
                    <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={props.emailState}
                            onChange={props.changed}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                        autoFocus
                        value={props.pwdState}
                        onChange={props.changed}
                        type="password"
                        />
                    </FormGroup>
                </div>
                
                <div className="Button">
                    <Buttonever
                        onClick = {props.handleSubmit}
                        iconAfter="arrow-right"
                        appearance="primary"
                        disabled={!props.button_status}
                        type="submit">
                        Login
                    </Buttonever>
                </div>

                <div className='Social-signin'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <button className="fb" ><i className="fa fa-facebook" aria-hidden="false"></i></button>
                    <button className="tw" ><i className="fa fa-twitter" aria-hidden="true"></i></button> 
                </div>
                <div className='Lost-password'>
                    <a href='http://'>Lost your password ?</a>
                </div>
            </form>
      </div>
    );
}

export default login;