import React from 'react'
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header() {
    const [menuStatus, setMenuStatus] = React.useState(false);

    return (
        <HeaderWraper>
            <LogoWrap>
                <PageLogo src= './images/logo.svg' />
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
                    <CloseIcon className='closeIcon' fontSize='large' onClick={() => setMenuStatus(false)} />
                </CloseButtonWrap>
                <ContentWrapper>
                    <MobileDiv>Model S</MobileDiv> 
                    <MobileDiv>Model 3</MobileDiv> 
                    <MobileDiv>Model X</MobileDiv> 
                    <MobileDiv>Model Y</MobileDiv> 
                    <MobileDiv>Solar Panel</MobileDiv> 
                    <MobileDiv>Solar Roof</MobileDiv> 
                    <MobileDiv>Accessories</MobileDiv> 
                    <div>Existing Inventory</div>
                    <div>Used Inventory</div>
                    <div>Trade-In</div>
                    <div>Test Drive</div>
                    <div>Insurance</div>
                    <div>Powerwall</div>
                    <div>Commercial Energy</div>
                    <div>Utilities</div>
                    <div>Charging</div>
                    <div>Find Us</div>
                    <div>Support</div>
                    <div>Investor Relations</div>
                    <MobileDiv>Shop</MobileDiv>
                    <MobileDiv>Account</MobileDiv>
                    <MobileDiv className='more'><span>More</span><ArrowForwardIosIcon /></MobileDiv>
                    <div id='languageWrap'>
                        <GlobeIcon className='globeIcon' fontSize="large" />
                        <div>
                            <div>United States</div>
                            <h4>English</h4>
                        </div>
                    </div>
                </ContentWrapper>
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

    @media(max-width: 1200px) {
        height: 7em;
    }
`;

const LogoWrap = styled.div`
    margin-left: 60px;
    flex-grow: 1.8;

    @media(max-width: 1200px) {
        margin: 1.5em 0em 0em 3em;
    }
`;

const PageLogo = styled.img`
    width: 120px;
    height: 18px;
    cursor: pointer;
`;

const RightMenu = styled.div`
    height: 100%;
    margin-right: 60px;

    span {
        margin: 18px;
        font-weight: 600;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        margin: 1em 3em 0em 0em;

        span {
            font-size: 2.5em;
        }

        .hideOnSmallScreen {
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
    overflow-y: hidden;
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

    @media(max-width: 1200px) {
        width: 50em;
        padding-left: 6em;

        div {
            padding: 2em 0em;
        }

        #languageWrap {

            div {
                font-size: 1.5em;
            }

            h4 {
                font-size: 1.2em;
            }

            .globeIcon {
                width: 2em;
                height: 2em;
            }
        }
    }
`;

const GlobeIcon = styled(LanguageIcon)`
    padding: 0px 10px 0px 0px;
`;

const CloseButtonWrap = styled.div`
    right: 0;
    padding: 30px !important;
    text-align: end;

    .closeIcon {
        cursor: pointer;
        width: 1.8em;
        height: 1.8em;
    }

    @media(max-width: 1200px) {
        position: fixed;
        background-color: white;
        width: 100%;
        margin: 2em 3em;
    }
`;

const MobileDiv = styled.div`
    display: none;
    
    @media(max-width: 1200px) {
        display: block;
    }
`;

const ContentWrapper = styled.div`
    margin-top: 10em;
    height: 100%;
    padding-bottom: 50em !important;
`