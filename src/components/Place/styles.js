import styled from "styled-components";

export const Header = styled.span`
  font-family: "Nunito", sans-serif;
  display: flex;
  font-size: 16;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  font-family: "Nunito", sans-serif;
  ul {
    li {
      display: grid;
      border-top: 1px solid;
      img {
        width: 640px;
        height: 360px;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 500px;
  height: 500px;
`;

export const Cover = styled.img`
  width: 640px;
  height: 360px;
`;

export const Ambiente = styled.img`
  width: 640px;
  height: 360px;
`;
