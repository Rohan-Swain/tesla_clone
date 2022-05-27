import React from 'react'
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menuStatus, setMenuStatus] = React.useState(false);

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
                <span onClick={() => setMenuStatus(true)}>Menu</span>
            </RightMenu>
            <SideBarMenu menuStatus={menuStatus}>
                <CloseButtonWrap>
                    <CloseIcon style={{ cursor: "pointer" }} fontSize='large' onClick={() => setMenuStatus(false)} />
                </CloseButtonWrap>
                <div>Existing Inventory</div>
                <div>Used Inventory</div>
                <div>Trade-In</div>
                <div>Test Drive</div>
                <div>Insurance</div>
                <div>Cybertruck</div>
                <div>Roadster</div>
                <div>Semi</div>
                <div>Charging</div>
                <div>Powerwall</div>
                <div>Commercial Energy</div>
                <div>Utilities</div>
                <div>Find Us</div>
                <div>Support</div>
                <div>Investor Relations</div>
                <div id='languageWrap'>
                    <GlobeIcon fontSize="large" />
                    <div>
                        <div>United States</div>
                        <h4>English</h4>
                    </div>
                </div>
            </SideBarMenu>
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

const SideBarMenu = styled.div`
    margin: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 20em;
    transition: .4s ease all;
    transform: ${props => props.menuStatus ? 'translateX(0)' : 'translateX(100%)'};
    padding-left: 30px;

    div {
        list-style: none;
        padding: 10px;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
    }

    #languageWrap {
        display: flex;
        align-items: center;

        div {
            padding: 0;
            font-weight: bold;
        }

        h4 {
            font-weight: normal;
            margin: 0;
        }
    }
`;

const GlobeIcon = styled(LanguageIcon)`
    padding: 0px 10px 0px 0px;
`;

const CloseButtonWrap = styled.div`
    padding: 30px !important;
    text-align: end;
`;