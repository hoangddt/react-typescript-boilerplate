import { Flex, Card, List, WhiteSpace, Button } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClipboardCheck,
    faQuestionCircle,
    faTruck,
    faMapMarkerAlt,
    faStore,
    faMoneyCheckAlt
} from '@fortawesome/free-solid-svg-icons'

const OrderInformation = () => {

    const backButtonClicked = () => {
        console.log("Back clicked");
    }

    return (
        <div className="flex-container">
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={backButtonClicked}
                rightContent={<FontAwesomeIcon key="0" icon={faQuestionCircle} />}
            >{"Thông tin đơn hàng"}</NavBar>
            <Card full>
                <Card.Body>
                    <p>Đơn hàng đã hoàn thành</p>
                    <p>Đánh giá sản phẩm trước ngày 09-08-2021 để nhận 200 Shopee xu!</p>
                </Card.Body>
                <FontAwesomeIcon icon={faClipboardCheck} size="6x" color="#339af0" />
            </Card>
            <Card full>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faTruck} color="#339af0" />}
                    extra={<a href="#"><b>XEM</b></a>}
                    onClick={() => {}}
                    >{'Thông tin vận chuyển'}
                </List.Item>
                <p>{"J&T Express - 812102688711"}</p>
                <p>{"Giao hàng thành công"}</p>
                <p>{"21-07-2021 15:52"}</p>
            </Card>
            <Card full>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faMapMarkerAlt} color="#339af0" />}
                    extra={<a href="#"><b>SAO CHÉP</b></a>}
                    onClick={() => {}}
                    >{'Địa chỉ nhận hàng'}
                </List.Item>
                <p>{"Quốc Hoàng"}</p>
                <p>{"(+82) 348 658 156"}</p>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</p>
            </Card>
            <WhiteSpace />
            <Card>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faStore} color="#339af0" />}
                    arrow="horizontal"
                    extra={<a href="#"><b>Xem shop</b></a>}
                    onClick={() => {}}
                    >{'edra_store'}
                </List.Item>
                <Flex>
                    <Flex.Item>
                        <img src="https://via.placeholder.com/150"></img>
                    </Flex.Item>
                    <Flex.Item>
                        <Card>
                            <p>{"Bàn phím cơ Edra EK387 Rainbow Huano S"}</p>
                            <p>{"Brown Switch"}</p>
                            <p>{"x1"}</p>
                            <p>{"605.000"}</p>
                        </Card>
                    </Flex.Item>
                </Flex>
                <Card>
                    <p>{"Thành tiền"}</p>
                    <span>{"đ623.000"}</span>
                    <span>{"Vui lòng thanh toán đ623.000 khi nhận hàng"}</span>
                </Card>
            </Card>
            <Card>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faMoneyCheckAlt} color="#339af0" />}
                    onClick={() => {}}
                    >{'Phương thức thanh toán'}
                </List.Item>
                <p>{"Thanh toán khi nhận hàng"}</p>
            </Card>
            <Button type="warning">{"Đánh giá"}</Button>
        </div>
    )
}

export default OrderInformation;