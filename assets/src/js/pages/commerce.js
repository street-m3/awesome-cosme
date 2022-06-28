import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';

const tagName = 'pages-commerce';

export class Commerce extends LitElement {
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
        <h1>テスト 特定商取引に基づく表記ページ</h1>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Commerce);
