import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem.component";
import "./directory.styles.scss";
export interface SectionType {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

export default function Directory() {
  const [sections] = useState<Array<SectionType>>([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return <MenuItem {...section} key={section.id}/>;
      })}
    </div>
  );
}
