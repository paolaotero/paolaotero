import styled from "styled-components";
import Link from "next/link";

export const Component = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
`;
