import React, { Component } from 'react'
import { Form, Select, Icon } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select
export default class App extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        mode: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        className: PropTypes.string,
        filterOption: PropTypes.string,
        maxLength: PropTypes.number,
        defaultValue: PropTypes.any,
        showArrow: PropTypes.bool,
        showLabel: PropTypes.bool,
        showSearch: PropTypes.bool,
        hasFeedback: PropTypes.bool,
        pattern: PropTypes.object,
        formItemLayout: PropTypes.object,
        options: PropTypes.array,
        rules: PropTypes.array,
        disabled: PropTypes.bool,
        isDefaultOption: PropTypes.bool,
        // filterOption: PropTypes.any,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onSearch: PropTypes.func,
    }

    static defaultProps = {
        // name: null,
        // form: null,
        label: '',
        maxLength: 200,
        type: 'text',
        mode: '',
        className: '',
        placeholder: '请选择',
        formItemLayout: null,
        defaultValue: undefined,
        showArrow: true,
        showSearch: true,
        pattern: null,
        required: true,
        showLabel: true,
        hasFeedback: false,
        options: [],
        rules: [],
        disabled: false,
        isDefaultOption: true,
        filterOption: 'default',
        onChange: () => {},
        onFocus: () => {},
        onSearch: () => {},
    }

    componentDidMount() {
        const { defaultValue, form, name } = this.props
        const obj = {}
        if (undefined !== defaultValue && defaultValue !== null && name) {
            if (Array.isArray(defaultValue)) {
                form.setFieldsValue({ [name]: defaultValue })
            } else {
                obj[name] = defaultValue
                form.setFieldsValue(obj)
            }
        }
    }

    render() {
        const {
            required,
            form,
            name = '',
            label,
            mode,
            formItemLayout,
            hasFeedback,
            showArrow,
            className,
            showSearch,
            style,
            options,
            placeholder,
            showLabel,
            rules,
            setRef,
            disabled,
            onChange,
            onSearch,
            onFocus,
            isDefaultOption,
            filterOption = 'default',
            defaultValue,
            suffixIcon = <Icon type="search" />,
        } = this.props
        let dFilterOption = filterOption
        const option = options.length
            ? options.map(d => {
                  return (
                      <Option key={d.value} value={d.value} option={d} disabled={d.disabled}>
                          {d.text}
                      </Option>
                  )
              })
            : []
        if (filterOption === 'default') {
            dFilterOption = (input, dOoption) => {
                // 检索过滤功能
                return dOoption.props.children.toLowerCase().indexOf(input.toLowerCase().trim()) >= 0
            }
        }
        if (!form) {
            return <>控件缺少form属性</>
        }
        if (!name) {
            return <>控件缺少name属性</>
        }
        return (
            <Form.Item
                label={showLabel ? label : ''}
                {...formItemLayout}
                hasFeedback={hasFeedback}
                style={style}
                className={className}
            >
                {form.getFieldDecorator(name, {
                    initialValue: defaultValue,
                    rules: rules.length ? rules : [{ required, message: `${placeholder}${label}` }],
                })(
                    <Select
                        mode={mode}
                        ref={setRef}
                        showSearch={showSearch}
                        placeholder={placeholder}
                        style={style}
                        defaultActiveFirstOption={false}
                        showArrow={showArrow}
                        onChange={onChange}
                        onFocus={onFocus}
                        onSearch={onSearch}
                        notFoundContent={null}
                        disabled={disabled}
                        suffixIcon={suffixIcon}
                        filterOption={dFilterOption}
                    >
                        {required || (!required && !isDefaultOption) ? '' : <Option value="">请选择</Option>}
                        {option}
                    </Select>,
                )}
            </Form.Item>
        )
    }
}
