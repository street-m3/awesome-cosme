import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';
import typography from '../../styles/typography';

const tagName = 'section-proposal';

export class Proposal extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            typography,
            css`
            .fragment--Products-Proposal {
                --spY: 80px;
                --pcY: 150px;
                --offsetYsp: calc(var(--spY) - (var(--spY) * 2));
                margin-bottom: var(--offsetYsp);
            }

            .fragment--Products-Proposal_PicturePanel {
                grid-column: 1/4;
                z-index: 0;
                position: relative;
            }

            .fragment--Products-Proposal_Pictures img {
                width: 100%;
            }

            .fragment--Products-Proposal_PicturePanel-Details {
                grid-column: 2/4;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
                bottom: var(--spY);
                z-index: 1;
            }

            .fragment--Products-Proposal_PicturePanel-Container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                margin-top: 40px;
                row-gap: 30px;
            }

            .fragment--Products-Proposal_PicturePanel-Container a {
                position: relative;
                width: 180px;
                font-family: var(--font-serif-ja);
                padding: 13px 0;
                border-radius: 130px;
                border: 2px solid var(--color-text-primary);
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                margin-top: clamp(41px, 9vw, 81px);
                margin-left: auto;
            }

            @media screen and (min-width: 768px) {
                .fragment--Products-Proposal {
                    --offsetYpc: calc(var(--pcY) - (var(--pcY) * 2));
                    margin-bottom: var(--offsetYpc);
                }

                .fragment--Products-Proposal_PicturePanel-Details {
                    bottom: var(--pcY);
                }

                .fragment--Products-Proposal_PicturePanel-Container a {
                    width: 250px;
                    padding: 22px 0;
                }

                .fragment--Products-Proposal_PicturePanel-Container { 
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (hover: hover) {
                .fragment--Products-Proposal_PicturePanel-Container a:hover {
                    background-color: var(--color-text-primary);
                    color: var(--color-white);
                    transition: background-color 0.4s ease-out 0s;
                }
            }
            `
        ]
    }

    render() {
        return html`
        <section class="fragment--Products-Proposal">
            <div class="ly-Inner_Grid -lg"> 
                <div class="fragment--Products-Proposal_PicturePanel">
                    <figure class="fragment--Products-Proposal_Pictures">
                        <picture>
                            <source media="(min-width: 992px)" srcset="../images/gift-pc@1x.jpg" type="image/jpg">
                            <source media="(min-width: 1200px)" srcset="../images/gift-pc@2x.jpg" type="image/jpg">
                            <source srcset="../images/gift-sp@2x.jpg" type="image/jpg">
                            <img src="../images/gift-sp@1x.jpg" alt="ギフトセット画像">
                        </picture>
                    </figure>
                </div>
                <div class="fragment--Products-Proposal_PicturePanel-Details">
                    <h2 class="c-headline-lv6">GIFT</h2>
                    <div class="fragment--Products-Proposal_PicturePanel-Container">
                        <div class="c-headline-lv2">大切な人への<br>贈り物に。</div>
                        <div class="fragment--Products-Proposal_PicturePanel-Box">
                            <p class="o-Typography-Landing">
                                AWESOME 公式ショップがリコメンドする、ギフトセット。<wbr>大切な方へ、お世話になった方へ、自分へのプレゼントに、ホリスティックな心地よさをおたのしみください。
                            </p>
                            <a href="/404" class="u-uppercase u-flex u-flex-content-center u-flex-justify-center">
                                <span style="margin-right: 24px;">More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="6" viewBox="0 0 45 6">
                                    <g id="グループ_10175" data-name="グループ 10175" transform="translate(1983.641 -1474)">
                                        <line id="線_138" data-name="線 138" x2="30" transform="translate(-1983.641 1479.5)" stroke-width="1" style="fill: none; stroke: currentColor;" />
                                        <path id="パス_53" data-name="パス 53" d="M0,2.93l15,6H0Z" transform="translate(-1953.641 1471.07)" style="fill: currentColor;" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Proposal);