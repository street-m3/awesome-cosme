import { LitElement, html, css } from 'lit';
import { presets } from '../../env/env';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';

const tagName = 'section-release-info';

export class ReleaseInfo extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            css`
            .fragment--ReleaseInfo_Container {
                grid-column: 1 / 3;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
            }

            .fragment--ReleaseInfo_Contents {
                margin-top: 40px;
            }
            
            .c-headline-lv2 {
                margin-top: 40px;
            }
            `
        ]
    }

    firstUpdated() {

    }

    render() {
        return html`
        <section class="fragment--ReleaseInfo">
            <div class="ly-Inner_Grid -lg">
                <div class="fragment--ReleaseInfo_Container">
                    <h2 class="c-headline-lv6 u-uppercase">
                        BLOG
                    </h2>
                    <div class="c-headline-lv2">ブログ</div>
                    <div class="fragment--ReleaseInfo_Contents">
                        まだ記事がありません。
                        <!-- <ul class="fragment--Carousel_List">
                            <li class="fragment--Carousel_List-Item">
                                <figure class="fragment--Carousel-Item_Image">
                                    <img src="../images/blog-01@2x.jpg" alt="post1">
                                </figure>
                                <div class="fragment--Carousel-Item_Body">
                                    <h3>テスト記事</h3>
                                    <p>テキスト</p>
                                </div>
                            </li>
                            <li class="fragment--Carousel_List-Item">
                                <figure class="fragment--Carousel-Item_Image">
                                <img src="../images/blog-02@2x.jpg" alt="post2">
                                </figure>
                                <div class="fragment--Carousel-Item_Body">
                                    <h3>テスト記事</h3>
                                    <p>テキスト</p>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, ReleaseInfo);