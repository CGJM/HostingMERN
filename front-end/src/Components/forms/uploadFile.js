import React, {Component} from 'react';
import axios from 'axios';

class uploadF extends Component{
  constructor(props){
  super(props);

  this.state={
    selectedFile: null
  }
}
  fileSelectedHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0]
    });
  }
  fileUploadHandler=()=>{
    const fd=new FormData();
    fd.append('noren',this.state.selectedFile,this.state.selectedFile.name)
    axios.post('uploadFile/',fd)
    .then(res=>{
      console.log(res);
    });
  }
  render(){
    return(
      <div>
        <input type="file" name="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Subir</button>
      </div>
    )
  }
}

export default uploadF;
