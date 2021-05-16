import { Row, Col, Image, Card } from 'antd';

const { Meta } = Card;


const horizontalGap = { xs: 2, sm: 4, md: 8, lg: 8 };
const vertialGap = { xs: 2, sm: 4, md: 8, lg: 8 }

const ProductGrid = ({ database }) => {

    return (
        <div>

            <Row gutter={[horizontalGap, vertialGap]} >
                {database.sneakers.map((element, index) => {
                    return (
                        <Col key={element.name} xs={24} sm={12} md={6} lg={4} >
                            <Card
                                size="small"
                                hoverable
                                cover={<Image src={element.url} style={{ objectFit: 'contain' }} />}
                            >
                                {<Meta title={element.title} description={element.description} />}
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </div>
    )
}




export default ProductGrid
