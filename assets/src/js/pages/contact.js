
import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';

const tagName = 'pages-contact';

export class Contact extends LitElement {
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
        <h1>テスト お問い合わせページ</h1>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Contact);
