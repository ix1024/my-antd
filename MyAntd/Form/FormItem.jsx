import React, { PureComponent } from 'react';
import { Form, Input as AntdInput } from 'antd';
import PropTypes from 'prop-types';
import styles from './FormItem.less';

class Input extends PureComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    message: PropTypes.string,
    defaultValue: PropTypes.any,
    showLabel: PropTypes.bool,
    hasFeedback: PropTypes.bool,
    allowClear: PropTypes.bool,
    pattern: PropTypes.object,
    transform: PropTypes.func,
    formItemLayout: PropTypes.object,
    rules: PropTypes.array,
    isPlaceLabel: PropTypes.bool,
    append: PropTypes.any,
  };

  static defaultProps = {
    // name: null,
    // form: null,
    label: ' ',
    message: '',
    type: 'text',
    className: null,
    placeholder: '请输入',
    formItemLayout: null,
    defaultValue: undefined,
    transform: item => (item && item.trim ? item.trim() : item),
    pattern: null,
    required: true,
    allowClear: false,
    showLabel: true,
    hasFeedback: true,
    rules: [],
    isPlaceLabel: true,
    append: '',
  };

  render() {
    const {
      children,
      className,
      // required,
      // defaultValue,
      // message = '请输入合法的内容',
      // pattern,
      form,
      // name,
      // type,
      label,
      // allowClear = true,
      formItemLayout,
      hasFeedback,
      style,
      // placeholder,
      showLabel,
      // rules,
      // transform,
      // isPlaceLabel,
      append,
      // setRef,
      // disabled,
      // ...rest
    } = this.props;
    // const msg = isPlaceLabel ? placeholder + label : placeholder;
    if (!form) {
      return <>控件缺少form属性</>;
    }
    // if (!name) {
    //   return <>控件缺少name属性</>;
    // }
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
    );
  }
}
Input.Search = AntdInput.Search;
Input.Group = AntdInput.Group;

export default Input;
