import { expect, test, jest } from '@jest/globals';
import '../../src/components/tags/uniphore-tags';

describe('uniphore-tags web-component tests', () => {
  const TAG_LABEL = 'TAG_LABEL';
  const TAG_COLOR = 'TAG_COLOR';
  const TAG_BACKGROUND = 'TAG_BACKGROUND';

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('uniphore-tags component was added successfully to the DOM', () => {
    const tagsElement = document.createElement('uniphore-tags');
    document.body.appendChild(tagsElement);
    expect(tagsElement).not.toBeNull();

    const tagElementFromBody =
      document.body.getElementsByTagName('uniphore-tags');
    expect(tagElementFromBody).not.toBeNull();
  });

  test('uniphore-tags component shadow DOM rendered correctly', async () => {
    const tagsElement = document.createElement('uniphore-tags');
    const ADD_TAG_PLACEHOLDER = 'add tag :-)';
    const tagsData = [
      {
        // id: 1,
        label: TAG_LABEL + '1',
        color: TAG_COLOR + '1',
        background: TAG_BACKGROUND + '1',
      },
      {
        // id: 2,
        label: TAG_LABEL + '2',
        color: TAG_COLOR + '2',
        background: TAG_BACKGROUND + '2',
      },
    ];

    tagsElement.tags = tagsData;
    tagsElement.removable = true;
    tagsElement.showAddTag = true;
    tagsElement.addTagPlaceholder = ADD_TAG_PLACEHOLDER;
    document.body.appendChild(tagsElement);
    await tagsElement.updatesComplete;

    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tags')[0].shadowRoot;
    const htmlLIElements = shadowRoot.querySelectorAll('li');
    expect(htmlLIElements.length).toEqual(3);

    expect(htmlLIElements[0].querySelector('input')).not.toBeNull();
    expect(
      htmlLIElements[0].querySelector('input').getAttribute('placeholder'),
    ).toBe(ADD_TAG_PLACEHOLDER);

    const htmlUniphoreTagElements = shadowRoot.querySelectorAll('uniphore-tag');
    expect(htmlUniphoreTagElements.length).toEqual(2);

    // 1st tag: -------------------------------------------------------------------
    const firstTag = htmlUniphoreTagElements[0];
    expect(firstTag.getAttribute('id')).toBe('0');
    expect(firstTag.getAttribute('label')).toBe(TAG_LABEL + '1');
    expect(firstTag.getAttribute('removable')).toBeTruthy();
    expect(firstTag.getAttribute('background')).toBe(TAG_BACKGROUND + '1');
    expect(firstTag.getAttribute('color')).toBe(TAG_COLOR + '1');

    // 2nd tag: -------------------------------------------------------------------
    const secondTag = htmlUniphoreTagElements[1];
    expect(secondTag.getAttribute('id')).toBe('1');
    expect(secondTag.getAttribute('label')).toBe(TAG_LABEL + '2');
    expect(secondTag.getAttribute('removable')).toBeTruthy();
    expect(secondTag.getAttribute('background')).toBe(TAG_BACKGROUND + '2');
    expect(secondTag.getAttribute('color')).toBe(TAG_COLOR + '2');

    // console.log('=== SHADOW: ' + shadowRoot.innerHTML);
  });

  test('uniphore-tags !REMOVABLE & ![SHOW ADD TAG] rendered correctly', async () => {
    const tagsElement = document.createElement('uniphore-tags');
    const tagsData = [
      { id: 1, label: 'tag1' },
      { id: 2, label: 'tag2' },
    ];

    tagsElement.tags = tagsData;
    tagsElement.removable = false;
    tagsElement.showAddTag = false;
    await tagsElement.updatesComplete;
    document.body.appendChild(tagsElement);
    await tagsElement.updatesComplete;

    const shadowRoot =
      document.body.getElementsByTagName('uniphore-tags')[0].shadowRoot;
    const htmlLIElements = shadowRoot.querySelectorAll('li');
    expect(htmlLIElements.length).toEqual(2);
    expect(htmlLIElements[0].querySelector('input')).toBeNull();

    // console.log('=== SHADOW: ' + shadowRoot.innerHTML);
    const htmlUniphoreTagElements = shadowRoot.querySelectorAll('uniphore-tag');

    expect(htmlUniphoreTagElements[0].getAttribute('removable')).toBeNull();
    expect(htmlUniphoreTagElements[1].getAttribute('removable')).toBeNull();
    // console.log('=== SHADOW: ' + shadowRoot.innerHTML);
  });

  test('uniphore-tags remove event', async () => {
    const tagsElement = document.createElement('uniphore-tags');
    const tagsData = [{ label: TAG_LABEL + '1' }, { label: TAG_LABEL + '2' }];

    tagsElement.tags = tagsData;
    tagsElement.removable = true;
    await tagsElement.updatesComplete;
    document.body.appendChild(tagsElement);
    await tagsElement.updatesComplete;

    const tagElement = document
      .querySelector('uniphore-tags')
      .shadowRoot.querySelector('uniphore-tag');
    await tagElement.updatesComplete;

    const removeTagBtnHtmlElement = tagElement.shadowRoot.querySelector(
      "[id^='remove-tag-0']",
    );
    expect(removeTagBtnHtmlElement).not.toBeNull();

    const handlerMock = jest.fn();
    tagsElement.addEventListener('remove-tag', handlerMock);
    removeTagBtnHtmlElement.click();

    Promise.resolve().then(() => {
      // The event is dispatched 2 times! one for tag and one for tags
      expect(handlerMock).toHaveBeenCalledTimes(2);

      /** handlerMock.mock.calls[0] -> call number 0 (first call to the method)
             handlerMock.mock.calls[0][0] -> argument 0 for that call **/
      // 1st call (uniphore-tagS)
      const tagsCollectionDispatchCall = handlerMock.mock.calls[0][0].detail;
      expect(tagsCollectionDispatchCall.removeTagId).toEqual(0);
      expect(tagsCollectionDispatchCall.removeTag.label).toEqual(
        TAG_LABEL + '1',
      );

      // 2nd call (uniphore-tag)
      const tagDispatchCall = handlerMock.mock.calls[1][0].detail;
      expect(tagDispatchCall.tagId).toEqual(0);
      expect(tagDispatchCall.removeTag).toEqual(TAG_LABEL + '1');
    });

    tagsElement.removeEventListener('remove-tag', handlerMock);
  });
});
