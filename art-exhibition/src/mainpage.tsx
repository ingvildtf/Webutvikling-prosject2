import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
color: blue;
background-color: red;
padding:10px 20px;

`

const Wrapper = styled.div`
padding: 200px;
`


function Mainpage() {
    return (
        <Wrapper className="mainpage">
            <p>heihei</p>
            <Button>knapp</Button>
        </Wrapper>

    )
}

export default Mainpage;