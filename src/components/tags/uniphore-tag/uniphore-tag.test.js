import { expect, test, jest } from '@jest/globals';
import './uniphore-tag.js';
//import { waitFor } from '@testing-library/dom';

describe('uniphore-tag web-component tests', () => {
  const TAG_ID = 555;
  const TAG_LABEL = 'TAG_LABEL';
  const TAG_COLOR = 'TAG_COLOR';
  const TAG_BACKGROUND = 'TAG_BACKGROUND';

  // beforeEach(async () => {
  //     element = document.createElement('uniphore-tag');
  //     document.body.appendChild(element);
  //     return await element.updatesComplete;
  // });

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  function addTagElementToDOM() {
    // cant be done in beforeEach - why?
    const element = document.createElement('uniphore-tag');
    document.body.appendChild(element);
    return element;
  }

  test('uniphore-tag component was added successfully to the DOM', () => {
    const tagElement = addTagElementToDOM();
    expect(tagElement).not.toBeNull();

    const tagElementFromBody =
      document.body.getElementsByTagName('uniphore-tag');
    expect(tagElementFromBody).not.toBeNull();
  });

  test('uniphore-tag component shadow DOM rendered correctly', async () => {
    const tagElement = document.createElement('uniphore-tag');
    tagElement.id = TAG_ID;
    tagElement.label = TAG_LABEL;
    tagElement.color = TAG_COLOR;
    tagElement.background = TAG_BACKGROUND;

    document.body.appendChild(tagElement);
    await tagElement.updatesComplete;

    expect(
      tagElement
        .getAttribute('style')
        .includes(
          '--tag-background-color: TAG_BACKGROUND; --tag-border: 1px solid TAG_BACKGROUND;',
        ),
    ).toBeTruthy();

    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tag')[0].shadowRoot;
    const spanElement = shadowRoot.querySelector('span');
    expect(spanElement).not.toBeNull();
    const uniphoreLabelElementHtml =
      spanElement.querySelector('uniphore-label');
    expect(uniphoreLabelElementHtml).not.toBeNull();

    expect(uniphoreLabelElementHtml.getAttribute('text')).toBe(TAG_LABEL);
    expect(uniphoreLabelElementHtml.getAttribute('color')).toBe(TAG_COLOR);
    expect(uniphoreLabelElementHtml.getAttribute('style')).toBe(
      '--uniphore-label-text-color: ' + TAG_COLOR + ';',
    );
  });

  test('uniphore-tag rendered correctly ["removable" property] - render X btn', async () => {
    const tagElement = document.createElement('uniphore-tag');
    tagElement.removable = true;
    // await waitFor(() => expect(tagElement.removable).toBeTruthy());
    document.body.appendChild(tagElement);
    await tagElement.updatesComplete;

    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tag')[0].shadowRoot;
    const removeBtnHtmlElement = shadowRoot.querySelector(
      "[id^='remove-tag-']",
    );
    expect(removeBtnHtmlElement).not.toBeNull();
    expect(tagElement.getAttribute('style')).toEqual(
      '--tag-padding-right: 22px;',
    );
  });

  test('uniphore-tag remove button click calls removeTag inner function', async () => {
    const tagElement = addTagElementToDOM();
    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tag')[0].shadowRoot;
    tagElement.removable = true;
    await tagElement.updatesComplete;

    const spyOnRemoveTag = jest.spyOn(tagElement, '_removeTag');
    const removeBtnHtmlElement = shadowRoot.querySelector(
      "[id^='remove-tag-']",
    );
    removeBtnHtmlElement.click();

    expect(spyOnRemoveTag).toHaveBeenCalled();
  });

  test('uniphore-tag remove button click emits "remove-tag" event with the right event object', async () => {
    const tagElement = addTagElementToDOM();
    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tag')[0].shadowRoot;
    tagElement.removable = true;
    tagElement.id = TAG_ID;
    tagElement.label = TAG_LABEL;
    await tagElement.updatesComplete;

    const handlerMock = jest.fn();
    tagElement.addEventListener('remove-tag', handlerMock);
    const removeBtnHtmlElement = shadowRoot.querySelector(
      '#remove-tag-' + TAG_ID,
    );
    removeBtnHtmlElement.click();

    Promise.resolve().then(() => {
      expect(handlerMock).toHaveBeenCalledTimes(1);
      /** handlerMock.mock.calls[0] -> call number 0 (first call to the method)
                handlerMock.mock.calls[0][0] -> argument 0 for that call **/
      expect(handlerMock.mock.calls[0][0].detail.removeTag).toStrictEqual(
        TAG_LABEL,
      );
      expect(handlerMock.mock.calls[0][0].detail.tagId).toEqual(TAG_ID);
    });

    tagElement.removeEventListener('remove-tag', handlerMock);
  });
});
