import React from "react";
import { SectionType } from "../directory/Directory.component";
import './menuItem.styles.scss'
interface MenuItemProps extends SectionType {
  // title: string;
}


export default function MenuItem(props: MenuItemProps) {

  return (
    <div  className={`${props.size} menu-item`} >
      <div style={{backgroundImage:`url(${props.imageUrl})`}} className="background-image"/>
      <div className="content" >
        <h1 className="title">{props.title.toLocaleUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
