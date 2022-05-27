import React from 'react'
import styled from 'styled-components';

function Header() {

    return (
        <HeaderWraper>
            <LogoWrap>
                <PageLogo src="/images/logo.svg" />
            </LogoWrap>
            <MiddleMenu>
                <span>Model S</span>
                <span>Model 3</span>
                <span>Model X</span>
                <span>Model Y</span>
                <span>Solar Roof</span>
                <span>Solar Panels</span>
            </MiddleMenu>
            <RightMenu>
                <span className="hideOnSmallScreen">Shop</span>
                <span className="hideOnSmallScreen">Account</span>
                <span>Menu</span>
            </RightMenu>
        </HeaderWraper>
    );
}

export default Header


const HeaderWraper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    z-index: 1;
`;

const LogoWrap = styled.div`
    margin-left: 60px;
    flex-grow: 1.8;
`;

const PageLogo = styled.img`
    width: 120px;
    height: 18px;
    cursor: pointer;
`;

const RightMenu = styled.div`
    margin-right: 60px;

    span {
        margin: 18px;
        font-weight: 600;
        cursor: pointer;
    }

    .hideOnSmallScreen {
        @media (max-width: 1200px) {
            display: none;
        }
    }
`;

const MiddleMenu = styled.div`
    flex-grow: 1;
    span {
        margin: 18px;
        font-weight: 600;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;