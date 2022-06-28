import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';

const tagName = 'pages-terms';

export class Terms extends LitElement {
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
            <h1>テスト 利用規約ページ</h1>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Terms);
