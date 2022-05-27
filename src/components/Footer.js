import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <FooterWrap>
            <span>Made By <a href=''>Rohan</a> for Practice Porpose</span>
        </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.div`
    width: 100vw;
    text-align: center;
    padding: 25px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.9em;
    letter-spacing: 2px;
    font-weight: normal;
`;