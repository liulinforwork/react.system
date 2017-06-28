import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input } from 'antd'
import Modal from './Modal'

const Request = ({ dispatch, request }) => {

  const { visible, list } = request;

  const onAdd = () => {
    dispatch({
      type: 'request/showModal',
    })
  };

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '编辑人',
      dataIndex: 'editUserName',
      key: 'editUserName'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render:()=>
        <div>
          <span>删除</span>
        </div>
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
  console.log(list)
  return (
    <div className="content-inner">
      <Button style={styleObj} type="primary" onClick={onAdd}>创建账户</Button>
      <Table
        bordered
        columns={columns}
        dataSource={list}
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
