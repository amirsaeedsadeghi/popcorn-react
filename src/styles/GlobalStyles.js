import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6c44d1;
  --primary-dark-color: #5c39b5;
  --primary-light-color: #794cea;
  --white-color: #fff;
  --grey-light-color: #343a40;
  --grey-color: #2b3035;
  --grey-dark-color: #212529;
  --gold-color: #fec346;
  --red-color: #ff5056;
  --red-dark-color: #d54545;
  --text-color: #f2f2f2;
  --line-color: #56606a;
  --radius: 1rem;
  --radius-light: 0.25rem;
  --transition: all 0.4s ease;
  --shadow-light: 0 5px 15px rgba(0, 0, 0, 0.1);
  --shadow-dark: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/*
===========================
General Elements Styles
===========================
*/

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 1.5rem;
  background: var(--grey-dark-color);
  font-size: 0.985rem;
}

img {
  width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  color: var(--white-color);
}

h1 {
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1rem;
}

p {
  color: var(--text-color);
}

/*
===========================
Common Style
===========================
*/

.container {
  max-width: 1170px;
  margin: 0 auto;
}

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: transparent;
  border-radius: var(--radius);
}

.btn-primary {
  color: var(--white-color);
  background: var(--primary-color);
  transition: var(--transition);
  font-size: 1rem;
}

.btn-primary:hover {
  background: var(--primary-light-color);
}

/*
===========================
Media Queries
===========================
*/
@media screen and (min-width: 480px) {
  body {
    font-size: 1rem;
  }
}

@media screen and (min-width: 768px) {

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.978rem;
  }

}

`;

export default GlobalStyle;