import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Button as Buttonever} from 'evergreen-ui'
import "./Cctv.css";


var Cctv = (props) => {
    console.log(props.photoURL)

        return (
            <div className="Cctv">
                <form >
                    <img src={props.photoURL} alt="" />
                    <div className="Input-Ip">
                        <FormGroup controlId="ipcam">
                            <ControlLabel>CCTV IP or video path </ControlLabel>
                            <FormControl autoFocus />
                        </FormGroup>
                        <FormGroup controlId="port">
                            <ControlLabel>Port</ControlLabel>
                            <FormControl autoFocus />
                        </FormGroup>
                        <div className="Button">
                            <Buttonever
                                iconAfter="arrow-right"
                                appearance="primary"
                                type="submit">
                                Connect
                            </Buttonever>
                        </div>
                    </div>
                </form> 
            </div>
        );
}

export default Cctv;

