import { Input, Typography } from 'antd';

const { Search } = Input;
const { Paragraph } = Typography;

const Subscribe = () => {
    return (
        <div>
            <Paragraph>Subscribe to receive daily updates about products we want to buy</Paragraph>
            {/* TODO: add subscribe third party library */}
            <Search placeholder="Email" onSearch={value => { console.log(value); }} style={{ maxWidth: "500px" }} enterButton="Subscribe" />
        </div>
    )
}

export default Subscribe
