import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--colorSecondary);
    border-radius: 10px;
    margin-top: 50px;
    padding: 30px 50px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    text-align: center;
    color: var(--colorPrimary);
    font-size: 1.5rem;
    p {
        margin-top: 10px;
    }
`
export const UploadContainer = styled.div`
    display: grid;
    margin-top: 15px;
    border: 5px dashed var(--colorPrimary);
    padding: 38px 50px;
    place-items: center;
    border-radius: 10px;
    background: var(--colorTertiary);
    p {
        color: var(--background);
        margin-bottom: 10px;
    } 
    .warning {
        color: red;
        font-weight: bold;
    }
`

export const UploadDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    label {
        &:hover {
            cursor: pointer;
        }
    }
    input {
        display: none;
    }
`
export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImageThumbnail = styled.div`

    .userImage1 {
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin: 10px;
    }

    .userImage2 {
        width: 160px;
        height: 120px;
        border-radius: 10px;
        margin: 10px;
    }

    .userImage3 {
        width: 400px;
        height: 300px;
        border-radius: 10px;
        margin: 10px;
    } 
`
export const Btn = styled.button`
    
    background: var(--colorPrimary);
    color: var(--background);
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`
