import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';
import headline from '../styles/headline';
import typography from '../styles/typography';
import utils from '../styles/utils';


const tagName = 'pages-error';

export class Error extends LitElement {
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
            }
            `
        ]
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">404 Error</div>
                <h2 class="c-headline-lv2">404 Not Found</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <p>申し訳ございません。ページが見つかりませんでした。</p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Error);