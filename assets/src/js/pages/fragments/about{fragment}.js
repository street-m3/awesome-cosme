import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { Modal } from '../../lib/modal';
import { presets } from '../../env/env';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';
import typography from '../../styles/typography';
import uiModal from '../../styles/modal';
import keyframes from '../../styles/keyframes';

const tagName = 'section-about';

export class About extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            typography,
            uiModal,
            keyframes,
            css`
            .fragment--CompanyFutures {
                position: relative;
            }

            .fragment--CompanyFuture_Container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                margin-top: 40px;
                row-gap: 30px;
            }

            .fragment--CompanyFuture_Movie {
                margin-top: clamp(40px, calc(2.5rem + ((1vw - 4.14px) * 11.5546)), 150px);
            }

            @media screen and (min-width: 768px) {
                .fragment--CompanyFuture_Container{ 
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            `
        ]
    }
    
    constructor() {
        super();
    }

    modalRoot = createRef();

    firstUpdated() {
        const root = this.modalRoot.value;
        root.querySelectorAll('.js-modal').forEach((element) => {
            new Modal(root, element, {
                disableScroll: true,
                awaitOpenAnimation: true,
                awaitCloseAnimation: true,
            });
        });
    }

    render() {
        return html`
        <section class="fragment--CompanyFutures u-content-area -top" ${ref(this.modalRoot)}>
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">About</h2>
                <div class="fragment--CompanyFuture_Container">
                    <div class="fragment--CompanyFuture_Box">
                        <div class="c-headline-lv2">
                            今を生きる<br />現代女性のために。
                        </div>
                    </div>
                    <div class="fragment--CompanyFuture_Box">
                        <p class="o-Typography-Landing">
                            素敵なヘアスタイルは健康な頭皮から生まれます。<br />ヘアスタイルをデザインする上で一番大切なのは、素材である毛髪です。<br />理想とするヘアスタイルを創る上で、一人ひとり異なった素材をいかに生かせるか、くつろぎと満足を味わっていただけるよう、一同真剣に取り組んでまいります。
                        </p>
                        <div class="fragment--CompanyFuture_Movie">
                            <button type="button" class="" data-modal-target="modal-1">
                                <picture>
                                    <source media="(min-width: 992px)" srcset="./images/modal-movie-pc@2x.jpg" type="image/jpg">
                                    <img src="./images/modal-movie-sp@1x.jpg" alt="AWESOME COSMEのコンセプトムービー">
                                </picture>
                            </button>
                        </div>
                        <div id="modal-1" class="component-scope-modal js-modal" aria-hidden="true" aria-labelledby="modal-1-title" style="display: none;">
                            <div class="component-scope-modal-container" data-modal-close>
                                <div class="component-scope-modal-inner">
                                    <header class="component-scope-modal-header">
                                        <h2 id="modal-1-title" class="u-visual-hidden">弊社のコンセプトムービーです。</h2>
                                        <button class="component-scope-modal-close" type="button" aria-label="閉じる" data-modal-close></button>
                                    </header>
                                    <div class="component-scope-modal-content">
                                        <video src="../images/Cosmetics.mp4" controls webkit-playsinline="" playsinline="" muted="" preload="auto"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, About);