import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { presets } from '../../env/env';
import { Router } from '../../router';
import reset from '../../styles/reset';
import utils from '../../styles/utils';

const tagName = 'site-footer-component';
export class Footer extends LitElement {
    static get styles() {
        return [
            reset,
            utils,
            css`
            .s-Footer {
                width: 100%;
                position: relative;
            }

            .s-Footer_Contents-Render {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: clamp(50px, 12vw, 157px) 0 clamp(54px, 13vw, 139px);
            }

            .s-Footer_Brand {
                font-size: clamp(16px, 3.8vw, 36px);
                font-family: var(--font-serif-en);
            }

            .s-Footer_nav {
                margin-top: clamp(20px, 4.8vw, 50px);
            }

            .s-Footer_navList {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }

            .s-Footer_navLink {
                padding-right: 1em;
                margin-right: 1em;
                display: inline-flex;
                position: relative;
                line-height: 2.5;
            }

            .s-Footer_navLink::after {
                content: "/";
                display: inline-block;
                position: absolute;
                right: 0;
            }

            .s-Footer_navList-Item:last-child .s-Footer_navLink::after {
                content: "";
            }

            .s-Footer_copyright {
                color: var(--color-text-third);
                font-size: 12px;
                margin-top: clamp(20px, 4.8vw, 52px);
            }`
        ]
    }

    constructor() {
        super();
        this.props = {
            siteName: `${presets.siteName}`
        }
    }

    navFooter = createRef();
    navLinks = createRef();

    firstUpdated() {
        const nav = this.navFooter.value;
        new Router(nav, '[data-content-anchor]');
    }

    render() {
        return html`
        <footer class="s-Footer" role="contentinfo">
            <div class="ly-Inner_Grid">
                <div class="s-Footer_Image" style="grid-column: 1/4;">
                    <picture>
                        <source media="(min-width: 992px)" srcset="../images/footer-pc@1x.jpg" type="image/jpg">
                        <source media="(min-width: 1200px)" srcset="../images/footer-pc@2x.jpg" type="image/jpg">
                        <source srcset="./images/footer-sp@2x.jpg" type="image/jpg">
                        <img src="../images/footer-sp@1x.jpg" alt="AWESOME COSME プロダクト画像" style="width: 100%;">
                    </picture>
                </div>
                <div class="s-Footer_Contents-Render">
                    <div class="s-Footer_Brand">
                        <div class="s-Footer_Brand-Title">
                            ${this.props.siteName}
                        </div>
                    </div>
                    <nav class="s-Footer_nav" ${ref(this.navFooter)}>
                        <ul class="s-Footer_navList">
                            <li class="s-Footer_navList-Item">
                                <a href="/company" class="s-Footer_navLink" data-content-anchor="true">
                                    会社概要
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/policy" class="s-Footer_navLink" data-content-anchor="true">
                                    プライバシーポリシー
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/terms" class="s-Footer_navLink" data-content-anchor="true">
                                    利用規約
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/commerce" class="s-Footer_navLink" data-content-anchor="true">
                                特定商取引法に基づく表記
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/contact" class="s-Footer_navLink" data-content-anchor="true">
                                    お問い合わせ
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <small class="s-Footer_copyright" translate="no">© THREE 2021 ALL Rights Reserved.</small>
                </div>
            </div>
        </footer>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Footer);