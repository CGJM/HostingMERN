import {Component} from 'react'
import React from "react";
import axios from "axios";

class createFolder extends Component{
    constructor(props) {
        super(props);

        this.state = {
            folder: '',
            validación: undefined
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleValidation = async () => {
        let folder = this.state.folder;
        let formValid = true;
        if (folder === '') {
            formValid = false;
        }
        return this.setState({validacion: formValid});
    }
    submit = async (e) => {
        await this.handleValidation()
        if (this.state.validacion === true) {
            const response = window.confirm('¿Seguro de generar este folder?');
            if (response) {
                axios.post('project/project', {
                        project: this.state.folder,
                        usuario: this.props.path
                    },
                    window.confirm("Se ha creado el folder")
                );
            }
        }else {
            alert("Favor de llenar el campo folder.")
        }
    }

    render() {
        return (
            <div className="info">
                <div>
                    <div className="input-group mb-4">
                        <input disabled={this.props.disa} type="text" className="form-control"
                               onChange={e => this.onChange(e)} placeholder="Nombre del fodler"
                               value={this.state.folder} name="folder" aria-label="Recipient's username"
                               aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button onClick={e => this.submit(e)} disabled={this.props.disa} className="btn btn-success"
                                    type="button" id="button-addon2">Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFolder;