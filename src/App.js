import { useState } from 'react'
import { Layout, Menu, Input, Space } from 'antd';
import './App.css';
import { createUseStyles } from 'react-jss';
import Grid from './components/Grid';

const { Header, Footer, Content } = Layout;
const { Search } = Input;

//JSS
const useStyles = createUseStyles({
  container: {

  },
});

function App() {
  //JSS
  const classes = useStyles();

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
          <Menu selectedKeys={currentTab} onClick={onTabClick} mode="horizontal" theme="dark" style={{ textAlign: 'center' }}>
            <Menu.Item key='All' >All</Menu.Item>
            <Menu.Item key='Supreme'>Supreme</Menu.Item>
            <Menu.Item key='Sneaker'>Sneaker</Menu.Item>
            <Menu.Item key='Luxury'>Luxury</Menu.Item>
          </Menu>
        </Header>
        <Content>

          <Space direction="horizontal">
            <Search placeholder="Find a model" allowClear onSearch={onSearch} style={{ width: 300 }} />
            <Search placeholder="Find a size" allowClear onSearch={onSearch} style={{ width: 150 }} />
          </Space>

          <Grid></Grid>

        </Content>
        <Footer>©2021, L'inconnue</Footer>
      </Layout>
    </div>
  );
}

export default App;
