import { LitElement, html, nothing } from 'lit';
import { dispatchWebComponentEvent } from '../../../../common.js';
import agent from '../../../../assets/icons/sessionType/agent.svg';
import customer from '../../../../assets/icons/sessionType/customer.svg';
import rule from '../../../../assets/icons/sessionType/rule.svg';
import formula from '../../../../assets/icons/sessionType/formula.svg';
import environment from '../../../../assets/icons/sessionType/environment.svg';
import booleanEntityType from '../../../../assets/icons/valueTypes/booleanType.svg';
import dateEntityType from '../../../../assets/icons/valueTypes/dateEntityType.svg';
import enumEntityType from '../../../../assets/icons/valueTypes/enumEntityType.svg';
import textEntityType from '../../../../assets/icons/valueTypes/textEntityType.svg';
import collectionType from '../../../../assets/icons/valueTypes/collectionType.svg';
import dynamicEntityType from '../../../../assets/icons/valueTypes/dynamicEntityType.svg';
import numberEntityType from '../../../../assets/icons/valueTypes/numberEntityType.svg';
import { uniphoreToolbarVariableStyles } from './uniphore-toolbar-variable-styles.js';

export class UniphoreToolbarVariable extends LitElement {
  static properties = {
    item: { type: Object },
  };

  static styles = uniphoreToolbarVariableStyles;

  render() {
    const valueTypeIcon = this.variableValueTypeIcon
      ? html`<img
          src="${this.variableValueTypeIcon}"
          alt="value-type-icon"
          class="value-type-icon"
          title="${this._getVariableTooltip(this.item.valueType, this.item)}"
          @click="${this._handleToolbarItemClick}"
        />`
      : nothing;
    const sessionTypeIcon = this.variableSessionTypeIcon
      ? html`<img
          src="${this.variableSessionTypeIcon}"
          alt="session-type-icon"
          class="session-type-icon"
          title="${this.item.sessionType}"
          @click="${this._handleToolbarItemClick}"
        />`
      : nothing;

    return html` <div class="uniphore-toolbar-item-variable">
      ${valueTypeIcon} ${sessionTypeIcon}
    </div>`;
  }

  get variableSessionTypeIcon() {
    switch (this.item.sessionType.toLowerCase()) {
      case 'agent':
        return agent;
      case 'customer':
        return customer;
      case 'environment':
        return environment;
      case 'formula':
        return formula;
      case 'rule':
        return rule;
      default:
        return '';
    }
  }

  get variableValueTypeIcon() {
    switch (this.item.valueType.toLowerCase()) {
      case 'boolean':
        return booleanEntityType;
      case 'date':
        return dateEntityType;
      case 'enum':
        return enumEntityType;
      case 'text':
        return textEntityType;
      case 'dynamic':
        return dynamicEntityType;
      case 'collection':
        return collectionType;
      case 'number':
        return numberEntityType;
      default:
        return '';
    }
  }

  _getVariableTooltip(valueType, variable) {
    switch (valueType) {
      case 'CURRENCY':
        return 'Number';
      case 'OBJECT':
        return variable.customTypeName;
      case 'ENUM':
        return variable.customTypeName;
      case 'COLLECTION':
        if (variable) {
          const type =
            variable.customTypeName ||
            this._getVariableTooltip(variable.collectionElementType, variable);
          return `Collection of ${type}`;
        }
    }

    return valueType.charAt(0).toUpperCase() + valueType.slice(1).toLowerCase();
  }

  _handleToolbarItemClick() {
    dispatchWebComponentEvent(
      this,
      'uniphore-toolbar-variable-click',
      this.item,
    );
  }
}
customElements.define('uniphore-toolbar-variable', UniphoreToolbarVariable);
