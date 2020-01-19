# my-antd


```
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { Form, Input, Button, FormItem } from 'my-antd';
// import styles from './Welcome.less';

@Form.create()
class App extends React.Component {
  sumbit() {
    const { form } = this.props;
    // return promise object
    return new Promise((resolve, reject) => {
      form.validateFields((err, values) => {
        if (err) {
          reject();
        } else {
          // eslint-disable-next-line no-console
          console.log(values);
          resolve();
        }
      });
    });
  }

  render() {
    const { form } = this.props;
    const formItemLayout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      },
    };
    return (
      <PageHeaderWrapper>
        <Card>
          <Input
            form={form}
            name="name"
            label="Name"
            defaultValue="test"
            placeholder="Enter "
            formItemLayout={formItemLayout}
            hasFeedback={false}
          />
          <Input
            form={form}
            name="remark"
            label="remark"
            placeholder="Enter "
            formItemLayout={formItemLayout}
            required={false}
          />
          <FormItem form={form} formItemLayout={formItemLayout}>
            <Button onClick={() => this.sumbit()}>Submit</Button>
          </FormItem>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default App;

```
