import { LitElement, html, css } from 'lit';
import { presets } from '../../env/env';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';


const tagName = 'section-sidebar';

export class Sidebar extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            css`
            .fragment--topSidebar-Impression {
                width: var(--sidebar-impression-sp);
                height: 100vh;
                position: absolute;
                right: 0;
                top: 0;
                z-index: var(--zindex-Fixed-sidebar);
                background-color: #f2f2f2;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                background-color: var(--color-white);
            }

            .fragment--topSidebar-Impression_Brand-Title {
                font-size: 12px;
                writing-mode: vertical-rl;
                white-space: nowrap;
                display: none;
            }

            @media screen and (min-width: 768px) {
                .fragment--topSidebar-Impression {
                    width: var(--sidebar-impression-pc);
                }
                
                .fragment--topSidebar-Impression_Brand-Title {
                    display: block;
                }
            }
            `
        ]
    }

    constructor() {
        super();
        this.props = {
            siteName: `${presets.siteName}`,
        };
    }

    render() {
        return html`
        <div class="fragment--topSidebar-Impression">
            <div class="fragment--topSidebar-Impression_Brand">
                <p class="fragment--topSidebar-Impression_Brand-Title">
                    © ${this.props.siteName}
                </p>
            </div>
            <div class="fragment--topSidebar-Impression_adjacentSection">
                <p class="fragment--topSidebar-Impression_adjacentSection-Number"></p>
            </div>
        </div>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Sidebar);