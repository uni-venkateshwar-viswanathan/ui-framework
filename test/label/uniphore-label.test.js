import '../../src/components/label/uniphore-label';
import { expect, jest, test } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('uniphore-label web-component tests', () => {
  const LABEL_TEXT = 'Hello World';
  const LABEL_COLOR = 'pink';

  test('uniphore-label component render', () => {
    const element = document.createElement('uniphore-label');
    expect(element).not.toBeNull();
  });

  test('uniphore-label rendered correctly in document body', async () => {
    const element = document.createElement('uniphore-label');
    element.setAttribute('text', LABEL_TEXT);
    element.setAttribute('color', LABEL_COLOR);
    document.body.appendChild(element);

    const selectedElement = document.querySelector('uniphore-label');

    expect(selectedElement.getAttribute('style')).toBe(
      '--uniphore-label-text-color: pink;',
    );
    expect(selectedElement.getAttribute('text')).toBe(LABEL_TEXT);
    expect(selectedElement.getAttribute('color')).toBe(LABEL_COLOR);
    // console.log('HTML: ' + document.body.innerHTML);
  });

  test('uniphore-label shadow DOM rendered correctly', async () => {
    const element = document.createElement('uniphore-label');
    document.body.appendChild(element);

    element.setAttribute('text', LABEL_TEXT);
    element.setAttribute('color', LABEL_COLOR);

    await element.updateComplete;

    const shadowRoot =
      document.body.getElementsByTagName('uniphore-label')[0].shadowRoot;
    const labelElement = shadowRoot.querySelector('span');
    expect(labelElement.getAttribute('id')).toBe('uniphore-label');
    expect(labelElement.getAttribute('class')).toBe(
      'uniphore-label uniphore-label-ellipsis',
    );
    expect(labelElement.innerHTML.includes(LABEL_TEXT)).toBeTruthy();
    // console.log('shadowDOM: ' + shadowRoot.innerHTML);
  });

  test('uniphore-label ellipsis title on mouseenter', async () => {
    const WRAPPER_DIV_WIDTH = 10;
    const VERY_LONG_LABEL_TEXT = 'very very very very very very long text';
    const divWrapper = document.createElement('div');
    divWrapper.setAttribute('style', 'width:' + WRAPPER_DIV_WIDTH + 'px');
    document.body.appendChild(divWrapper);
    const element = document.createElement('uniphore-label');
    divWrapper.appendChild(element);
    element.setAttribute('text', VERY_LONG_LABEL_TEXT);

    const spyOnSetTitle = jest.spyOn(element, '_setTitleIfNecessary');

    await element.updateComplete;
    const shadowRoot =
      document.body.getElementsByTagName('uniphore-label')[0].shadowRoot;
    const spanElement = shadowRoot.querySelector('span');
    Object.defineProperty(spanElement, 'offsetWidth', {
      writable: true,
      configurable: true,
      value: WRAPPER_DIV_WIDTH,
    });
    Object.defineProperty(spanElement, 'scrollWidth', {
      writable: true,
      configurable: true,
      value: 20,
    });

    let labelElement = shadowRoot.querySelector('span');
    const titleAttrBeforeMouseEnter = labelElement.getAttribute('title');
    expect(titleAttrBeforeMouseEnter).toBeNull();

    fireEvent.mouseEnter(spanElement);
    await element.updateComplete;

    labelElement = shadowRoot.querySelector('span');

    const titleAttrAfterMouseEnter = labelElement.getAttribute('title');
    expect(titleAttrAfterMouseEnter).not.toBeNull();

    expect(spyOnSetTitle).toHaveBeenCalled();
  });

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });
});
