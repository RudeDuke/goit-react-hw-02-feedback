import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  min-width: 250px;
`;

export const OptionBtn = styled.button`
  width: 100px;
  height: 45px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  box-shadow: 0 0 4px #0056b3;
  background-color: ${props => props.color};
  transition: 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #0056b3;
  }

  @media screen and (min-width: 480px) {
    width: 120px;
    padding: 10px 20px;
  }
`;
