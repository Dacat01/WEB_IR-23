import styled from 'styled-components'; // Підключення Styled Components
//Використана бібліотека Styled Components

//ПОМІНЯТИ LAYOUT.STYLES

// <div> з цими всіма властивостями
// можна стилізувати: p, span і т.д. ...

// Щоб створити стилізований контейнер:


//table-layout: Определяет, как браузер должен вычислять ширину ячеек таблицы, основываясь на ее содержимом.

export const StyledHeader = styled.div`
    padding: 16px 20px 0px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    table-layout: fixed;
    border-spacing: 10px;       //?
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    > span {
        margin: 0 12px;
    }
`