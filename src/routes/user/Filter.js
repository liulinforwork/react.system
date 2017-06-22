import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch, Tag, Tooltip} from 'antd'
// import city from '../../utils/city'

const Search = Input.Search
const { RangePicker } = DatePicker
const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}
const TwoColProps = {
  ...ColProps,
  xl: 96,
}






const Filter = ({
  onAdd,
  isMotion,
  switchIsMotion,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  // const state = {
  //   tags: ['Unremovable', 'Tag 2', 'Tag 3'],
  //   inputVisible: false,
  //   inputValue: '',
  // };
  //
  // const handleClose = (removedTag) => {
  //   const tags = this.state.tags.filter(tag => tag !== removedTag);
  //   console.log(tags);
  //   this.setState({ tags });
  // }
  //
  // const showInput = () => {
  //   this.setState({ inputVisible: true }, () => this.input.focus());
  // }
  //
  // const handleInputChange = (e) => {
  //   this.setState({ inputValue: e.target.value });
  // }
  //
  // const handleInputConfirm = () => {
  //   const state = this.state;
  //   const inputValue = state.inputValue;
  //   let tags = state.tags;
  //   if (inputValue && tags.indexOf(inputValue) === -1) {
  //     tags = [...tags, inputValue];
  //   }
  //   console.log(tags);
  //   this.setState({
  //     tags,
  //     inputVisible: false,
  //     inputValue: '',
  //   });
  // }

  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  const handleFields = (fields) => {
    const { createTime } = fields
    if (createTime.length) {
      fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')]
    }
    return fields
  }
  const handleSubmit = () => {
    let fields = getFieldsValue()
    fields = handleFields(fields)
    onFilterChange(fields)
  }
  const handleReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    handleSubmit()
  }
  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { name, address } = filter
  let initialCreateTime = []
  if (filter.createTime && filter.createTime[0]) {
    initialCreateTime[0] = moment(filter.createTime[0])
  }
  if (filter.createTime && filter.createTime[1]) {
    initialCreateTime[1] = moment(filter.createTime[1])
  }
  const styleObj = {
    "margin":"20px auto"
  }
  const styleobj = {
      'margin-bottom':'10px'
  }
  // const { tags, inputVisible, inputValue } = this.state;
  return (
    <div>
      <Button style={styleObj} type="primary" onClick={onAdd}>添加人员</Button>

      <div style={styleobj}>
        <Tag>监理</Tag>
        <Tag closable onClose={log}>工长</Tag>
        <Tag closable onClose={log}>大帅比</Tag>
        <Tag closable onClose={preventDefault}>默认标签</Tag>
      </div>
      <div style={styleobj}>
        <Tag closable onClose={log}>组1</Tag>
        <Tag closable onClose={log}>组2</Tag>
        <Tag closable onClose={log}>组3</Tag>
      </div>


      <Row gutter={24}>
        <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
          {getFieldDecorator('name', { initialValue: name })(<Search placeholder="填写你需要找的名字" size="large" onSearch={handleSubmit} />)}
        </Col>
      </Row>
    </div>
  )
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  isMotion: PropTypes.bool,
  switchIsMotion: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
// <Col {...TwoColProps} xl={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
// <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// <div >
// <Button size="large" onClick={handleReset}>重置</Button>
//   </div>
//   </div>
//   </Col>
// <div>
// <Switch style={{ marginRight: 16 }} size="large" defaultChecked={isMotion} onChange={switchIsMotion} checkedChildren={'Motion'} unCheckedChildren={'Motion'} />
//   </div>
// <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
// {getFieldDecorator('address', { initialValue: address })(
//   <Cascader
//     size="large"
//     style={{ width: '100%' }}
//     options={city}
//     placeholder="Please pick an address"
//     onChange={handleChange.bind(null, 'address')}
//   />)}
// </Col>
// <Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>
//   <FilterItem label="Createtime">
//     {getFieldDecorator('createTime', { initialValue: initialCreateTime })(
//       <RangePicker style={{ width: '100%' }} size="large" onChange={handleChange.bind(null, 'createTime')} />
//     )}
//   </FilterItem>
//   </Col>
// <Button type="primary" size="large" className="margin-right" onClick={handleSubmit}>Search</Button>

// href="https://github.com/ant-design/ant-design/issues/1862"
// <div>
// {tags.map((tag, index) => {
//   const isLongTag = tag.length > 20;
//   const tagElem = (
//     <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
//       {isLongTag ? `${tag.slice(0, 20)}...` : tag}
//     </Tag>
//   );
//   return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
// })}
// {inputVisible && (
//   <Input
//     ref={this.saveInputRef}
//     type="text"
//     size="small"
//     style={{ width: 78 }}
//     value={inputValue}
//     onChange={this.handleInputChange}
//     onBlur={this.handleInputConfirm}
//     onPressEnter={this.handleInputConfirm}
//   />
// )}
// {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
// </div>
