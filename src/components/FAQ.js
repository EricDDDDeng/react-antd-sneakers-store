import { Space, Steps, Typography } from 'antd';
const { Step } = Steps;

const { Title } = Typography;

const FAQ = () => {
    return (
        <div>
            <Space direction="vertical">
                <Title level={3}>How to sell your products?</Title>
                <Steps direction="vertical" size="small" current={3} >
                    <Step title="Contact us what products you have by Facebook Messenger" />
                    <Step title="Send your products to our shop" />
                    <Step title="Recieve money after we examined your products" />
                </Steps>
            </Space>
        </div>
    )
}

export default FAQ
