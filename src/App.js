import { useState } from 'react'
import { Layout, Menu, Input, Space } from 'antd';
import './App.css';
import "antd/dist/antd.css";
import ProductGrid from './components/ProductGrid';
import database from './assets/database.json';

const { Header, Footer, Content } = Layout;
const { Search } = Input;


function App() {

  //menu tab state
  const [currentTab, setCurrentTab] = useState({ current: 'All' });
  const onTabClick = e => {
    setCurrentTab({ current: e.key });
    alert("Current menu tab state is: " + e.key);
  };

  const onSearch = value => alert(value);

  return (
    <div className="App">
      <Layout>
        <Header style={{ width: '100%' }}>
          <Menu selectedKeys={currentTab.current} onClick={onTabClick} mode="horizontal" theme="dark" style={{ textAlign: 'center' }}>
            <Menu.Item key='All' >All</Menu.Item>
            <Menu.Item key='Supreme'>Supreme</Menu.Item>
            <Menu.Item key='Sneaker'>Sneaker</Menu.Item>
            <Menu.Item key='Luxury'>Luxury</Menu.Item>
          </Menu>
        </Header>
        <Content>

          <Space direction="horizontal">
            <Search placeholder="Find a model" allowClear onSearch={onSearch} />
            <Search placeholder="Find a size" allowClear onSearch={onSearch} />
          </Space>

          <ProductGrid database={database}></ProductGrid>

        </Content>
        <Footer>L'inconnue © 2021</Footer>
      </Layout>
    </div>
  );
}

export default App;
