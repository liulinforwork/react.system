import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input } from 'antd'
import Modal from './Modal'

const Request = ({ dispatch, request }) => {

  const { visible } = request;

  const onAdd = () => {
    dispatch({
      type: 'request/showModal',
      // payload: {
      //   name: '龙大侠的测试被创建帐号'
      // }
    })
  };

  const columns = [
    {
      title: '编号',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '内容',
      dataIndex: 'nickName',
      key: 'nickName'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100
    }
  ];

  const styleObj = {
    "margin":"20px auto"
  };

  const modalProps = {
    title: "创建账户",
    okText: "提交",
    visible: visible,
    onOk(data){
      // console.log(data);
      dispatch({
        type:'request/hideModal'
      })
    },
    onCancel(data){
      // console.log(data);
      dispatch({
        type:'request/hideModal'
      })
    }
  };

  return (
    <div className="content-inner">
      <Button style={styleObj} type="primary" onClick={onAdd}>创建账户</Button>
      <Table
        bordered
        columns={columns}
        simple
      />
      {visible && <Modal {...modalProps}></Modal>}
    </div>
  )
};

Request.propTypes = {
  request: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ request }) => ({ request }))(Request)
