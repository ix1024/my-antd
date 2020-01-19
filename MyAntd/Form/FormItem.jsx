import React, { PureComponent } from 'react'
import { Form } from 'antd'
import styles from './FormItem.less'

class FormItem extends PureComponent {
  render() {
    const { children, className, form, label, formItemLayout, hasFeedback, style, showLabel, append } = this.props
    if (!form) {
      return <>控件缺少form属性</>
    }

    return (
      <Form.Item
        className={`${className} ${styles.item}`}
        label={showLabel ? label : ''}
        {...formItemLayout}
        hasFeedback={hasFeedback}
        style={style}
      >
        {children}
        {append}
      </Form.Item>
    )
  }
}

export default FormItem
