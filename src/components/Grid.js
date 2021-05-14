import { Row, Col, Image } from 'antd';
import YeezyImage from "../Yeezy.png"

const Grid = () => {
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>                <Col span={6} >
                    <Image height={250} src={YeezyImage} style={{ objectFit: 'contain' }} />
                </Col>
            </Row>

        </div>
    )
}

export default Grid
