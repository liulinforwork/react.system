import React from 'react'

// import { DataTable } from '../../../components'

import { Table, Row, Col, Card, Select,Input  } from 'antd'
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class DataTablePage extends React.Component {
  // constructor (props) {
  //   super(props)
  // this.state = { filterCase: {
  //   gender: '',
  // } }
  // }


  render () {
    // const { filterCase } = this.state
    const styleObj = {
      width:'100%',
      height:'auto'
    };
    return (<div className="content-inner">
      <h3>项目信息</h3>
      <div className={styleObj}>
        <Col lg={24} md={24}>
          <label htmlFor="">项目名称</label>
          <Input placeholder="请输入项目名称" />
          <label htmlFor="">项目地址</label>
          <Input placeholder="请输入项目地址" />
          <label htmlFor="">项目简介</label>
          <Input type="textarea" rows={4} placeholder="请输入项目简介" />
        </Col>
      </div>

      <h3>选择工程人员</h3>
      <Col lg={12} md={24}>
        <Col lg={12} md={24}>
          <label htmlFor="">监理</label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="选择一个监理"
            optionFilterProp="children"
            onChange={handleChange}
            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
        </Col>
        <Col lg={12} md={24}>
          <label htmlFor="">工长</label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="选择一个岗位"
            optionFilterProp="children"
            onChange={handleChange}
            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
        </Col>
      </Col>
    </div>)
  }
}


export default DataTablePage
