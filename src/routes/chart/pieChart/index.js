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
  PieChart,
  Pie,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
// const data01 = [{ name: 'a', uv: 4000, pv: 2400 }, { name: 'b', uv: 3000, pv: 1398 }, { name: 'b', uv: 2000, pv: 1398 },{ name: 'b', uv: 1000, pv: 1398 },{ name: 'b', uv: 3000, pv: 28 },{ name: 'c', uv: 100, pv: 0 }];
const data01 = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
]

const data02 = [{name: 'A1', value: 100},
  {name: 'A2', value: 300},
  {name: 'B1', value: 100},
  {name: 'B2', value: 80},
  {name: 'B3', value: 40},
  {name: 'B4', value: 30},
  {name: 'B5', value: 50},
  {name: 'C1', value: 100},
  {name: 'C2', value: 200},
  {name: 'D1', value: 150},
  {name: 'D2', value: 50}]

const pieChart = () => {
  return(
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="第一个圆" key="1">
        <PieChart width={730} height={250}>
          <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </TabPane>
      <TabPane disabled tab="第二条曲线" key="2">
      </TabPane>
    </Tabs>
  )
}

export default pieChart

