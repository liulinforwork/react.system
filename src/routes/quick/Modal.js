import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'dva'
// import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import { Input, Modal } from 'antd'
const { TextArea } = Input;

const quickModal = ({
  onOk,
  ...modalProps
}) => {
  const handleOk = (data) => {
    console.log(data)
    onOk(data);
  };

  const modalOpts = {
    ...modalProps,
    onOk: handleOk
  };

  return (
    <Modal {...modalOpts}>
        <TextArea rows={4}/>
    </Modal>
  )
};
quickModal.propTypes = {
  onOk: PropTypes.func
};
