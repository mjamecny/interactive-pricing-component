import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root{
  --color-soft-cyan: hsl(174, 77%, 80%);
  --color-strong-cyan: hsl(174, 86%, 45%);
  --color-light-grayish-red: hsl(14, 92%, 95%);
  --color-light-red: hsl(15, 100%, 70%);
  --color-pale-blue: hsl(226, 100%, 87%);
  --color-white: hsl(0, 0%, 100%);
  --color-very-pale-blue: hsl(230, 100%, 99%);
  --color-light-grayish-blue: hsl(224, 65%, 95%);
  --color-light-grayish-blue-2: hsl(223, 50%, 87%);
  --color-grayish-blue: hsl(225, 20%, 60%);
  --color-dark-desaturated-blue: hsl(227, 35%, 25%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Manrope", sans-serif;
  color: var(--color-grayish-blue);
  line-height: 1.5;
  font-size: 1.5rem;
}

button {
  cursor: pointer;
  font: inherit;
  color: inherit;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`

export default GlobalStyles
