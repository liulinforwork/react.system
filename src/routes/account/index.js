import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button,Table,Input,Popconfirm, message } from 'antd'
import styles from './index.less'

const Account = ({ dispatch, account }) => {

  const { list } = account;

  // // 添加快捷语
  // const onAdd = () => {
  //   dispatch({
  //     type: 'quick/addText',
  //     payload:{
  //       name: ''
  //     }
  //   })
  // };
  // // 删除快捷语
  // const onDelete = (e) => {
  //   dispatch({
  //     type: 'quick/remove',
  //     payload:{
  //       id:list.id
  //     }
  //   })
  // };
  // // 编辑快捷语
  // const onModify = () => {
  //   dispatch({
  //     type: 'quick/upText',
  //     payload:{
  //       name: ''
  //     }
  //   })
  // };

  const columns = [
    {
      title: '时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '名称',
      dataIndex: 'reasonType',
      key: 'reasonType'
    },
    {
      title: '金额',
      dataIndex: 'balance',
      key: 'balance'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render: () =>
      <div>
        <Popconfirm title="你确认删除这条快捷语吗?" okText="确定" cancelText="取消">
          <a href="#">删除</a>
        </Popconfirm>
        &nbsp;
        &nbsp;
        <Popconfirm title="你确认编辑这条快捷语吗?" okText="确定" cancelText="取消">
          <a href="#">编辑</a>
        </Popconfirm>
      </div>
    }
  ];
  // const styleObj = {
  //   "margin":"20px auto"
  // };
  // const modalProps = {
  //   title: "添加快捷语",
  //   okText: "添加",
  //   visible: visible,
  //   onOk(data){
  //     dispatch({
  //       type:'quick/hideModal'
  //     })
  //   },
  //   onCancel(data){
  //     dispatch({
  //       type:'quick/hideModal'
  //     })
  //   }
  // };
  return (
    <div className="content-inner">
      <div className={styles.sale1}>

        <div className={styles.money}>
          <Button className={styles.money_btn} type="primary">充值</Button>
          <h3>
            已支付金额：
            <span>200:00</span>
          </h3>
          <h3 className={styles.money_here}>
            当前金额：
            <span>199:00</span>
          </h3>

        </div>

        <div className={styles.tsdfs}>
          <Table
            columns={columns}
            bordered
            simple
            dataSource={list}
          />
        </div>
      </div>
    </div>
  )
};
// {visible && <Modal {...modalProps}></Modal>}
Account.propTypes = {
  account: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ account }) => ({ account }))(Account)
