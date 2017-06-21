import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input } from 'antd'
import Modal from './Modal'

const Quick = ({ dispatch, quick }) => {

  const { visible } = quick;

  const onAdd = () => {
    dispatch({
      type: 'quick/showModal',
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
    title: "添加快捷语",
    okText: "添加",
    visible: visible,
    onOk(data){
      // console.log(data);
      dispatch({
        type:'quick/hideModal'
      })
    },
    onCancel(data){
      // console.log(data);
      dispatch({
        type:'quick/hideModal'
      })
    }
  };

  return (
    <div className="content-inner">
      <Button style={styleObj} type="primary" onClick={onAdd}>添加快捷语</Button>
      <Table
        bordered
        columns={columns}
        simple
      />
      {visible && <Modal {...modalProps}></Modal>}
    </div>
  )
};

Quick.propTypes = {
  quick: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ quick }) => ({ quick }))(Quick)
