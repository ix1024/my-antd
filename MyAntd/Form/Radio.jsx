import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';

export default class App extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    defalutValue: PropTypes.any,
    showLabel: PropTypes.bool,
    hasFeedback: PropTypes.bool,
    options: PropTypes.array,
    formItemLayout: PropTypes.object,
    rules: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    required: true,
    label: '',
    formItemLayout: {},
    hasFeedback: true,
    defalutValue: undefined,
    className: '',
    style: {},
    options: [],
    placeholder: '请选择',
    showLabel: true,
    rules: [],
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { value: props.defalutValue };
  }

  componentDidMount() {
    const { defalutValue, form, name } = this.props;
    const obj = {};
    if (undefined !== defalutValue && name) {
      // obj[name] = defalutValue.toString();
      obj[name] = defalutValue;
      form.setFieldsValue(obj);
    }

    this.setState({ value: defalutValue });
  }

  onChange = e => {
    const { onChange } = this.props;
    const { value } = e.target;
    this.setState({
      value,
    });
    const obj = {};
    obj[this.props.name] = value;
    this.props.form.setFieldsValue(obj);
    onChange(value);
  };

  render() {
    const {
      required,
      form,
      name,
      label,
      formItemLayout,
      hasFeedback,
      className,
      style,
      options,
      placeholder,
      showLabel,
      rules,
      defalutValue,
      type = 'button',
    } = this.props;

    // eslint-disable-next-line no-confusing-arrow
    const option = options.map(d =>
      type !== 'button' ? (
        <>
          <Radio key={d.value} value={d.value}>
            {d.text}
          </Radio>
        </>
      ) : (
        <>
          <Radio.Button key={d.value} value={d.value}>
            {d.text}
          </Radio.Button>
        </>
      ),
    );
    if (!form) {
      return <>控件缺少form属性</>;
    }
    if (!name) {
      return <>控件缺少name属性</>;
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
          initialValue: defalutValue,
          rules: rules.length ? rules : [{ required, message: `${placeholder}${label}` }],
        })(
          <>
            <Radio.Group value={this.state.value} onChange={this.onChange}>
              {option}
            </Radio.Group>
            <span style={{ width: '30px', display: 'inline-block' }}></span>
          </>,
        )}
      </Form.Item>
    );
  }
}
