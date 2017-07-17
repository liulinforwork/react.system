var React = require('react');
var Qiniu = require('react-qiniu');
// import {upload,message,Button,Icon} from 'antd';
import { Upload, message, Button, Icon } from 'antd';


console.log('audio模块')
// const audioProps = {
//   name: 'file',
//   action: '//jsonplaceholder.typicode.com/posts/',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info){
//     console.log(info);
//
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} 上传成功`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} 上传失败`);
//     }
//   }
// } ;
// <Upload {...audioProps}>
//   <Button>
//     <Icon type="upload" /> 上传
//   </Button>
// </Upload>
const ReactQiniuDemo = React.createClass({
  getInitialState: function () {
    return {
      files: [],
      // token: 'YOUR_UPLOAD_TOKEN',
      token: '6qF2ejYiRzXlPoPO3eKwaWE3juLDyX5QgE1PEMJ-:rmK8666mCDYhJuGiBXqmUttPhmw=:eyJzY29wZSI6ImxlbmFnZS1jZXNoaSIsImRlYWRsaW5lIjoxNzU3MzkxNjY1fQ==',
      // uploadKey: 'YOUR_CUSTOM_UPLOAD_KEY', // Optional
      // prefix: 'YOUR_QINIU_KEY_PREFIX' // Optional
    };
  },

  onUpload: function (files) {
    // set onprogress function before uploading
    files.map(function (f) {
      f.onprogress = function(e) {
        console.log(e.percent);
      };
    });
  },

  onDrop: function (files) {
    this.setState({
      files: files
    });
    // files is a FileList(https://developer.mozilla.org/en/docs/Web/API/FileList) Object
    // and with each file, we attached two functions to handle upload progress and result
    // file.request => return super-agent uploading file request
    // file.uploadPromise => return a Promise to handle uploading status(what you can do when upload failed)
    // `react-qiniu` using bluebird, check bluebird API https://github.com/petkaantonov/bluebird/blob/master/API.md
    // see more example in example/app.js
    console.log('Received files: ', files);
  },

  render: function () {
    return (
      <div>
        <Qiniu onDrop={this.onDrop} className="no" size={200} size1={100} token={this.state.token} uploadKey={this.state.uploadKey} onUpload={this.onUpload}>
          <div>点击上传</div>
        </Qiniu>
      </div>
    );
  }
});

const audio = () =>{
  return(
    <div>
      <h3>音频列表</h3>


      <ReactQiniuDemo />
    </div>
  )
}

export default audio;
