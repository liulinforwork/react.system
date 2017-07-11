import React from 'react'
import { Tabs } from 'antd';
import recharts from 'recharts';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const data = [{ name: 'a', uv: 4000, pv: 2400 }, { name: 'b', uv: 3000, pv: 1398 }, { name: 'b', uv: 2000, pv: 1398 },{ name: 'b', uv: 1000, pv: 1398 },{ name: 'b', uv: 3000, pv: 28 },{ name: 'c', uv: 100, pv: 0 }];

const lineChart = () => {
  return(
    <Tabs defaultActiveKey="1" onChange={callback} type="card">
      <TabPane tab="第一条曲线" key="1">
        <LineChart width={1000} height={500} data={data}>
          <XAxis />
          <YAxis />
          <Line dataKey="pv" stroke="black" />
        </LineChart>
      </TabPane>
      <TabPane tab="第二条曲线" key="2">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
      <TabPane tab="第三条曲线" key="3">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
      <TabPane tab="第一条曲线" key="4">
        <LineChart width={1000} height={500} data={data}>
          <XAxis />
          <YAxis />
          <Line dataKey="pv" stroke="black" />
        </LineChart>
      </TabPane>
      <TabPane tab="第二条曲线" key="5">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
      <TabPane tab="第三条曲线" key="6">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
      <TabPane tab="第一条曲线" key="7">
        <LineChart width={1000} height={500} data={data}>
          <XAxis />
          <YAxis />
          <Line dataKey="pv" stroke="black" />
        </LineChart>
      </TabPane>
      <TabPane tab="第二条曲线" key="8">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
      <TabPane tab="第三条曲线" key="9">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </TabPane>
    </Tabs>
  )
}

export default lineChart

// <LineChart
//   width={400}
//   height={400}
//   data={data}
//   margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
// >
//   <XAxis dataKey="name" />
//   <Tooltip />
//   <CartesianGrid stroke="#f5f5f5" />
//   <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
//   <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
// </LineChart>


