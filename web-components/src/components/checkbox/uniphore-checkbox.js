import {LitElement, html} from 'lit';
import { uniphoreCheckboxStyles } from "./uniphore-checkbox-styles.js";
import "../icon/uniphore-icon.js";
import {dispatchWebComponentEvent} from "../../common.js";
import {
    CHECKBOX_BACKGROUND_COLOR,
    CHECKBOX_COLOR, CHECKBOX_ICONS,
    CHECKBOX_LABEL_SIZE,
    CHECKBOX_SIZE_DEFAULT,
    CHECKBOX_SIZES
} from "./uniphore-checkbox-consts.js";

export class UniphoreCheckbox extends LitElement {
    static get properties(){
        return {
            indeterminate: {type: Boolean},
            checkedIcon: {type: String},
            indeterminateIcon: {type: String},
            disabled: {type: Boolean},
            checked: {type: Boolean},
            label: {type: String},
            checkboxBackgroundColor: {type: String},
            checkboxColor: {type: String},
            checkmarkColor: {type: String},
            checkboxSize: {type: String},
            labelSize: {type: String}
        }
    };

    static styles = uniphoreCheckboxStyles;

    constructor() {
        super();
        this.disabled = false;
        this.checked = false;
        this.indeterminate = false;
        this.label = "";

        this.checkboxSize = CHECKBOX_SIZE_DEFAULT;
        this.labelSize = CHECKBOX_LABEL_SIZE;

        this.checkmarkColor = CHECKBOX_COLOR.CHECKMARK;
        this.checkboxColor = CHECKBOX_COLOR.SQUARE;
        this.checkboxBackgroundColor = CHECKBOX_BACKGROUND_COLOR;

        this.checkedIcon = CHECKBOX_ICONS.CHECKED;
        this.indeterminateIcon = CHECKBOX_ICONS.INDETERMINATE;
    }

    connectedCallback() {
        super.connectedCallback();
        this._setStyleVariables('--checkbox-square-size', this._getCheckboxSize().SQUARE);
        this._setStyleVariables('--checkbox-label-size', this.labelSize);
        this._setStyleVariables('--checkbox-color', this.checkboxColor);
        this._setStyleVariables('--checkbox-background-color', this.checkboxBackgroundColor);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="uniphore-checkbox">
                <label class="uniphore-checkbox-label">
                    ${this._renderChecbkoxInput()}
                    <div class="uniphore-checkbox-label-cb">
                        ${this._renderCheckboxIcon()}
                    </div>
                    ${this.label ? html`<span class="uniphore-checkbox-label-text">${this.label}</span>` : null}
                </label>
            </div>
        `;
    }

    _getCheckboxSize () {
        return CHECKBOX_SIZES[this.checkboxSize] || CHECKBOX_SIZES.small;
    }

    _renderCheckboxIcon () {
        const icon = this.indeterminate ? this.indeterminateIcon : this.checkedIcon;
        return this.checked ? html`<uniphore-icon name=${icon} size=${this._getCheckboxSize().CHECKMARK} color=${this.checkmarkColor}/>` : null;
    }

    _renderChecbkoxInput () {
        if (this.disabled) {
            if (this.checked) {
                return html`<input type="checkbox" @change=${this._onChange} checked disabled/>`;
            } else {
                return html`<input type="checkbox" @change=${this._onChange} disabled/>`;
            }
        } else {
            if (this.checked) {
                return html`<input type="checkbox" @change=${this._onChange} checked/>`;
            } else {
                return html`<input type="checkbox" @change=${this._onChange}/>`;
            }
        }
    }

    _onChange(e) {
        this.checked = e.target.checked;
        dispatchWebComponentEvent(this, 'uniphore-checkbox-click', e.target.checked);
    }

    _setStyleVariables(variable, value){
        if (variable && value){
            this.style.setProperty(variable, value);
        }
    }
}


if (!customElements.get('uniphore-checkbox')) {
    customElements.define('uniphore-checkbox', UniphoreCheckbox);
}