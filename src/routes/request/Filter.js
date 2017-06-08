import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch } from 'antd'
import city from '../../utils/city'

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
  // isMotion,
  // switchIsMotion,
  // onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  // const handleFields = (fields) => {
  //   const { createTime } = fields
  //   if (createTime.length) {
  //     fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')]
  //   }
  //   return fields
  // }

  // const handleSubmit = () => {
  //   let fields = getFieldsValue()
  //   fields = handleFields(fields)
  //   onFilterChange(fields)
  // }

  // const handleReset = () => {
  //   const fields = getFieldsValue()
  //   for (let item in fields) {
  //     if ({}.hasOwnProperty.call(fields, item)) {
  //       if (fields[item] instanceof Array) {
  //         fields[item] = []
  //       } else {
  //         fields[item] = undefined
  //       }
  //     }
  //   }
  //   setFieldsValue(fields)
  //   handleSubmit()
  // }

  // const handleChange = (key, values) => {
  //   let fields = getFieldsValue()
  //   fields[key] = values
  //   fields = handleFields(fields)
  //   onFilterChange(fields)
  // }
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

  return (
    <div>
      <Button style={styleObj} type="primary" onClick={onAdd}>创建账号</Button>
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

// <Row gutter={24}>
//   <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
// {getFieldDecorator('name', { initialValue: name })(<Search placeholder="填写你需要找的名字" size="large" onSearch={handleSubmit} />)}
// </Col>
// </Row>
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
