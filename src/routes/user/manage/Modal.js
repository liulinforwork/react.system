import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Select } from 'antd'
import city from '../../../utils/city'

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
        console.log("消息填写出错");
        return
      }
      console.log("消息ok");
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
        <FormItem
          label="职位"
          hasFeedback {...formItemLayout}
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: '请选择你的职位' }],
            // onChange: this.handleSelectChange,
          })(
            <Select placeholder="请选择一个你的职位">
              <Option value="监理">监理</Option>
              <Option value="工人">工人</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          label="部门"
          hasFeedback {...formItemLayout}
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: '请选择你的项目组' }],
            // onChange: this.handleSelectChange,
          })(
            <Select placeholder="请选择一个项目组">
              <Option value="组1">组1</Option>
              <Option value="组2">组2</Option>
            </Select>
          )}
        </FormItem>

        <FormItem label="姓名" hasFeedback {...formItemLayout}>
        {getFieldDecorator('nickName', {
          initialValue: item.nickName,
          rules: [
            {
              required: true,
              message:'请输入你的姓名'
            },
          ],
        })(<Input placeholder="必填" />)}
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

// <FormItem label="编号" hasFeedback {...formItemLayout}>
//   {getFieldDecorator('name', {
//     initialValue: item.name,
//     rules: [
//       {
//         required: true,
//       },
//     ],
//   })(<Input />)}
// </FormItem>



// <FormItem label="手机号码" hasFeedback {...formItemLayout}>
//   {getFieldDecorator('phone', {
//     initialValue: item.phone,
//     rules: [
//       {
//         required: true,
//         pattern: /^1[34578]\d{9}$/,
//         message: 'The input is not valid phone!',
//       },
//     ],
//   })(<Input />)}
// </FormItem>


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
