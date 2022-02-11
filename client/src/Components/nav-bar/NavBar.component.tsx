import React from "react";
import "./NavBar.styles.scss";
import { Button, Col, Layout, Row, Typography, Input } from "antd";
import { AiFillNotification, AiFillShop, AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
const { Header } = Layout;
const { Search } = Input


export default function NavBar() {
    return (
        <Header >
            <Row>
                <Col style={{
                    width: "20%"
                }} >
                    <div className="brand-container" >
                        <Button className="hamburger-icon-btn" >
                            <AiOutlineMenu className="icon" />
                        </Button>
                        <Typography className="brand-logo" >
                            Kena-Kata
                        </Typography>
                    </div>



                </Col >
                <Col className="header-search" style={{
                    width: "55%"
                }}

                >
                    <Search />
                </Col>
                <Col className="header-cart" style={{
                    width: "25%"
                }} >
                    <AiFillNotification className="icon hide-sm-icon" />
                    <AiFillShop className="icon hide hide-sm-icon" />
                    <AiOutlineLogin className="icon hide hide-sm-icon" />
                    <BiDotsVerticalRounded className="icon show-lg-icon" />
                </Col>
            </Row>

        </Header>

    );
}
