import { css } from 'lit';

export const uniphoreTagsStyles = css`
  :host {
    width: 100%;
    height: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul > li {
    display: inline-block;
    list-style-type: none;
    margin: 8px 10px 8px 0;
    padding: 0;
  }

  .add-tag-input {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 141px;
    height: 30px;
    box-sizing: border-box;
  }

  .add-tag-input::before {
    display: block;
    background: red;
    width: 20px;
    height: 20px;
  }

  .add-tag-input:focus {
    outline: none;
    border-color: #0288d1;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #0288d1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #0288d1;
  }
  ::placeholder {
    color: #0288d1;
    padding-left: 10px;
  }
`;
