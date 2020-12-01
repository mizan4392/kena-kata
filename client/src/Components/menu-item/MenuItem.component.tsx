import React from "react";
import { useHistory } from "react-router-dom";
import { SectionType } from "../directory/Directory.component";
import './menuItem.styles.scss'
interface MenuItemProps extends SectionType {
  // title: string;
}


export default function MenuItem(props: MenuItemProps) {

  const history = useHistory()

  return (
    <div  className={`${props.size} menu-item`} onClick={()=>history.push(`${history.location.pathname}${props.linkUrl}`)}>
      <div style={{backgroundImage:`url(${props.imageUrl})`}} className="background-image"/>
      <div className="content" >
        <h1 className="title">{props.title.toLocaleUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
