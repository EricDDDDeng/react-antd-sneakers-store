import { Input, Typography } from 'antd';

const { Search } = Input;
const { Paragraph } = Typography;

const Subscribe = () => {
    return (
        <div style={{ backgroundColor: "#001529", paddingTop: "20px" }}>
            <Paragraph style={{ color: "#a6adb4" }}>Subscribe to receive daily updates about products we want to buy</Paragraph>
            {/* TODO: add subscribe third party library */}
            <Search placeholder="Email" onSearch={value => { console.log(value); }} style={{ maxWidth: "500px" }} enterButton="Subscribe" />
        </div>
    )
}

export default Subscribe
