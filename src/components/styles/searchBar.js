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
        padding: 5px;
        width: 100%;
        background: #fefefe;
        border: 1px solid #a9a9a9;
        box-sizing: border-box;

        ::placeholder {
            font-size: 14px;
            color: #888;
        }
    }

    fieldset {
        display: inherit;
        border: none;
        padding: 0;
        margin: 0;
    }

    .search_container {
        position: relative;
    }

    img {
        position: absolute;
        height: 24px;
        width: auto;
        right: 5px;
        top: 8px;
    }

    label {
        font-family: 'Open Sans', sans-serif;
        line-height: 16px;
        font-size: 14px;
        padding-bottom: 8px;
        color: #444;
    }
`;

export default searchBar;