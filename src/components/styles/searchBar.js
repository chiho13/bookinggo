import styled from 'styled-components';

const searchBar = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;

    input {
        width: 55%;
        margin-bottom: 5px;
        height:40px;
        font-size:16px;
        padding-left: 20px;
     
    }

    label {
        font-family: 'Open Sans', sans-serif;
        line-height: 16px;
        font-size: 14px;
        padding-bottom: 8px;
    }
`;

export default searchBar;