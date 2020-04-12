import React, { Component } from 'react'
import { Form, Input } from 'antd'
import PropTypes from 'prop-types'
// import styles from './TextArea.less';

const hLevel = { a: 50, b: 100, c: 150, d: 200, e: 250, f: 300 }
const { TextArea } = Input
export default class App extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        message: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        showNumber: PropTypes.bool,
        className: PropTypes.string,
        maxLength: PropTypes.number,
        transform: PropTypes.func,
        defaultValue: PropTypes.any,
        showLabel: PropTypes.bool,
        hasFeedback: PropTypes.bool,
        pattern: PropTypes.object,
        isPlaceLabel: PropTypes.bool,
        formItemLayout: PropTypes.object,
        rules: PropTypes.array,
        suffix: PropTypes.any,
    }

    static defaultProps = {
        // name: null,
        // form: null,
        label: '',
        maxLength: 1000,
        type: 'text',
        message: '',
        className: '',
        placeholder: '请输入',
        formItemLayout: null,
        defaultValue: undefined,
        pattern: null,
        transform: item => {
            return item && item.trim ? item.trim() : item
        },
        required: true,
        showLabel: true,
        hasFeedback: false,
        showNumber: false,
        isPlaceLabel: true,
        rules: [],
        suffix: '',
    }

    componentDidMount() {
        const { defaultValue, form, name } = this.props
        const obj = {}
        if (undefined !== defaultValue && name) {
            obj[name] = defaultValue
            form.setFieldsValue(obj)
        }
    }

    render() {
        const {
            required,
            pattern,
            form,
            name,
            label,
            message,
            formItemLayout,
            hasFeedback,
            style,
            placeholder,
            showLabel,
            maxLength,
            className,
            transform,
            rules,
            suffix,
            defaultValue,
            isPlaceLabel,
            heightLevel,
            showNumber,
            ...resProps
        } = this.props
        const params = {}
        const heightStyle = {}
        if (!form) {
            return <>控件缺少form属性</>
        }
        if (!name) {
            return <>控件缺少name属性</>
        }
        if (maxLength !== 0) {
            params.maxLength = maxLength
        }
        const msg = isPlaceLabel ? placeholder + label : placeholder
        if (style && !style.height && heightLevel) {
            style.height = hLevel[heightLevel]
        }
        if (!style && heightLevel) {
            heightStyle.height = hLevel[heightLevel]
        }
        return (
            <Form.Item
                label={showLabel ? label : ''}
                {...formItemLayout}
                hasFeedback={hasFeedback}
                className={className}
            >
                {form.getFieldDecorator(name, {
                    initialValue: defaultValue,
                    rules: rules.length ? rules : [{ transform, required, pattern, message: message || msg }],
                })(<TextArea placeholder={msg} style={style || heightStyle} {...params} {...resProps} />)}
                {suffix}
            </Form.Item>
        )
    }
}
