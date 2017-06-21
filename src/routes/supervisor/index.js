import React from 'react'
import styles from './index.less'
import { Row, Col, Card, Select, Input, Button, Table, Icon, DatePicker} from 'antd'

const columns = [{
  title: '时间',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
  },
  {
  title: '名称',
  dataIndex: 'age',
  key: 'age',
  },
  {
    title: '对方',
    dataIndex: 'you',
    key: 'you',
  },{
  title: '金额',
  dataIndex: 'address',
  key: 'address',
  },
  {
  title: '操作',
  key: 'action',
  render: (text, record) => (<span><a href="#">查看项目</a></span>),
}];
const data = [{
  key: '1',
  name: '2017年6月6日 00:02',
  age: '工程公开',
  you: '天府大道',
  address: -3423423,
}];

export default class RequestPage extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     currntRequest: requestOptions[0],
  //     method: 'get',
  //     result: '',
  //   }
  // }
  // componentDidMount () {
  //   this.handleRequest()
  // }
  // handleRequest = () => {
  //   const { currntRequest } = this.state
  //   const { desc, ...requestParams } = currntRequest
  //   this.setState({
  //     ...this.state,
  //     result: <div key="sending">
  //       请求中<br />
  //       url:{currntRequest.url}<br />
  //       method:{currntRequest.method}<br />
  //       params:{currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'}<br />
  //     </div>,
  //   })
  //   request({ ...requestParams }).then((data) => {
  //     const state = this.state
  //     state.result = [this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data)}</div>]
  //     this.setState(state)
  //   })
  // }
  // handeleURLChange = (value) => {
  //   const state = this.state
  //   const curretUrl = value.split('?')[0]
  //   const curretMethod = value.split('?')[1]
  //   const currntItem = requestOptions.filter(item => {
  //     const { method = 'get' } = item
  //     return curretUrl === item.url && curretMethod === method
  //   })
  //   state.currntRequest = currntItem[0]
  //   this.setState(state)
  // }
  render () {
    // const colProps = {
    //   lg: 12,
    //   md: 24,
    // }
    // const { result, currntRequest } = this.state
    // const { method = 'get' } = currntRequest
    return (

      <div className="content-inner">
        <div className={styles.sale1}>

          <div className={styles.money}>
            <Button className={styles.money_btn} type="primary">充值</Button>
            <h3>
              已支付金额：
              <span>200:00</span>
            </h3>
            <h3 className={styles.money_here}>
              当前金额：
              <span>199:00</span>
            </h3>

          </div>

          <div className={styles.tsdfs}>
            <Table
              columns={columns}
              bordered
              simple
              dataSource={data}
            />
          </div>
        </div>
      </div>
    )
  }
}