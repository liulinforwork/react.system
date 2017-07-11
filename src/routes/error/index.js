import React from 'react'
import { Icon } from 'antd'
import styles from './index.less'

const Error = () => <div className="content-inner">
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>正在施工中</h1>
  </div>
</div>

export default Error
