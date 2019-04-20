import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 72px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 220px;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px;
  background-repeat: no-repeat;
`;
