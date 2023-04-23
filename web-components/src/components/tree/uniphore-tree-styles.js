import { css } from 'lit';

export const uniphoreTreeStyles = css`
  ul {
    list-style-type: none;
    padding: 0px 10px 0px 20px; /*0 20px 0 20px;*/
  }

  .uniphore-tree-child-row {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .uniphore-tree-child-node-label-arrow,
  .uniphore-tree-child-node-label-text {
    display: inline-block;
    width: 100%;
    height: 35px;
  }

  .uniphore-tree-child-node .uniphore-tree-parent-node {
    display: none;
  }

  .open {
    display: block;
  }

  .extend-sub-tree {
    display: block !important;
  }

  .uniphore-tree-child-node-label-arrow {
    height: 35px;
    width: 12px;
    padding: 0 10px;
    position: relative;
    top: 0.3rem;
  }

  .arrow {
    border: solid #798f9c;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .selected {
    font-weight: bold;
    background-color: rgba(2, 136, 209, 0.1);
  }

  .lazy-loading-loader {
    display: none;
  }

  .lazy-loading-display {
    display: flex;
    padding-left: 6px;
  }
`;
