import React from 'react'
import styles from './index.less'
import Mock from 'mockjs'
import { request, config } from '../../utils'
import {
  Row,
  Col,
  Card,
  Select,
  Input,
  Button,
  Table,
  Icon,
  DatePicker
} from 'antd'
const { api, baseURL } = config
const { dashboard, users, userLogin, user } = api

import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


const columns = [{
  title: '时间',
  dataIndex: 'name',
  key: 'name',
  // render: text => <a href="#">{text}</a>,
}, {
  title: '名称 | 对方',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '金额',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>

      <a href="#">查看项目</a>

    </span>
  ),
}];
// <a href="#">Action 一 {record.name}</a>


// <span className="ant-divider" />
// <a href="#">Delete</a>
// <span className="ant-divider" />
// <a href="#" className="ant-dropdown-link">
//   More actions <Icon type="down" />
// </a>
const data = [{
  key: '1',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -3423423,
}, {
  key: '2',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -232,
}, {
  key: '3',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -1007,
}, {
  key: '4',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: 3423423,
},{
  key: '5',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: 12321312,
}, {
  key: '6',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -3,
}, {
  key: '7',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -4665,
}, {
  key: '8',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: 32240,
},{
  key: '9',
  name: '2017年06月06日 00:02',
  age: '工程公开 客户:***********34238',
  address: 5645,
}, {
  key: '10',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -443,
}, {
  key: '11',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -4546,
}, {
  key: '12',
  name: '2017年6月6日 00:02',
  age: '工程公开 客户:***********34238',
  address: -676,
}];



const requestOptions = [
  {
    url: baseURL + user.replace('/:id', ''),
    desc: 'intercept request by mock.js',
  },
  {
    url: baseURL + dashboard,
    desc: 'intercept request by mock.js',
  },
  {
    url: baseURL + userLogin,
    method: 'post',
    data: {
      username: 'guest',
      password: 'guest',
    },
    desc: 'intercept request by mock.js',
  },
  {
    url: baseURL + users,
    desc: 'intercept request by mock.js',
  },
  {
    url: baseURL + user,
    desc: 'intercept request by mock.js',
    data: Mock.mock({
      id: '@id',
    }),
  },
  {
    url: baseURL + user.replace('/:id', ''),
    desc: 'intercept request by mock.js',
    method: 'post',
    data: Mock.mock({
      name: '@cname',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
      },
    }),
  },
  {
    url: baseURL + user,
    desc: 'intercept request by mock.js',
    method: 'patch',
    data: Mock.mock({
      id: '@id',
      name: '@cname',
    }),
  },
  {
    url: baseURL + user,
    desc: 'intercept request by mock.js',
    method: 'delete',
    data: Mock.mock({
      id: '@id',
    }),
  },
  {
    url: `${baseURL}/test`,
    desc: 'intercept request by mock.js',
    method: 'get',
  },
  {
    url: 'http://api.asilu.com/weather/',
    desc: 'cross-domain request, but match config.baseURL(./src/utils/config.js)',
  },
  {
    url: 'http://www.zuimeitianqi.com/zuimei/queryWeather',
    data: {
      cityCode: '01010101',
    },
    desc: 'cross-domain request by yahoo\'s yql',
  }]

export default class RequestPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currntRequest: requestOptions[0],
      method: 'get',
      result: '',
    }
  }
  componentDidMount () {
    this.handleRequest()
  }

  handleRequest = () => {
    const { currntRequest } = this.state
    const { desc, ...requestParams } = currntRequest
    this.setState({
      ...this.state,
      result: <div key="sending">
        请求中<br />
        url:{currntRequest.url}<br />
        method:{currntRequest.method}<br />
        params:{currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'}<br />
      </div>,
    })
    request({ ...requestParams }).then((data) => {
      const state = this.state
      state.result = [this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data)}</div>]
      this.setState(state)
    })
  }

  handeleURLChange = (value) => {
    const state = this.state
    const curretUrl = value.split('?')[0]
    const curretMethod = value.split('?')[1]
    const currntItem = requestOptions.filter(item => {
      const { method = 'get' } = item
      return curretUrl === item.url && curretMethod === method
    })
    state.currntRequest = currntItem[0]
    this.setState(state)
  }

  render () {
    const colProps = {
      lg: 12,
      md: 24,
    }
    const { result, currntRequest } = this.state
    const { method = 'get' } = currntRequest

    return (

      <div className="content-inner">
        <div className={styles.sale1}>

          <div className={styles.money}>
            <h3>已支付金额：<span>200:00</span></h3>
            <h3>当前金额：<span>199:00</span><span className={styles.sale2}> 充值</span></h3>
          </div>
          
          <div className={styles.time}>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            />
            <Button type="primary" className={styles.btmsdf}>查询</Button>
          </div>

          <div className={styles.tsdfs}>
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
          </div>

        </div>
      </div>
      // <div className="content-inner">
      //   <Row gutter={32}>
      //     <Col {...colProps}>
      //       <Card title="Request" style={{
      //         overflow: 'visible',
      //       }}>
      //         <div className={styles.option}>
      //           <Select style={{
      //             width: '100%',
      //             flex: 1,
      //           }} defaultValue={`${method.toLocaleUpperCase()}   ${requestOptions[0].url}`}
      //                   size="large"
      //                   onChange={this.handeleURLChange}
      //           >
      //             {requestOptions.map((item, index) => {
      //               const m = item.method || 'get'
      //               return (<Select.Option key={index} value={`${item.url}?${m}`}>
      //                 {`${m.toLocaleUpperCase()}    `}{item.url}
      //               </Select.Option>)
      //             })}
      //           </Select>
      //           <Button type="primary" style={{ width: 100, marginLeft: 16 }} onClick={this.handleRequest}>发送</Button>
      //         </div>
      //         <div className={styles.params}>
      //           <div className={styles.label}>Params：</div>
      //           <Input disabled value={currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'} size="large" style={{ width: 200 }} placeholder="null" />
      //           <div style={{ flex: 1, marginLeft: 16 }}>{currntRequest.desc}</div>
      //         </div>
      //         <div className={styles.result}>
      //           {result}
      //         </div>
      //       </Card>
      //     </Col>
      //   </Row>
      // </div>
    )
  }
}
