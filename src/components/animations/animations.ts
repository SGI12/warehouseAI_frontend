import { keyframes } from "styled-components";

export const spinningLoadingRing = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`

export const rotate360 = keyframes`

from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const horizontalShaking = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`

export const slideInUp = keyframes`

  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`

export const slideOutDown = keyframes`

  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 150%, 0);
    visibility: none;
  }

`

export const SlideInDown = keyframes`

  from {
    opacity: 0;
    transform: translateY(-50%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const SlideOutUp = keyframes`

  from {
    opacity: 1;
    transform: translateY(0%);
  }

  to {
    opacity: 0;
    transform: translateY(-50%);
  }

`