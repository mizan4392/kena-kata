import { Avatar, Button, Card, Space } from "antd";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const { Meta } = Card;
type Props = {
  imageUrl?: string;
  productName: string;
  shortDescription?: string;
  price: number;
};

export default function Product({
  imageUrl,
  productName,
  shortDescription,
  price,
}: Props) {
  return (
    <Card
      style={{ width: 200 }}
      bodyStyle={{ padding: "5px 5px" }}
      cover={<img alt="example" src={imageUrl} />}
      actions={[
        <Button style={{ fontSize: "14px" }} type="primary">
          <Space>
            <AiOutlineShoppingCart size={18} />
            <div>Add to Cart</div>
          </Space>
        </Button>,
      ]}
    >
      <Meta title={productName} description={shortDescription} />
      <Meta
        title={
          <span>
            <strong>Price :</strong>
            {price}
          </span>
        }
      />
    </Card>
  );
}
