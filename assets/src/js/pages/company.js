import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';

const tagName = 'pages-company';

export class Company extends LitElement {
    static get styles() {
        return [
            reset, 
            container, 
        ]
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <h1>テスト カンパニーページ</h1>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Company);
