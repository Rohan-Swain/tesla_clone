import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <FooterWrap>
            <span>Made By <a href='https://github.com/Rohan-Swain'>Rohan</a> as a Portfolio Project</span>
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