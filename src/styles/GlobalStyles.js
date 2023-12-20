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

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-light-grayish-blue-2);
    -webkit-transition: 0.4s;
    transition: background-color 0.4s;
  }

  .slider:hover {
    background-color: var(--color-soft-cyan);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    right: 4px;
    bottom: 4px;
    background-color: var(--color-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--color-light-grayish-blue-2);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(-16px);
    -ms-transform: translateX(-16px);
    transform: translateX(-16px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export default GlobalStyles
