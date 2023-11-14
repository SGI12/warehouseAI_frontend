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

export const ButtonDisappearing = keyframes`

0% {
    width: 252px;
}
10% {
    width: 222px;
}

20% {
    width: 192px;
}

30% {
    width: 162px;
}
40% {
    width: 132px;
}
50% {
    width: 102px;
}
60% {
    width: 72px;
}
70% {
    width: 42px;
}
80% {
    width: 12px;
}

100% {
    display: none;
}
`