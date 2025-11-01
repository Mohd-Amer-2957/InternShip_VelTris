import { Button, Space, DatePicker, Input } from 'antd';
import { UserOutlined} from '@ant-design/icons';

const App = () => {
  return (
    <div>
       <center>
         <div><h1>First AntDesign</h1></div>
        <div className='section1'><DatePicker/></div>
        <div className='section2'>
            <Button type='primary' >First Button</Button>
            <Button type='link' href='https://www.veltris.com'>
                Veltris link Button
            </Button>
            <Button type='dashed'>Click Here</Button>
            <Space><Button type='default' style={{backgroundColor:'#ccd8e1ff'}}>Click</Button>
            <Button type='text' >Click me</Button></Space>
        </div>


        <div className='section3'>
            <h3>input Buttons</h3>
            <Input placeholder='Enter Name' prefix={<UserOutlined/>}>
            </Input>
            <br /><br />
            <Input.Search placeholder='This is Search Bar' allowClear></Input.Search>
        </div>
       </center>
        
    </div>
  )
}


export default App