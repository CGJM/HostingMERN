import React, {Component} from 'react';
import axios from 'axios';

class uploadF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            path: props.path,
            disabled: props.disa
        }
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }
    fileUploadHandler = () => {
        const response = window.confirm('Seguro de subir este archivo');
        const fd = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        if (response) {
            fd.append('noren', this.state.selectedFile)
            axios.post('uploadFile', fd, config)
                .then((response) => {
                    alert("El archivo se subio exitosamente");
                }).catch((error) => {
            });
        } else {
            this.setState({selectedFile: null})
        }
    }

    render() {
        return (
            <div>
                <div>
                        <div className="input-group">
                            <div className="custom-file">
                                <input disabled={this.props.disa} type="file" className="custom-file-input"
                                       onChange={this.fileSelectedHandler} id="inputGroupFile04"
                                       aria-describedby="inputGroupFileAddon04"/>
                                <label className="custom-file-label text-lg-left"
                                       htmlFor="inputGroupFile04">Archivo</label>
                            </div>
                            <button disabled={this.props.disa} className="btn btn-info "
                                    onClick={this.fileUploadHandler} type="button" id="inputGroupFileAddon04">Subir
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}

export default uploadF;
