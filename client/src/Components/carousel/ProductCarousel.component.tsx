import { Carousel } from "antd";
import React, { ReactNode } from "react";

type Props = {
  carasolItem?: ReactNode[];
};

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function ProductCarousel({ carasolItem }: Props) {
  return (
    <Carousel autoplay>
      {carasolItem?.map((itm) => {
        return <div>{itm}</div>;
      })}
    </Carousel>
  );
}
