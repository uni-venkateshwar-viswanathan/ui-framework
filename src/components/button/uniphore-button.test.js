import { expect, test, jest } from '@jest/globals';
import './uniphore-button';

describe('uniphore-button web-component tests', () => {
  // const BTN_TEXT = 'my btn text';
  // const BTN_NAME = 'my btn name';

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('uniphore-button component render', () => {
    const element = document.createElement('uniphore-button');
    expect(element).not.toBeNull();

    document.body.appendChild(element);
    const ButtonElementFromBody =
      document.body.getElementsByTagName('uniphore-button');
    expect(ButtonElementFromBody).not.toBeNull();
  });

  // TODO: this test needs to wriritten
  // test('uniphore-button component default render', async () => {
  //   const element = document.createElement('uniphore-button');
  //   document.body.appendChild(element);

  //   const shadowRoot =
  //     document.body.getElementsByTagName('uniphore-button')[0].shadowRoot;
  //   element.setAttribute('text', BTN_TEXT);
  //   element.name = BTN_NAME;
  //   // element.disabled = true;
  //   await element.updatesComplete;

  //   const buttonElement = shadowRoot.querySelector('button');
  //   expect(buttonElement.getAttribute('name')).toBe(BTN_NAME);
  //   expect(buttonElement.innerHTML.includes(BTN_TEXT)).toBeTruthy();
  //   // console.log('HTML: ' + document.body.innerHTML);
  //   // console.log('shadow root: ' + shadowRoot.innerHTML);
  // });

  test('uniphore-button click triggers _onButtonClick', async () => {
    const element = document.createElement('uniphore-button');
    document.body.appendChild(element);

    const spyOn = jest.spyOn(element, '_onButtonClick');
    const shadowRoot =
      document.body.getElementsByTagName('uniphore-button')[0].shadowRoot;
    await element.updatesComplete;

    const buttonElement = shadowRoot.querySelector('button');

    buttonElement.click();
    expect(spyOn).toHaveBeenCalled();
  });

  test('uniphore-button click emits uniphore-button-click event', async () => {
    const element = document.createElement('uniphore-button');

    document.body.appendChild(element);
    const shadowRoot =
      document.body.getElementsByTagName('uniphore-button')[0].shadowRoot;
    await element.updatesComplete;

    const handlerMock = jest.fn();
    element.addEventListener('uniphore-button-click', handlerMock);

    const buttonElement = shadowRoot.querySelector('button');

    buttonElement.click();
    expect(handlerMock).toHaveBeenCalled();
  });
});
