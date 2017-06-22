import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input } from 'antd'
import Modal from './Modal'

const Quick = ({ dispatch, quick }) => {

  const { visible,list } = quick;

  // 添加快捷语
  const onAdd = () => {
    dispatch({
      type: 'quick/showModal',
      // payload: {
      //   name: '龙大侠的测试被创建帐号'
      // }
    })
  };

  // 修改快捷语
  const onModify = () => {
    dispatch({
      type: 'quick/showModal',
    })
  };

  // 删除快捷语
  const onDelete = () => {
    dispatch({
      type: 'quick/showModal',
    })
  };

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '内容',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render: () =>
        <div>
          <span onClick={onDelete}>删除</span>
          &nbsp;
          &nbsp;
          <span onClick={onModify}>编辑</span>
        </div>
    }
  ];

  const styleObj = {
    "margin":"20px auto"
  };

  const modalProps = {
    title: "添加人员",
    okText: "下一步",
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
      <Button style={styleObj} type="primary" onClick={onAdd}>添加人员</Button>
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

Quick.propTypes = {
  quick: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ quick }) => ({ quick }))(Quick)
