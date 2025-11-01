import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const PageLayout = () => (
  <Layout>
    <Header style={{ color: 'white' }}>My Header</Header>
    <Content style={{ padding: '20px', textAlign:'center', height:'500px' ,background:'#a597b4ff'}}>Main Content</Content>
    <Footer style={{ textAlign: 'center', background:'#5f8583ff' }}>This is Footer</Footer>
  </Layout>
);

export default PageLayout



// const { Header, Content, Footer } = Layout;
//is a JavaScript feature called 'object destructuring' —
//  and here it’s being used to extract specific components from the Layout object that Ant Design provides.

//Layout isn’t just one component — it’s actually an object that contains several subcomponents inside it:

//const Header = Layout.Header;
// const Content = Layout.Content;
// const Footer = Layout.Footer;

// instead of this we use shorter form used above in the code
