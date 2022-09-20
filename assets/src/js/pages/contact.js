
import { LitElement, html, css } from 'lit';
import reset from '../styles/reset';
import container from '../styles/container';
import headline from '../styles/headline';
import typography from '../styles/typography';
import utils from '../styles/utils';

const tagName = 'pages-contact';

export class Contact extends LitElement {
    static get styles() {
        return [
            reset, 
            container, 
            headline,
            typography,
            utils,
            css`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            .c-headline-lv2 {
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }`
        ]
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">Contact</div>
                <h2 class="c-headline-lv2">お問い合わせ</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <p>現在調整中のページです。</p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Contact);