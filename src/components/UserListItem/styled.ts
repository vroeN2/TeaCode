import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

export const UserWrapper = styled(FlexDiv)`
  height: 7.5vh;
  width: 100%;
  align-items: center;
  border-top: 1px solid #d3d3d3;
  color: #a4a4a4;

  &:hover {
    color: #1f1f1f;
    background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
    background-size: 600%;
    animation: anim-1 20s linear infinite;
  }
  @keyframes anim-1 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const TabContentWrapper = styled(FlexDiv)`
  margin-left: 0.5rem;
  flex-direction: column;
  transition: 0.15s all ease;
  width: 15%;
`;
