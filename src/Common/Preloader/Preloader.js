import React from 'react';
import preloader from '../../assets/preloaderTransperent.png';
// import styles from './styles.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Img = styled.img`
    position: absolute;
`;

const Preloader = (props) => {
    return <Wrapper>
        <Img src={preloader} alt=''/>
    </Wrapper>
}

export default Preloader;