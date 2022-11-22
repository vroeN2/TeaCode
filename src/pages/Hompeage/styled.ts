import styled from "styled-components";
import { Input } from "antd";

const FlexContainer = styled.div`
  display: flex;
`;

export const MainWrapper = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;

export const ContentWrapper = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;
  border-radius: 1rem;
`;

export const Header = styled(FlexContainer)`
  font-size: 2rem;
  height: 1rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  animation: anim-1 20s linear infinite;
  color: #fff;
  padding: 2rem 4rem;
  text-transform: uppercase;

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

export const Searchbar = styled(Input.Search)`
  border-radius: 0%;
  width: 100%;

  &:focus {
    border: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
    animation: anim-1 10s linear infinite;
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

export const EmptyWrapper = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  background: white;
`;
