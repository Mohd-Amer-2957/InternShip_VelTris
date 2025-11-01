import { Form, Input, Button } from 'antd';


const BasicForm = () => {


  const onFinish_Pass = (values) => {
    console.log('Success:', values);
    localStorage.setItem("form_data", JSON.stringify(values))
  };


  const onFinish_Fail = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      <center>
        <div id='AntDForm'><h1>Ant D Forms</h1></div>
        <Form
          layout="vertical"
          onFinish={onFinish_Pass}
          onFinishFailed={onFinish_Fail}
          style={{ width: '25%' }}
          autoComplete='on'
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter username' }, { max: 10, min: 4 }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter user password!' }, { min: 5, max: 10 }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType='submit' block>
              Log In
            </Button>
          </Form.Item>

        </Form>
      </center>
    </div>
  );
};

export default BasicForm