import { css } from 'lit';

export const uniphoreAutocompleteStyles = css`
  :host {
    --input-search-padding-left: 32px;
    --uniphore-autocomplete-padding: 24px;
    --uniphore-autocomplete-width: 304px;
  }

  div.uniphore-autocomplete-trigger {
    padding: 5px 0;
  }

  ul {
    position: absolute;
    z-index: 1000;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: var(--uniphore-autocomplete-width);
    background-color: var(--uniphore-autocomplete-background-color, #ffffff);
    border: var(
      --uniphore-autocomplete-border,
      1px solid var(--border-grey-color)
    );
    border-radius: var(--uniphore-autocomplete-border-radius, 2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  li {
    border-bottom: 1px solid rgba(196, 196, 196, 0.3);
  }

  li:last-child {
    border-bottom: none;
  }

  .uniphore-autocomplete-results-hidden {
    visibility: hidden;
  }

  .uniphore-autocomplete-results {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: var(--uniphore-autocomplete-max-height, 385px);
  }

  .uniphore-autocomplete-results::-webkit-scrollbar {
    width: 4px;
  }

  .uniphore-autocomplete-results::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(196, 196, 196, 0.4);
  }

  .uniphore-autocomplete-search {
    position: relative;
    padding: 0 var(--uniphore-autocomplete-padding);
    border-bottom: 1px solid rgba(196, 196, 196, 0.3);
  }

  .input-search {
    outline: none;
    border: none;
    width: calc(100% - var(--input-search-padding-left));
    font-size: var(--uniphore-autocomplete-input-search-font-size, 14px);
    padding: var(--uniphore-autocomplete-input-search-padding, 19px 0 17px 0);
    padding-left: var(--input-search-padding-left);
  }

  .input-search::placeholder {
    color: #aab3b7;
  }

  .input-search-icon {
    position: absolute;
    left: var(--uniphore-autocomplete-padding);
    top: 15px;
  }

  .uniphore-autocomplete-hide {
    display: none;
  }

  .uniphore-autocomplete-arrow:before {
    content: '';
    position: absolute;
    margin: 0px auto;
    top: -3.35px;
    width: 5px;
    height: 5px;
    border: 1px solid var(--border-grey-color);
    background-color: white;
    border-bottom-color: transparent;
    border-right-color: transparent;
    transform: rotate(45deg);
  }

  .uniphore-autocomplete-arrow-left:before {
    left: var(--uniphore-autocomplete-arrow-left, 0);
  }

  .uniphore-autocomplete-arrow-top:before {
    top: var(--uniphore-autocomplete-arrow-top, 0);
    border: 1px solid var(--border-grey-color);
    border-top-color: transparent;
    border-left-color: transparent;
    z-index: -1;
  }

  .no-results-option {
    display: flex;
    justify-content: center;
    pointer-events: none;
  }
`;
