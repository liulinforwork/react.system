import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
// import { Button,Table,Input } from 'antd'
import Modal from './Modal'
import Style from './User.less'
// import Search from './../../components'



import { Tag, Input, Tooltip, Button, Table} from 'antd';
const Search = Input.Search;

class EditableTagGroup extends React.Component {
  state = {
    tags: ['全部', '监工', '工长'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag color="blue" key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ 添加</Button>}
      </div>
    );
  }
}

const User = ({ dispatch, user }) => {

  const { visible,list } = user;

  // 添加快捷语
  const onAdd = () => {
    dispatch({
      type: 'quick/showModal',
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
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: '离职时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render: () =>
        <div>
          <span onClick={onDelete}>置为离职</span>
        </div>
    }
  ];

  const styleObj = {
    "margin":"20px auto",
    "height":"28px",
    "line-height":"28px",
    "margin-right":"20px"
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
      <Button style={styleObj} type="primary" onClick={onAdd}>
        添加人员
      </Button>
      <Search
        placeholder="请输入你需要查询的用户名"
        style={{ width: 270 }}
        onSearch={value => console.log(value)}
      />
      <ul className={Style.TagWp}>
        <li><EditableTagGroup /></li>
        <li><EditableTagGroup /></li>
        <li>

        </li>
      </ul>


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

User.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ user }) => ({ user }))(User)
