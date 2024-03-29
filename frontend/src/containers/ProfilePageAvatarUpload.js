import React from 'react';
// import {Link, NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {

    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    /*
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }*/
    return isJPG /*&& isLt2M*/;
}
const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

class ProfilePageAvatarUpload extends React.Component {


    state = {
        loading: false,
    };



    handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {this.setState({
                imageUrl,
                loading: false,
            })
                this.props.handleImageChange(this.state.imageUrl);
                console.log("THIS IS THE IMAGE URL AT UPLOAD ", this.state.imageUrl);

            });


        }
    }



    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                customRequest={dummyRequest}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
            </Upload>
        );
    }
}



const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.token,
        id: state.id
    };
};

export default connect(mapStateToProps)(ProfilePageAvatarUpload);