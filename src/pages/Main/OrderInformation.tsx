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
} from '@fortawesome/free-solid-svg-icons';
import "../../styles/OrderInformation.scss";

const OrderInformation = () => {

    const backButtonClicked = () => {
        console.log("Back clicked");
    }

    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={backButtonClicked}
                rightContent={<FontAwesomeIcon key="0" icon={faQuestionCircle} />}
            >{"Thông tin đơn hàng"}</NavBar>
            <Card full className="information-card">
                <Card.Body className="information-body clear-top-card-border">
                    <p>Đơn hàng đã hoàn thành</p>
                    <p>Đánh giá sản phẩm trước ngày 09-08-2021 để nhận 200 Shopee xu!</p>
                </Card.Body>
                <FontAwesomeIcon className="information-icon" icon={faClipboardCheck} size="6x" color="#339af0" />
            </Card>
            <Card className="transportation-info" full>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faTruck} color="#339af0" />}
                    extra={<a href="#"><b className="order-clickable">XEM</b></a>}
                    onClick={() => {}}
                    >{'Thông tin vận chuyển'}
                </List.Item>
                <Card.Body className="transporation-agent clear-top-card-border">
                    <p>{"J&T Express - 812102688711"}</p>
                    <p className="success-message">{"Giao hàng thành công"}</p>
                    <p>{"21-07-2021 15:52"}</p>
                </Card.Body>
            </Card>
            <Card className="adddress-info" full>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faMapMarkerAlt} color="#339af0" />}
                    extra={<a className="order-clickable" href="#"><b>SAO CHÉP</b></a>}
                    onClick={() => {}}
                    >{'Địa chỉ nhận hàng'}
                </List.Item>
                <Card.Body className="transporation-agent clear-top-card-border">
                    <p>{"Quốc Hoàng"}</p>
                    <p>{"(+82) 348 658 156"}</p>
                    <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</p>
                </Card.Body>
            </Card>
            <WhiteSpace />
            <Card>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faStore} color="#339af0" />}
                    arrow="horizontal"
                    extra={<a href="#" className="order-clickable" ><b>Xem shop</b></a>}
                    onClick={() => {}}
                    >{'edra_store'}
                </List.Item>
                <Card className="item-summary">
                    <Card.Body className="item-summary-img clear-top-card-border">
                        <img src="https://via.placeholder.com/150"></img>
                    </Card.Body>
                    <Card.Body className="item-summary-text clear-top-card-border">
                        <p>{"Bàn phím cơ Edra EK387 Rainbow Huano S"}</p>
                        <p>{"Brown Switch"}</p>
                        <p>{"x1"}</p>
                        <p>{"605.000"}</p>
                    </Card.Body>
                </Card>
                <Card.Body className="clear-top-card-border">
                    <p>{"Thành tiền"}</p>
                    <span>{"đ623.000"}</span>
                    <span>{"Vui lòng thanh toán đ623.000 khi nhận hàng"}</span>
                </Card.Body>
            </Card>
            <WhiteSpace></WhiteSpace>
            <Card>
                <List.Item
                    thumb={<FontAwesomeIcon key="0" icon={faMoneyCheckAlt} color="#339af0" />}
                    onClick={() => {}}
                    >{'Phương thức thanh toán'}
                </List.Item>
                <Card.Body className="clear-top-card-border">
                    <p>{"Thanh toán khi nhận hàng"}</p>
                </Card.Body>
            </Card>
            <Card full>
                <Card.Body className="clear-top-card-border">
                    <Button type="warning">{"Đánh giá"}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderInformation;