import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { presets } from '../../env/env';
import Reset from '../../styles/reset';
import './drawer{template}';

const tagName = 'site-header-component';
export class Header extends LitElement {
    static get styles() {
        return [
            Reset,
            css`
            .s-Header {
                background-color: #fff;
                background-color: var(--color-white);
                position: relative;
                width: 100%
            }

            .s-Header_Inner {
                align-items: center;
                display: flex;
                height: 100px;
                height: var(--private-header-height-sp);
                justify-content: space-between;
                margin: 0 auto;
                max-width: 100%;
                padding: 0 23px;
                width: 1200px;
                z-index: 100;
                z-index: var(--zindex-Fixed-header)
            }

            .s-Header_Brand {
                font-family: Cormorant Garamond, serif;
                font-family: var(--font-serif-en);
                font-size: clamp(1.3125rem, 5vw, 1.75rem);
                font-weight: 400;
                position: relative;
                white-space: nowrap
            }

            @media screen and (min-width:768px) {
                .s-Header_Inner {
                    align-items: flex-start;
                    height: 165px;
                    height: var(--private-header-height-pc);
                    padding: 45px 23px
                }
            }`
        ]
    }

    constructor() {
        super();
        this.props = {
            siteName: `${presets.siteName}`,
        }
    }

    headerRef = createRef();
    drawerRef = createRef();

    render() {
        return html`
        <header class="s-Header" role="banner">
            <div class="s-Header_Inner">
                <h1 class="s-Header_Brand">
                    <div class="s-Header_Brand-Title">
                        ${this.props.siteName}
                    </div>
                </h1>
                <site-drawer-component ${ref(this.drawerRef)}></site-drawer-component>
            </div>
        </header>`
    }
}

customElements.get(tagName) || customElements.define(tagName, Header);