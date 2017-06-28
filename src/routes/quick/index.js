import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input,Popconfirm, message } from 'antd'
import Modal from './Modal'

const Quick = ({ dispatch, quick }) => {

  const { visible,list } = quick;

  // 添加快捷语
  const onAdd = () => {
    dispatch({
      type: 'quick/addText',
      payload:{
        name: ''
      }
    })
  };
  // 删除快捷语
  const onDelete = (e) => {
    dispatch({
      type: 'quick/remove',
      payload:{
        id:list.id
      }
    })
  };
  // 编辑快捷语
  const onModify = () => {
    dispatch({
      type: 'quick/upText',
      payload:{
        name: ''
      }
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
        <Popconfirm title="你确认删除这条快捷语吗?" onConfirm={onDelete}  okText="确定" cancelText="取消">
          <a href="#">删除</a>
        </Popconfirm>
        &nbsp;
        &nbsp;
        <Popconfirm title="你确认编辑这条快捷语吗?" onConfirm={onModify}  okText="确定" cancelText="取消">
          <a href="#">编辑</a>
        </Popconfirm>
      </div>
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
      dispatch({
        type:'quick/hideModal'
      })
    },
    onCancel(data){
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
