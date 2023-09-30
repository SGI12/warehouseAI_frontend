'use client'
import { createGlobalStyle } from "styled-components";
export const ResetCSSGlobalStyle = createGlobalStyle`



/* Задаем box-sizing: border-box, чтобы отступы не влияли на размеры элементов */
*, *::before, *::after {
	box-sizing: border-box;
}



html,
body {
  
  max-width: 1920px;
  max-height: 1080px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  font-size: 16px;
}

body {
  margin: 0;
}

[tabindex='-1']:focus {
  outline: none;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
}

`;
