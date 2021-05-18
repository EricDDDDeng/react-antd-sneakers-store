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
  };

  //search key
  const [currentSearch, setCurrentSearch] = useState("");
  const onSearch = value => {
    setCurrentSearch(value);
    console.log("current value is: " + value);
  };

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
            <Search size="large" placeholder="Find a product" allowClear onSearch={onSearch} onInput={e => onSearch(e.target.value)} />
            <Search size="large" placeholder="Find a size" allowClear onSearch={onSearch} onInput={e => onSearch(e.target.value)} />
          </Space>

          <ProductGrid database={database} selectedKeys={currentTab.current} currentSearch={currentSearch}></ProductGrid>

        </Content>
        <Footer>L'inconnue © 2021</Footer>
      </Layout>
    </div>
  );
}

export default App;
