import { css } from 'lit';

export const uniphoreSelectStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .uniphore-select {
    position: relative;
    display: flex;
    align-items: center;
  }

  .uniphore-select-toggle {
    background-color: var(--toggle-background-color, white);
    border: var(--toggle-border-color, none);
    color: var(--toggle-color, black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
    border-radius: 2px;
    cursor: pointer;
    overflow: hidden;
  }

  .uniphore-multiple-select .uniphore-select-toggle {
    align-items: flex-start;
  }

  .uniphore-select-toggle-item {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-grow: 1;
    overflow: hidden;
  }

  .uniphore-select-toggle-items {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  .uniphore-select-toggle-items-tag {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid;
    padding: 5px;
    max-width: 100px;
  }

  .uniphore-select-popover-list-option-label,
  .uniphore-select-toggle-items-tag-label,
  .uniphore-select-toggle-item-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .uniphore-select-toggle-items-tag-remove {
    opacity: 0.5;
    cursor: pointer;
  }

  .uniphore-select-toggle-items-tag-remove:hover {
    opacity: 1;
  }

  .uniphore-select-toggle.is-opened {
    border-radius: 2px 2px 0px 0px;
  }

  .uniphore-select-popover-list-option-marks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-left: auto;
  }

  .option-color {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
  }

  .uniphore-select-popover .uniphore-select-popover-list-option,
  .uniphore-select-toggle {
    padding: 6px 12px;
    cursor: pointer;
    user-select: none;
  }

  .uniphore-select-popover {
    border: var(--pop-over-border-color, none);
    background-color: var(--pop-over-background-color, white);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    border-radius: 0px 0px 2px 2px;
    border-top: none;
  }

  .uniphore-select-popover-list {
    display: flex;
    flex-direction: column;
    max-height: var(--pop-over-max-height);
    overflow: auto;
  }

  .uniphore-select-popover-list-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: var(--pop-over-color, black);
  }

  .uniphore-select-popover-list-empty
    .uniphore-select-popover-list-empty-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .uniphore-select-popover-list-empty
    .uniphore-select-popover-list-empty-label
    .uniphore-select-popover-list-empty-label-sv {
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .uniphore-select-popover-search {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px 0 10px;
    border-bottom: var(--pop-over-border-color, none);
  }

  .uniphore-select-popover-search input {
    display: flex;
    flex-grow: 1;
    height: 30px;
    border: none;
    outline: none;
    color: var(--pop-over-color, black);
  }

  .uniphore-select-popover-search input::placeholder {
    color: var(--pop-over-color, black);
    opacity: 0.5;
  }

  .uniphore-select-popover-search input:-ms-input-placeholder {
    color: var(--pop-over-color, black);
    opacity: 0.5;
  }

  .uniphore-select-popover-search input::-ms-input-placeholder {
    color: var(--pop-over-color, black);
    opacity: 0.5;
  }

  .uniphore-select-popover-list-option {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--pop-over-color, black);
  }

  .uniphore-select-popover .uniphore-select-popover-list-option:hover,
  .uniphore-select-popover .uniphore-select-popover-list-option.selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
