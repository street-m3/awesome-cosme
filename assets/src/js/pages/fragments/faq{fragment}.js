import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { Accordion } from '../../lib/accordion';
import reset from '../../styles/reset';
import utils from '../../styles/utils';
import container from '../../styles/container';
import headline from '../../styles/headline';
import typography from '../../styles/typography';

const tagName = 'section-faq';

export class AccordionSection extends LitElement {
    static get styles() {
        return [
            reset,
            utils,
            container,
            headline,
            typography,
            css`
            .fragment--accordions {
                display: grid;
                grid-template-columns: minmax(20px, 1fr) auto;
                grid-template-rows: 1fr;
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            .c-headline-lv6 {
                margin-bottom: 40px;
            }

            .c-accordion-container {
                grid-area: 1 / 2 / 2 / 3;
            }
            
            .c-accordion-panel {
                overflow: hidden;
                box-sizing: border-box;
                max-height: 0px;
                transition: max-height 0.3s ease-out 0s;
            }

            .c-accordion-item {
                border-bottom: 1px solid var(--color-accent-gray);
                margin: 0;
                position: relative;
            }

            .c-accordion-tab {
                align-items: center;
                background-color: transparent;
                border: 0;
                color: inherit;
                display: flex;
                font-size: 18px;
                font-family: var(--font-serif-ja);
                font-weight: normal;
                padding: clamp(23px, calc(1.4375rem + ((1vw - 4.14px) * 1.3655)), 36px) 0;
                justify-content: space-between;
                position: relative;
                text-align: left;
                width: 100%;
            }

            .c-accordion-tab:focus-visible {
                outline: 2px solid #1d64d0;
            }

            .c-accordion-header {
                background-color: transparent;
                color: var(--color-text-primary);
            }

            .c-accordion-tabicon {
                display: inline-block;
                height: 1em;
                pointer-events: none;
                position: relative;
                width: 1em;
            }

            .c-accordion-tabicon::before,
            .c-accordion-tabicon::after  {
                background-color: var(--color-text-primary);
                bottom: 0;
                content: "";
                display: inline-block;
                height: 2px;
                left: 0;
                margin: auto;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
            }

            .c-accordion-tabicon::after {
                transform: rotate(90deg);
                transition: transform 0.3s;
            }

            .c-accordion-header.is-open-panel .c-accordion-tabicon::after {
                transform: rotate(180deg);
            }

            .c-accordion-content {
                line-height: 1.75;
                padding: 1.5rem;
            }
            `
        ]
    }

    constructor() {
        super();
        this.accordions = [
            {
                id: "faq-1",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
            {
                id: "faq-2",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
            {
                id: "faq-3",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
            {
                id: "faq-4",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
            {
                id: "faq-5",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
            {
                id: "faq-6",
                title: "化粧品の使用期限はどの位ですか？",
                description: "大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。",
            },
        ]
    }

    accordion = createRef();

    firstUpdated() {
        const root = this.accordion.value;
        new Accordion(root, 'js-accordion-header');
    }

    render() {
        return html`
        <section class="fragment--Faq">
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">
                    Faq
                </h2>
                <div class="fragment--accordions">
                    <div class="c-accordion-container" ${ref(this.accordion)}>
                    ${this.accordions.map(({ id, title, description }) => html`
                        <div id="${id}" class="c-accordion-item">
                            <h2 class="c-accordion-header js-accordion-header">
                                <button type="button" class="c-accordion-tab">
                                    ${title}
                                    <span class="c-accordion-tabicon"></span>
                                </button>
                            </h2>
                            <div class="c-accordion-panel js-accordion-panel">
                                <div class="c-accordion-content">
                                    <p>${description}</p>
                                </div>
                            </div>
                        </div>
                    `)}
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, AccordionSection);
