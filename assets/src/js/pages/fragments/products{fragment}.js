import { LitElement, html, css } from 'lit';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';

const tagName = 'section-products';

export class Products extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            css`
            .fragment--Products {
                --positionY: 60px;
            }

            .fragment--Products_Container {
                margin-top: 40px;
            }

            .fragment--Products-List {
                column-gap: 75px;
                display: grid;
                margin-top: clamp(82px, calc(5.125rem + ((1vw - 4.14px) * 1.8908)), 100px);
                min-height: 0vw;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                row-gap: 100px;
            }

            .fragment--Products-List-Item {
                position: relative;
            }

            .fragment--Products-List-Item .c-headline-number\:index {
                font-size: clamp(12px, calc(0.75rem + ((1vw - 4.14px) * 0.6303)), 18px);;
                font-weight: normal;
                color: var(--color-text-third);
            }


            [data-recent="true"] {
                --sp: 75px;
                --pc: 120px;
                font-family: var(--font-serif-ja);
                width: var(--sp);
                height: var(--sp);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                background-color: var(--color-badge);
                border-radius: 50%;
                position: absolute;
                top: calc(var(--sp) - calc(var(--sp) * 1.5));
                left: calc(var(--sp) - calc(var(--sp) * 1.5));
                color: var(--color-text-primary);
                font-size: 18px;
                z-index: 5;
            }

            @media screen and (min-width: 768px) {
                [data-recent="true"] {
                    width: var(--pc);
                    height: var(--pc);
                    top: calc(var(--pc) - calc(var(--pc) * 1.5));
                    left: calc(var(--pc) - calc(var(--pc) * 1.5));
                }
            }

            .fragment--Products-List-Item-Image {
                position: relative;
                overflow: hidden;
            }

            .fragment--Products-List-Item-Image > * {
                object-fit: cover;
                width: 100%;
            }

            .fragment--Products_Item-Description {
                overflow: hidden;
                margin-top: clamp(14px, calc(0.875rem + ((1vw - 4.14px) * 2.1008)), 34px);
            }

            .fragment--Products-List-Item-Title {
                --reading-title: 1.71;
                width: 100%;
                line-height: var(--reading-title);
                height: var(--reading-title);
                font-family: var(--font-serif-ja) !important;
                font-weight: normal;
            }

            .fragment--Products-List-Item-Text {
                line-height: 1.71;
                font-size: 14px;
                margin-top: clamp(10px, calc(0.625rem + ((1vw - 4.14px) * 1.0504)), 20px);
            }

            .m-price-modules .m-price-module-tax {
                text-align: right;
            }

            .m-price-modules .m-price-module-tax::after {
                content: "(+tax)";
                display: inline-block;
            }

            [data-stream="true"] {
                position: relative;
                top: var(--positionY);
                margin-bottom: var(--positionY);
            }

            @media screen and (min-width: 768px) {
                .fragment--Products-Proposal_PicturePanel-Details {
                    top: -150px;
                }
            }
            `
        ]
    }

    render() {
        return html`
        <section class="fragment--Products">
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">Product</h2>
                <div class="fragment--Products_Container">
                    <div class="c-headline-lv2">
                        商品一覧
                    </div>
                    <ul class="fragment--Products-List m-price-modules c-headline-number">
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <span data-recent="true" class="u-uppercase">New</span>
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-01-sp@1x.jpg" alt="プロダクト1">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        ファンデーション
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="true">
                        <span data-recent="true" class="u-uppercase">New</span>
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-02@1x.jpg" alt="プロダクト2">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        バスグッズ
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-03@1x.jpg" alt="プロダクト3">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        アイシャドー
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-04@1x.jpg" alt="プロダクト4">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title u-title-ellipsis">
                                        アイライナー
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="true">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-05@1x.jpg" alt="プロダクト5">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        リップクリーム
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-06@1x.jpg" alt="プロダクト6">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        スキンクリーム
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Products);