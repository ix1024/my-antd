import React from 'react'
import styles from './FormLayout.less'
/**
 * 表单搜索，Flex布局
 * @param {*} props
 */
const FormLayout = props => {
    const { children, extra } = props || {}
    if (!children && !extra) {
        return null
    }
    return (
        <div className={styles.__FormLayoutBox}>
            {children ? <div>{children}</div> : null}
            {extra ? <div>{extra}</div> : null}
        </div>
    )
}
export { FormLayout }
export default FormLayout
