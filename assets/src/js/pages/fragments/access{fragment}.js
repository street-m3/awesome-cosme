import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import reset from '../../styles/reset';
import container from '../../styles/container';
import headline from '../../styles/headline';
import utils from '../../styles/utils';
import typography from '../../styles/typography';

const tagName = 'section-access';

export class Access extends LitElement {
    static get styles() {
        return [
            reset,
            container,
            headline,
            utils,
            typography,
            css`

            .fragment--Access {
                --spY: 80px;
                --pcY: 150px;
                --offsetYsp: calc(var(--spY) - (var(--spY) * 2));
                margin-bottom: var(--offsetYsp);
            }

            .fragment--Access_FramePanel {
                grid-column: 1/4;
                z-index: 0;
                position: relative;
            }

            .fragment--Access_Pictures iframe {
                width: 100%;
                -webkit-filter: grayscale(100%);
                -moz-filter: grayscale(100%);
                -ms-filter: grayscale(100%);
                -o-filter: grayscale(100%);
                filter: grayscale(100%);
            }

            .fragment--Access_FramePanel-Details {
                grid-column: 2/4;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
                bottom: var(--spY);
                z-index: 1;
            }
            
            .fragment--Address table {
                width: 100%;
                font-size: 18px;
                line-height: 1.7;
            }

            .fragment--Address table tr td {
                border-bottom: 1px solid var(--color-accent-gray);
                text-align: left;
            }

            .fragment--Address table tr th {
                border-bottom: 1px solid var(--color-text-primary);
                width: 130px;
                text-align: right;
                position: relative;
                font-weight: normal;
            }

            .fragment--Address table tr th::after {
                content: "";
                display: block;
                width: 20px;
                background-color: var(--color-white);
                height: calc(100% + 2px);
                position: absolute;
                bottom: 0;
                top: 0;
                right: -10px;
                border: 1px solid var(--color-white);
            }

            .fragment--Address table tr th,
            .fragment--Address table tr td {
                padding: 20px 24px;
                vertical-align: top;
            }
            
            @media screen and (max-width:768px) {
                .fragment--Address {
                    width: 100%;
                }
                
                .fragment--Address table,
                .fragment--Address table tbody,
                .fragment--Address table tr,
                .fragment--Address table tr th,
                .fragment--Address table tr td {
                    display: block;
                }
                
                .fragment--Address table {
                    width: 100%;
                }
                
                .fragment--Address table tr th,
                .fragment--Address table tr td {
                    width: 100%;
                    padding: 20px 24px;
                }

                .fragment--Address table tr th {
                    text-align: left;
                    overflow: hidden;
                }

                .fragment--Address table tr th::after {
                    content: "";
                    width: 0;
                    height: 0;
                    visibility: hidden;
                    overflow: hidden;
                    border: none;
                }
            }

            @media screen and (min-width: 768px) {
                .fragment--Access {
                    --offsetYpc: calc(var(--pcY) - (var(--pcY) * 2));
                    margin-bottom: var(--offsetYpc);
                }

                .fragment--Access_FramePanel-Details {
                    bottom: var(--pcY);
                }
            }
            `
        ]
    }

    render() {
        return html`
        <section class="fragment--Access">
        <div class="ly-Inner_Grid -lg"> 
            <h2 class="c-headline-lv6 u-uppercase" style="margin-bottom: 40px;">
                Access
            </h2>
            <div class="fragment--Access_FramePanel">
                <figure class="fragment--Access_Pictures">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25311.11572187988!2d-122.26443772835461!3d37.53410281888066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98bc19fb614d%3A0x8d58e65fe3ebea98!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOOCq-ODquODleOCqeODq-ODi-OCouW3niDjg6zjg4Pjg4njgqbjg4Pjg4njg7vjgrfjg4bjgqMg44Os44OD44OJ44Km44OD44OJ44O744K344On44Ki44O844K6!5e0!3m2!1sja!2sjp!4v1656340965065!5m2!1sja!2sjp" width="1440" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" defer></iframe>
                </figure>
            </div>
            <div class="fragment--Access_FramePanel-Details">
                <div class="fragment--Address">
                    <table class="fragment--AddressTable">
                        <tbody>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    住所
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    〒150-0002 東京都渋谷区渋谷3丁目21-12
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    TEL
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    0120-0000-0000
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    FAX
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    0120-0000-0000
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    E-mail
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    sample@mailaddress.com
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    道順
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    <ul class="fragment--AddressTable_DataList">
                                        <li class="fragment--AddressTable_DataList-Item">
                                            • 関越自動車道「川越IC」「鶴ヶ島IC」より約15分
                                        </li>
                                        <li class="fragment--AddressTable_DataList-Item">
                                            • 圏央道「圏央鶴ヶ島IC」「坂戸IC」より約10分 ※約30台分の駐車場/屋根<wbr />付きの駐輪場を完備しております。 
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>`;
    }
}

customElements.get(tagName) || customElements.define(tagName, Access);