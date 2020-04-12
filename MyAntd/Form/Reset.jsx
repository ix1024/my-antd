import React, { memo } from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const ResetButton = memo(props => {
    const { children, form, onReset = () => {}, ...rest } = props
    return (
        <Button
            onClick={() => {
                form.resetFields()
                onReset()
            }}
            {...rest}
        >
            {children || '重置'}
        </Button>
    )
})

ResetButton.propTypes = {
    form: PropTypes.object.isRequired,
}
export default ResetButton
