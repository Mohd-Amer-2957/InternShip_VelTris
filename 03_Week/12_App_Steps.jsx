import { Steps } from 'antd';
const { Step } = Steps;

const MySteps = () => (
  <Steps current={0}>   
    <Step title="Login" />
    <Step title="Verification" />
    <Step title="Complete" />
  </Steps>
);

export default MySteps