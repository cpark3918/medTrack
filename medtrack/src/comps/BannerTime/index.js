import React from 'react';
import styled from 'styled-components';



const Banner = styled.div`


max-width: 414px;
height: 80px;
display:flex;
align-items: center;
background-color: #06719D;
color:white;
padding: 0px 30px 0px;
text-align: center;
justify-content: center;
`;


const Text = styled.h1`
color: #FFFFFF;

`;

const BannerTime = ({text}) => {
    return <div>
        <Banner>
            <Text>{text}</Text>
        </Banner>
        </div>
};

BannerTime.defaultProps = {
text:"Today, Jan 6",
};

export default BannerTime;