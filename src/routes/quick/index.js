import React from 'react'
// import { DataTable } from '../../../components'
import { Button,Table } from 'antd'

class DataTablePage extends React.Component {



  // const getBodyWrapperProps = {
  //   page: location.query.page,
  //   current: tableProps.pagination.current
  // };
  //
  // const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body };
  render () {
    // const { filterCase } = this.state

    const columns = [
      {
        title: '编号',
        dataIndex: 'name',
        key: 'name'
        // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: '内容',
        dataIndex: 'nickName',
        key: 'nickName'
      },
      {
        title: '操作',
        key: 'operation',
        width: 100,
        render: (text, record) => {
          return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '绑定' }, { key: '2', name: '解除绑定' },{ key: '3', name: '删除' }]} />
        }
      }
    ];
    const styleObj = {
      "margin":"20px auto"
    };
    return (<div className="content-inner">
      <Button style={styleObj} type="primary">添加</Button>
      <Table
        // {...tableProps}
        // className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        // scroll={{ x: 1250 }}
        columns={columns}
        simple
        // rowKey={record => record.id}
        // getBodyWrapper={getBodyWrapper}
      />
    </div>)
  }
}


export default DataTablePage
// constructor (props) {
//   super(props)
// this.state = { filterCase: {
//   gender: '',
// } }
// }
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
