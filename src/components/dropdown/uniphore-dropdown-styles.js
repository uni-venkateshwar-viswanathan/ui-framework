import { css } from 'lit';

export const uniphoreDropdownStyles = css`
  .uniphore-dropdown {
    font-family: OpenSans-Regular, Arial, sans-serif;
    font-size: 14px;
    width: var(--uniphore-dropdown-width);
    height: var(--uniphore-dropdown-height);
    border-radius: 4px;
    border-color: #dcdfe6;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    background-repeat: no-repeat;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    appearance: none !important;
    padding-right: 2rem !important;
    background-position: calc(100% - 0.75rem) center !important;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTIgMS45OTk4NEwxMC41OSAwLjU4OTg0NEw2IDUuMTY5ODRMMS40MSAwLjU4OTg0M0wtNi4xNjMzMWUtMDggMS45OTk4NEw2IDcuOTk5ODRMMTIgMS45OTk4NFoiIGZpbGw9IiNCMEJFQzUiLz4NCjwvc3ZnPg0K);
    outline: none;
    cursor: pointer;
  }

  .uniphore-dropdown.no-options-placeholder {
    color: #c0c4cc;
  }
`;
