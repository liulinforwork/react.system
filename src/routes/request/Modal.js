import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      // data.address = data.address.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>

      <Form layout="horizontal">
        <FormItem label="账号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            // initialValue: item.name,
            rules: [
              {
                required: true,
                message: '请输入你的账号',
              },
            ],
          })(<Input placeholder="需确保账号唯一"/>)}
        </FormItem>

        <FormItem label="密码" hasFeedback {...formItemLayout} help="请输入密码">
          {getFieldDecorator('nickName', {
            // initialValue: item.nickName,
            rules: [
              {
                required: true,
                message: '请输入你的密码',
              },
            ],
          })(<Input placeholder="字母、数字或者英文符号，6~32位，区分大小写" />)}
        </FormItem>

        <FormItem label="用户名" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            // initialValue: item.phone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: '请输入你的用户名',
              },
            ],
          })(<Input placeholder="字母、数字或者中英文符号，6~32位，区分大小写"/>)}
        </FormItem>

      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)

// <FormItem label="Gender" hasFeedback {...formItemLayout}>
// {getFieldDecorator('isMale', {
//   initialValue: item.isMale,
//   rules: [
//     {
//       required: true,
//       type: 'boolean',
//     },
//   ],
// })(
//   <Radio.Group>
//     <Radio value>Male</Radio>
//     <Radio value={false}>Female</Radio>
//   </Radio.Group>
// )}
// </FormItem>
// <FormItem label="Age" hasFeedback {...formItemLayout}>
// {getFieldDecorator('age', {
//   initialValue: item.age,
//   rules: [
//     {
//       required: true,
//       type: 'number',
//     },
//   ],
// })(<InputNumber min={18} max={100} />)}
// </FormItem>
// <FormItem label="E-mail" hasFeedback {...formItemLayout}>
//   {getFieldDecorator('email', {
//     initialValue: item.email,
//     rules: [
//       {
//         required: true,
//         pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
//         message: 'The input is not valid E-mail!',
//       },
//     ],
//   })(<Input />)}
// </FormItem>
// <FormItem label="Address" hasFeedback {...formItemLayout}>
//   {getFieldDecorator('address', {
//     initialValue: item.address && item.address.split(' '),
//     rules: [
//       {
//         required: true,
//       },
//     ],
//   })(<Cascader
//     size="large"
//     style={{ width: '100%' }}
//     options={city}
//     placeholder="Pick an address"
//   />)}
// </FormItem>
