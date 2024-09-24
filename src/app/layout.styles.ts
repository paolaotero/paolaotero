import styled from "styled-components";

export const Container = styled.div`
  padding: 5.6875rem 6.0625rem;
  box-sizing: border-box;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-block-end: 1.25rem;
  border-bottom: 2px ${(props) => props.theme.colors.primary} solid;
`;
