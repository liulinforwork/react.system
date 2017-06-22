import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import { DropOption } from '../../../components'
import { Link } from 'dva/router'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
  // const handleMenuClick = (record, e) => {
  //   if (e.key === '1') {
  //     onEditItem(record)
  //   } else if (e.key === '2') {
  //     confirm({
  //       title: '你确定要删除该条数据吗？',
  //       onOk () {
  //         onDeleteItem(record.id)
  //       },
  //     })
  //   }
  // }

  const columns = [
    // {
    //   title: 'Avatar',
    //   dataIndex: 'avatar',
    //   key: 'avatar',
    //   width: 64,
    //   className: styles.avatar,
    //   render: (text) => <img alt={'avatar'} width={24} src={text} />,
    // },
    {
      title: '编号',
      dataIndex: 'name',
      key: 'name',
      // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    }
    , {
      title: '姓名',
      dataIndex: 'nickName',
      key: 'nickName',
    }
    // , {
    //   title: '年龄',
    //   dataIndex: 'age',
    //   key: 'age',
    // }
    // , {
    //   title: '性别',
    //   dataIndex: 'isMale',
    //   key: 'isMale',
    //   render: (text) => <span>{text
    //         ? 'Male'
    //         : 'Female'}</span>,
    // }
    , {
      title: '电话号码',
      dataIndex: 'phone',
      key: 'phone',
    }
    // , {
    //   title: '电子邮箱',
    //   dataIndex: 'email',
    //   key: 'email',
    // }
    // , {
    //   title: '居住地址',
    //   dataIndex: 'address',
    //   key: 'address',
    // }
    , {
      title: '离职时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }
    , {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return    <h3>至为离职</h3>
          // <h3>--</h3>
        // return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '更新' }, { key: '2', name: '删除' }]} />
      },
    },
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
