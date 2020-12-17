import styled from 'styled-components';
import { Button } from 'antd';


export const FilterWrapper = styled.div`
    padding: 0 200px 10px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;


export const StyledSelect =styled.select`

  font-size: 20px;
  font-family: sans-serif;
  font-weight: 700;

    width: 15%; 


  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
`;


export const StyledButton = styled(Button)`
padding: 5px 25px;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50; /* Green */
`;


export const SectionWrapper = styled.div`
    display: flex;
    background-color: #DE6520;
    height: 100%;
    width:100%;
    justify-content: space-between;
    padding: 0 200px 10px 200px;
`;

export const StyledText = styled.div`
    padding-top: 70px;
    color: white;
    font-size: 16px;
    h1 {
        font-size: 40px;
        color: white;
    }
`;






export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`;


export const VerticalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border-top: 1px solid #EFEFF4;
`;