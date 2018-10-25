import styled from 'styled-components';

const Container = styled.button.attrs({
  type: props => props.type || 'button',
})`
  background: #6dc37d;
  border-radius: 2px;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
`;

export default Container;
