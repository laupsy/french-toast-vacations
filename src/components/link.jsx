import React from "react";
import styled from "styled-components";

const StyledAnchorTag = styled.a(({ theme }) => ({
  color: "black",
  textDecoration: "none",
}));

const Link = ({ href, children, newTab }) => (
  <StyledAnchorTag
    href={href}
    target={newTab && "_blank"}
    rel="noopener noreferrer"
  >
    {children}
  </StyledAnchorTag>
);

export default Link;
