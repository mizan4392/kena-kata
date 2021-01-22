import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../util/ROUTES'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

export default function Header() {
    return (
        <div className="header">
            <Link to={ROUTES.ROOT} className="logo-container" >
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to={ROUTES.SHOP} className="option">Shop</Link>
                <Link to={ROUTES.SHOP} className="option">Contact</Link>
            </div>
        </div>
    )
}
