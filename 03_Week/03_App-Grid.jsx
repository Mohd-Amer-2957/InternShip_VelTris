import { Row, Col } from 'antd';

const LayoutExample = () => (
    <Row gutter={16}>
        <Col span={8}><div style={{ background: '#bae7ff', padding: '10px' }}>Left</div></Col>
        <Col span={8}><div style={{ background: '#91d5ff', padding: '10px' }}>Middle</div></Col>
        <Col span={8}><div style={{ background: '#69c0ff', padding: '10px' }}>Right</div></Col>
    </Row>
);


export default LayoutExample


// The Grid has 24 Coloumns so, the row diveded acoording to given spans/24
// above ex: (8+8+8)=24
// gutter means space b/w the cols (ex: gutter={16}  in 16px)
// We can give space b/w the rows too ex: gutter={[16,25]}   25 for rows