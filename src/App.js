import { useState } from 'react'
import { Layout, Menu, Input, Space, Row, Col, Divider } from 'antd';
import './App.css';
import "antd/dist/antd.css";
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import Subscribe from './components/Subscribe';
import database from './assets/database.json';

const { Header, Footer, Content } = Layout;
const { Search } = Input;

const horizontalGap = { xs: 2, sm: 4, md: 8, lg: 8 };
const vertialGap = { xs: 2, sm: 4, md: 8, lg: 8 }


function App() {

  //menu tab state
  const [currentTab, setCurrentTab] = useState({ current: 'All' });
  const onTabClick = e => {
    setCurrentTab({ current: e.key });
  };

  //search type
  const [searchType, setSearchType] = useState("name");

  //search key
  const [searchKeyword, setSearchKeyword] = useState("");
  const onSearch = (value, event) => {
    setSearchKeyword(value);
    setSearchType(event.target.placeholder);
  };

  return (
    <div className="App">
      <Layout>
        <Header style={{ width: '100%' }}>
          <div className="logo" style={{ backgroundImage: "url(./images/logo.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
          <Menu selectedKeys={currentTab.current} onClick={onTabClick} mode="horizontal" theme="dark" style={{ overflow: "auto" }}>
            <Menu.Item key='All' >All</Menu.Item>
            <Menu.Item key='Supreme'>Supreme</Menu.Item>
            <Menu.Item key='Sneaker'>Sneaker</Menu.Item>
            <Menu.Item key='Luxury'>Luxury</Menu.Item>
          </Menu>
        </Header>
        <Content>

          <Space direction="horizontal" style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Row gutter={[horizontalGap, vertialGap]} >
              <Col key="search_name" xs={24} sm={12} md={8} lg={8} >
                <Search size="large" placeholder="Search by name" allowClear onSearch={onSearch} onInput={event => onSearch(event.target.value, event)} />
              </Col>
              <Col key="search_item_no" xs={24} sm={12} md={8} lg={8} >
                <Search size="large" placeholder="Search by Item No." allowClear onSearch={onSearch} onInput={event => onSearch(event.target.value, event)} />
              </Col>
              <Col key="search_size" xs={24} sm={12} md={8} lg={8} >
                <Search size="large" placeholder="Search by size" allowClear onSearch={onSearch} onInput={event => onSearch(event.target.value, event)} />
              </Col>
            </Row>
          </Space>

          <ProductGrid database={database} currentTab={currentTab.current} searchKeyword={searchKeyword} searchType={searchType}></ProductGrid>
          <Divider />
          <FAQ></FAQ>
          <Divider />
          <Subscribe></Subscribe>

        </Content>
        <Footer>L'inconnue © 2021</Footer>
      </Layout>
    </div>
  );
}

export default App;