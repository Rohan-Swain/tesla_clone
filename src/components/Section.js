import React from 'react'
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Section({ title, description, btn1, btn2, bgImg, arr, color }) {
    return (
        <SectionWraper bgImg={bgImg}>
            <Intro>
                <h1>{title}</h1>
                <span>{description}</span>
            </Intro>
            <Container>
                <ButtonContainer>
                    <CustomButton color={"white"} bgColor={!color ? "rgba(23, 26, 32, 0.8)" : color}>{btn1}</CustomButton>
                    {btn2 && <CustomButton color={"black"} bgColor={"white"}>{btn2}</CustomButton>}
                </ButtonContainer>
                {arr && <ArrowDown fontSize="large" />}
            </Container>
        </SectionWraper>
    );
}

export default Section

const SectionWraper = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url("/images/${props => props.bgImg}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Intro = styled.div`
    padding: 15vh;
    text-align: center;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 1.8em;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const CustomButton = styled.div`
    background-color: ${(props) => props.bgColor};
    height: 45px;
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.color};
    opacity: 0.85;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    border-radius: 100px;
    margin: 8px;
    font-size: 13px;
    @media (max-width: 600px) {
        width: 80vw;
    }
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    animation: animateDown infinite 1.5s;
`;