import React from 'react'
import { Tabs,Icon } from 'antd';
import recharts from 'recharts';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const data = [{ name: 'a', uv: 4000, pv: 2400 }, { name: 'b', uv: 3000, pv: 1398 }, { name: 'b', uv: 2000, pv: 1398 },{ name: 'b', uv: 1000, pv: 1398 },{ name: 'b', uv: 3000, pv: 28 },{ name: 'c', uv: 100, pv: 0 }];
const data1 = [
  { name: 'a', uv: 4000, pv: 2400 },
  { name: 'b', uv: 3000, pv: 1398 },
  { name: 'b', uv: 2000, pv: 1398 },
  { name: 'b', uv: 1000, pv: 1398 },
  { name: 'b', uv: 3000, pv: 28 },
  { name: 'c', uv: 100, pv: 0 }
];

const barChart = () => {
  return(
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="第一条曲线" key="1">
        <BarChart width={730} height={250} data={data1}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </TabPane>
      <TabPane disabled tab="第二条曲线" key="2">
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
      <TabPane tab={<span><Icon type="apple" />第四条曲线</span>}  key="4">
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
      <TabPane tab="第五条曲线" key="5">
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
      <TabPane tab="第六条曲线" key="6">
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
      <TabPane tab="第七条曲线" key="7">
        <BarChart width={730} height={250} data={data1}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </TabPane>
      <TabPane tab="第八条曲线" key="8">
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
      <TabPane tab="第九条曲线" key="9">
        <BarChart width={730} height={250} data={data1}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </TabPane>
      <TabPane tab="第十条曲线" key="10">
        <BarChart width={730} height={250} data={data1}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </TabPane>
    </Tabs>
  )
}

export default barChart

