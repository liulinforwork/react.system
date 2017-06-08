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
// handleSelectChange = (gender) => {
//   this.setState({
//     filterCase: {
//       gender,
//     },
//   })
// }
// const staticDataTableProps = {
//   dataSource: [{ key: '1', name: 'John Brown', age: 24, address: 'New York' }, { key: '2', name: 'Jim Green', age: 23, address: 'London' }],
//   columns: [{ title: 'name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }],
//   pagination: false,
// }
// const fetchDataTableProps = {
//   fetch: {
//     url: 'https://randomuser.me/api',
//     data: {
//       results: 10,
//       testPrams: 'test',
//     },
//     dataKey: 'results',
//   },
//   columns: [
//     { title: 'Name', dataIndex: 'name', render: (text) => `${text.first} ${text.last}` },
//     { title: 'Phone', dataIndex: 'phone' },
//     { title: 'Gender', dataIndex: 'gender' },
//   ],
//   rowKey: 'registered',
// }
// const caseChangeDataTableProps = {
//   fetch: {
//     url: 'https://randomuser.me/api',
//     data: {
//       results: 10,
//       testPrams: 'test',
//       ...filterCase,
//     },
//     dataKey: 'results',
//   },
//   columns: [
//     { title: 'Name', dataIndex: 'name', render: (text) => `${text.first} ${text.last}` },
//     { title: 'Phone', dataIndex: 'phone' },
//     { title: 'Gender', dataIndex: 'gender' },
//   ],
//   rowKey: 'registered',
// }
// <Row gutter={32}>
//   <Col lg={12} md={24}>
//   <Card title="默认">
//   <DataTable pagination={false} />
//   </Card>
//   </Col>
//   <Col lg={12} md={24}>
//   <Card title="静态数据">
//   <DataTable
// {...staticDataTableProps}
// />
// </Card>
// </Col>
// <Col lg={12} md={24}>
//   <Card title="远程数据">
//   <DataTable
// {...fetchDataTableProps}
// />
// </Card>
// </Col>
// <Col lg={12} md={24}>
//   <Card title="参数变化">
//   <Select placeholder="Please select gender" allowClear onChange={this.handleSelectChange} style={{ width: 200, marginBottom: 16 }}>
// <Select.Option value="male">Male</Select.Option>
//   <Select.Option value="female">Female</Select.Option>
//   </Select>
//   <DataTable
// {...caseChangeDataTableProps}
// />
// </Card>
// </Col>
// </Row>
// <h2 style={{ margin: '16px 0' }}>Props</h2>
// <Row>
// <Col lg={18} md={24}>
//   <Table
// rowKey={(record, key) => key}
// pagination={false}
// bordered
// scroll={{ x: 800 }}
// columns={[
// {
//   title: '参数',
//   dataIndex: 'props',
// },
// {
//   title: '说明',
//     dataIndex: 'desciption',
// },
// {
//   title: '类型',
//     dataIndex: 'type',
// },
// {
//   title: '默认值',
//     dataIndex: 'default',
// },
// ]}
// dataSource={[
//   {
//     props: 'fetch',
//     desciption: '远程获取数据的参数',
//     type: 'Object',
//     default: '后面有空加上',
//   }]}
//   />
//   </Col>
//   </Row>
