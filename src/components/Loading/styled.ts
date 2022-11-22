import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #f1f1f1 transparent #f1f1f1 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
