import React from 'react';
import {Form, Icon, Input, Button, Spin, Card, Row, Col} from 'antd';
import { connect } from 'react-redux'
import {Link, NavLink, withRouter} from 'react-router-dom';

import * as actions from '../store/actions/auth';
import axios from "axios";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const { Meta } = Card;

class ProfilePage extends React.Component {

    state = {
        userdata: {}
    };



    componentWillReceiveProps(nextProps) {
        if (this.props.token === null && nextProps.token !== null) {
            this.getUserData(nextProps.token);
        }
    }

    componentDidMount() {
        if (this.props.token) {
            this.getUserData(this.props.token);
        }
        // else {
        // 		this.getCompany();
        // }
    }

    getUserData(token) {
        // const header = (token === undefined) ? null : { headers: { 'Authorization' : 'Token ' + token }};

        const id = this.props.id;
        axios.get(`http://127.0.0.1:8000/api/profile/${id}/`, {
            headers: { 'Authorization' : 'Token ' + token }
        })
            .then(res => {
                console.log('Data om brukeren: ', res);
                this.setState({
                    userdata: res.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (

            <div>
                {
                    this.props.loading ?
                        <Spin indicator={antIcon} />
                        :

                        <div>

                            <Card type ="flex" style={{ "width": "100%", margin:0,alignItems: 'center'}}>

                                <Row>
                                    <Col span={12}>
                                        <Card
                                            hoverable
                                            style={{ width: 300}}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                        >
                                            <Meta
                                                title={this.state.userdata.first_name}
                                                description="www.instagram.com"
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={12}>Card content  {this.state.userdata.email}

                                        <Button type="primary"><Link to='/profile/edit/' >Edit profile</Link></Button></Col>
                                </Row>

                            </Card>
                        </div>
                }
            </div>
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

export default connect(mapStateToProps)(ProfilePage);