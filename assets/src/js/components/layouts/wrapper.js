import { LitElement, html, css } from "lit";
import reset from '../../styles/reset';
import utils from '../../styles/utils';

const tagName = "gl-wrapper";
export class Wrapper extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return [
            reset,
            utils,
            css`
            .gl-wrapper {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(7, auto);
                grid-column-gap: 0px;
                grid-row-gap: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `
        ]
    }

    render() {
        return html`
        <div class="gl-wrapper">
            <slot></slot>
        </div>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Wrapper);