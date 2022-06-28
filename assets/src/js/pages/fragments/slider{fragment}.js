import { LitElement,html, css } from "lit";
import { ref, createRef } from 'lit/directives/ref.js';
import { presets } from '../../env/env';
import { SlideShow } from '../../lib/slider';
import reset from '../../styles/reset';

export class SliderComponents extends LitElement {
    static get styles() {
        return [
            reset,
            css`
            .fragment--topMainvisual {
                display: block;
                height: 100vh;
                position: relative;
                z-index: 0;
                overflow: hidden;
                width: calc(100% - var(--sidebar-impression-sp));
                margin-right: auto;
            }

            .fragment--topMainvisual_Inner {
                display: grid;
                grid-template-columns: 23px minmax(0, auto) 23px;
                grid-template-rows: calc(100vh - var(--private-header-height-sp)) var(--private-header-height-sp);
                align-items: end;
            }

            .fragment--topMainvisual-Picture_List-Item {
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                display: block;
                height: 100%;
                left: 0;
                object-fit: cover;
                transition: opacity 0.75s ease-in-out 0s;
                opacity: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 1;
            }

            .fragment--topMainvisual-Picture_List-Item[data-slide-active="true"] {
                opacity: 1;
                transition: opacity 0.75s ease-in-out 0s;
            }

            .fragment--topMainvisual-Title {
                --clamp-size: 12.07729vw;
                font-family: var(--font-serif-en);
                font-size: clamp(3.125rem,var(--clamp-size),4.1875rem);
                min-height: 0;
                color: var(--color-text-primary);
                font-weight: 400;
            }

            .fragment--topMainvisual-TitleArea {
                position: relative;
                z-index: 5;
            }

            .fragment--topMainvisual-Presentation {
                line-height: 1.6;
            }

            .fragment--topMainvisual-Picture_List-Item.-options {
                background: rgba(0, 0, 0, .2) radial-gradient(rgba(0, 0, 0, .4) 30%, transparent 0) center center / 4px 4px;
                display: inline-block;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
            }

            @media (min-width: 768px) {
                .fragment--topMainvisual {
                    width: calc(100% - var(--sidebar-impression-pc));
                }

                .fragment--topMainvisual_Inner {
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-lg)) minmax(23px, 1fr);
                    grid-template-rows: calc(100vh - var(--private-header-height-pc)) var(--private-header-height-pc);
                }

                .fragment--topMainvisual-TitleArea {
                    bottom: 50px;
                }
            }
            `
        ]
    }

    PictureList = createRef();
    PictureItem = createRef();

    firstUpdated() {
        const root = this.PictureList.value;
        const items = root.querySelectorAll('.fragment--topMainvisual-Picture_List-Item');
        new SlideShow(root, items);
    }

    _messageArea() {
        return html `
        <div class="fragment--topMainvisual-TitleArea">
            <h2 class="fragment--topMainvisual-Title">${presets.siteName}</h2>
            <p class="fragment--topMainvisual-Presentation">
                今を生きる現代女性へ向けて誕生した「AWESOME COSME」。 <br class="sp-br" />そのコンセプトと同じように、しなやかさと輝きを放つ、魅力的な女性たちのキレイの秘密に迫る。
            </p>
        </div>
        `;
    }

    render() {
        return html `
        <section class="fragment--topMainvisual">
            <div class="fragment--topMainvisual_Inner">
                <div class="fragment--topMainvisual-Pictures">
                    <ul class="fragment--topMainvisual-Picture_List" data-effect="false" ${ref(this.PictureList)}>
                        <li class="fragment--topMainvisual-Picture_List-Item" data-slide-active="false" style="background-image: url('../images/mainvisual-01.jpg');" ${ref(this.PictureItem)}></li>
                        <li class="fragment--topMainvisual-Picture_List-Item" data-slide-active="false" style="background-image: url('../images/mainvisual-02.jpg');" ${ref(this.PictureItem)}></li>
                    </ul>
                </div>
                ${this._messageArea()}
            </div>
        </section>
        `;
    }
}

customElements.get('section-slider-component') || customElements.define('section-slider-component', SliderComponents);