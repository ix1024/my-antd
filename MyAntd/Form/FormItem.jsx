import React, { PureComponent } from 'react'
import { Form } from 'antd'
import styles from './FormItem.less'

class FormItem extends PureComponent {
    render() {
        const { children, className, label = ' ', formItemLayout, style, showLabel = true, append } = this.props

        return (
            <Form.Item
                className={`${className} ${styles.item}`}
                label={showLabel ? label : null}
                {...formItemLayout}
                style={style}
            >
                {children}
                {append}
            </Form.Item>
        )
    }
}

export { FormItem }

export default FormItem
