import { assert } from '@esm-bundle/chai';
import LabelElement from '../../src/components/label/uniphore-label.js';

describe(`Those tests are testing the behavior of the custom element <uniphore-label>`, () => {
  it('test component is rendered successfully', () => {
    const element = document.createElement('uniphore-label');
    document.body.innerHTML = `<uniphore-label class="uniphore-label" text="Hello world" color="red"></uniphore-label>`;
    console.log(document.body.innerHTML);
    assert.instanceOf(element, LabelElement);
    // expect(sum(1, 1)).to.equal(2);
    // expect(sum(3, 12)).to.equal(15);
  });
});
