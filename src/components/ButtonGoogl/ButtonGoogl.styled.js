import styled from "styled-components";

export const Wrapper = styled.a`
  @media screen and (min-width: 767.9px) {
    margin-top: 16px;
  }
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0;
  padding: 10px 18px 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  width: 119px;
  height: 40px;
  transition: 250ms ease-out;
  &:focus,
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 10px 25px 3px rgba(110, 121, 140, 1);
  }
`;