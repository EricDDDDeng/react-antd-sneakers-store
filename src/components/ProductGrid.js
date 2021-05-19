import { Row, Col, Image, Card } from 'antd';

const { Meta } = Card;


const horizontalGap = { xs: 2, sm: 4, md: 8, lg: 8 };
const vertialGap = { xs: 2, sm: 4, md: 8, lg: 8 }
const imageSize = "250px"

const ProductGrid = ({ database, currentTab, searchKeyword, searchType }) => {

    const renderProductGrid = () => {
        if (searchKeyword === "") {
            // console.log("current search is empty, return default grid");
            return (
                <div>
                    <Row gutter={[horizontalGap, vertialGap]} >
                        {database.sneakers.map((element, index) => {
                            return (
                                (currentTab === 'All' || currentTab === element.category) &&
                                <Col key={element.name} xs={24} sm={12} md={6} lg={4} >
                                    <Card
                                        size="small"
                                        hoverable
                                        cover={<Image src={element.url} style={{ objectFit: "scale-down", minHeight: imageSize, maxHeight: imageSize }} />}
                                    >
                                        {<Meta title={element.name} description={element.description} />}
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>);
        } else {
            // console.log("current search is: " + searchKeyword + ", return grid with matching name");


            return (
                <div>
                    <Row gutter={[horizontalGap, vertialGap]} >
                        {database.sneakers.map((element, index) => {
                            let toCompare;
                            switch (searchType) {
                                case "Search by name":
                                    toCompare = element.name;
                                    break;
                                case "Search by Item No.":
                                    toCompare = element.itemNo;

                                    break;
                                case "Search by size":
                                    toCompare = element.description;
                                    break;
                                default:
                            }

                            // console.log("current search type is: " + searchType);
                            // console.log("search keyword is: " + searchKeyword);

                            return (
                                (toCompare.toLowerCase().includes(searchKeyword)) &&
                                <Col key={element.name} xs={24} sm={12} md={6} lg={4} >
                                    <Card
                                        size="small"
                                        hoverable
                                        cover={<Image src={element.url} style={{ objectFit: "scale-down", minHeight: imageSize, maxHeight: imageSize }} />}
                                    >
                                        {<Meta title={element.name} description={element.description} />}
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                </div>);

        }
    }

    return renderProductGrid();
}




export default ProductGrid
