import { Space, Steps, Typography } from 'antd';
const { Step } = Steps;

const { Title } = Typography;

const FAQ = () => {
    return (
        <div>
            <Space direction="vertical" >
                <Title level={3}>How to sell your products?</Title>
                <Steps progressDot direction="vertical" size="small" current={4} style={{ padding: "20px" }}>
                    <Step title="Step 1" description="Contact us what products you have by Facebook Messenger" />
                    <Step title="Step 2" description="Send your products to our shop" />
                    <Step title="Step 3" description="Recieve money after we examined your products" />
                </Steps>
            </Space>
        </div>
    )
}

export default FAQ
