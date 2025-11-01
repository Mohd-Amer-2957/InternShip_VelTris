import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;


const App_Typography = () => {
    return (
        <div><Title level={1}>Welcome to AntD</Title>
            <Paragraph>This is a simple Ant Design page layout.</Paragraph>
            <Text type="success">Success text</Text><br />
            <Text type='warning'> Warning... text</Text>
            <Title code>This is Code Style</Title>
            <Title disabled>This is Disabled text</Title>
            <Text code copyable>Copy this Text</Text>
        </div>
    )
}

export default App_Typography


// Ant-d use Typography instead of CSS styling
// Typography props are ready-made text styling options.
// They let you make your text bold, colored, underlined,
// highlighted, editable, or even copyable — without needing CSS.