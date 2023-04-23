function dispatchWebComponentEvent(
  element,
  name,
  details,
  isBubbles = true,
  isComposed = true,
) {
  const webComponentCustomEvent = new CustomEvent(name, {
    detail: details,
    bubbles: isBubbles,
    composed: isComposed,
  });

  element.dispatchEvent(webComponentCustomEvent);
}

export const _updateParentStyle = (_this, tagName) => {
  const parents = _this.parentElement.getElementsByTagName(tagName);
  if (parents) {
    Array.from(parents).forEach(tag => {
      tag.style['display'] = 'flex';
      tag.style['flex-direction'] = 'column';
    });
  }
};

export { dispatchWebComponentEvent };
