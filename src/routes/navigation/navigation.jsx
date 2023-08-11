import './navigation.styles.scss'
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/cart'>CART</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN-IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
