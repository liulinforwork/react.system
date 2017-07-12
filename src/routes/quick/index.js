import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input,Popconfirm, message } from 'antd'
import Modal from './Modal'
import styles from './index.less'



// class createQuick extends React.Component{
//   constructor(props){
//     super(props);
//     this.state.visible = false;
//   }
//
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   }
//   handleOk = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }
//   handleCancel = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }
//   render(){
//     <div>
//       <Button type="primary" onClick={this.showModal}>Open</Button>
//       <Modal
//         title="Basic Modal"
//         visible={this.state.visible}
//         onOk={this.handleOk}
//         onCancel={this.handleCancel}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </div>
//   }
// }

const Quick = ({ dispatch, quick }) => {

  const { visible,list } = quick;

  // 添加快捷语
  const onAdd = () => {
    dispatch({
      type: 'quick/showModal'
    })
  };
  const modalProps = {
    title: "添加快捷语",
    okText: "添加",
    visible: visible,
    onOk(data){

      dispatch({
        type: 'quick/addText',
        payload:{
          name:"324"
        }
      })
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

  // 删除快捷语
  const onDelete = (id) => {
    dispatch({
      type: 'quick/remove',
      payload:{
        id:id
      }
    })
  };

  // 编辑快捷语
  const onModify = (id,values) => {
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
      width: 200,
      render: (text, record, index) =>
      <div>
        <Popconfirm title="你确认删除这条快捷语吗?" onConfirm={onDelete.bind(null,record.id)}  okText="确定" cancelText="取消">
          <a href="#">删除</a>
        </Popconfirm>
        &nbsp;
        &nbsp;
        <Popconfirm title="你确认编辑这条快捷语吗?" onConfirm={onModify.bind(null, record.id)}  okText="确定" cancelText="取消">
          <a href="#">编辑</a>
        </Popconfirm>
      </div>
    }
  ];

  return (
    <div className="content-inner">
      <Button className={styles.title} type="primary" onClick={onAdd}>添加快捷语</Button>
      <p className={styles.info}>快捷语用于项目现场照片时填写不合格原因</p>
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
