import { css } from 'lit';

export const uniphoreTagStyles = css`
  .uniphore-tag {
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 20px;
    max-width: 180px;
    width: fit-content;
    height: 30px;
    font-size: 13px;
    background-color: var(
      --uniphore-tag-background-color,
      rgba(2, 136, 209, 0.15)
    );
    border: var(--uniphore-tag-border, 1px solid #dcdfe6);
    border-radius: 4px;
    color: var(--uniphore-tag-color, #606266);
    padding-left: 6px;
    padding-right: var(--uniphore-tag-padding-right, 6px);
    box-sizing: border-box;
  }

  button[id^='remove-tag-'] {
    position: relative;
    top: 8px;
    right: 6px;
    height: 12px;
    width: 12px;
    margin-left: 15px;
  }

  button {
    width: 12px;
    height: 12px;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDAwMzMgMC4xNjY5OTJDMi43NzQ0OSAwLjE2Njk5MiAwLjE2Njk5MiAyLjc3NDQ5IDAuMTY2OTkyIDYuMDAwMzNDMC4xNjY5OTIgOS4yMjYxNiAyLjc3NDQ5IDExLjgzMzcgNi4wMDAzMyAxMS44MzM3QzkuMjI2MTYgMTEuODMzNyAxMS44MzM3IDkuMjI2MTYgMTEuODMzNyA2LjAwMDMzQzExLjgzMzcgMi43NzQ0OSA5LjIyNjE2IDAuMTY2OTkyIDYuMDAwMzMgMC4xNjY5OTJaTTguNTA4NjYgOC41MDg2NkM4LjI4MTE2IDguNzM2MTYgNy45MTM2NiA4LjczNjE2IDcuNjg2MTYgOC41MDg2Nkw2LjAwMDMzIDYuODIyODNMNC4zMTQ0OSA4LjUwODY2QzQuMDg2OTkgOC43MzYxNiAzLjcxOTQ5IDguNzM2MTYgMy40OTE5OSA4LjUwODY2QzMuMjY0NDkgOC4yODExNiAzLjI2NDQ5IDcuOTEzNjYgMy40OTE5OSA3LjY4NjE2TDUuMTc3ODMgNi4wMDAzM0wzLjQ5MTk5IDQuMzE0NDlDMy4yNjQ0OSA0LjA4Njk5IDMuMjY0NDkgMy43MTk0OSAzLjQ5MTk5IDMuNDkxOTlDMy43MTk0OSAzLjI2NDQ5IDQuMDg2OTkgMy4yNjQ0OSA0LjMxNDQ5IDMuNDkxOTlMNi4wMDAzMyA1LjE3NzgzTDcuNjg2MTYgMy40OTE5OUM3LjkxMzY2IDMuMjY0NDkgOC4yODExNiAzLjI2NDQ5IDguNTA4NjYgMy40OTE5OUM4LjczNjE2IDMuNzE5NDkgOC43MzYxNiA0LjA4Njk5IDguNTA4NjYgNC4zMTQ0OUw2LjgyMjgzIDYuMDAwMzNMOC41MDg2NiA3LjY4NjE2QzguNzMwMzMgNy45MDc4MyA4LjczMDMzIDguMjgxMTYgOC41MDg2NiA4LjUwODY2WiIgZmlsbD0iIzAyODhEMSIvPgo8L3N2Zz4K')
      transparent;
      
  }
`;
