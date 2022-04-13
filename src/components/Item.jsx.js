import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';


const Item = ({ title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined />Details
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;