import { LitElement, html, css } from 'lit';
import { presets } from '../env/env';
import reset from '../styles/reset';
import container from '../styles/container';
import headline from '../styles/headline';
import typography from '../styles/typography';
import utils from '../styles/utils';

const tagName = 'pages-commerce';

export class Commerce extends LitElement {
    static get styles() {
        return [
            reset, 
            container, 
            headline,
            typography,
            utils,
            css`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            
            .c-headline-lv2 {
                margin-top: 40px; 
                margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }`
        ]
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">Commerce</div>
                <h2 class="c-headline-lv2">特定商取引法に基づく表記</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <h3>店舗名</h3>
                    <p>${presets.siteName}</p>
                    <h3>所在地</h3>
                    <p>〒150-0002 東京都渋谷区渋谷3丁目21-12</p>
                    <h3>電話番号</h3>
                    <p>0120-0000-0000</p>
                    <h3>販売URL</h3>
                    <p>http://--------</p>
                    <h3>お支払い方法</h3>
                    <ol>
                        <li>クレジットカード決済</li>
                        <li>代金引換決済</li>
                    </ol>
                    <h3>商品代金以外の必要金額</h3>
                    <p>代金引換決済の場合、代金引換手数料<br />代金引換手数料：１万円未満○円　３万円未満○円　３万円以上○円　１０万円以上３０万円まで○円です。送料：本州○円　四国・九州・北海道：○円　沖縄：○円離島料金は掛かりません。</p>
                    <h3>販売数量</h3>
                    <p>1点〜</p>
                    <h3>商品引渡し時期</h3>
                    <p>前払いの場合、指定日が無ければ入金確認後○営業日以内で発送致します。代引の場合、指定日が無ければご注文確認後○日営業日以内で発送致します。その他の支払方法の場合、指定日が無ければご注文後○日営業日以内で発送致します。後払いの場合、商品到着後○日以内にご入金ください。</p>
                    <h3>商品引渡し方法</h3>
                    <p>当方にて手配後、運送会社による配送</p>
                    <h3>返品・不良品について</h3>
                    <p>「不良品・当社の商品の間違い」の場合は当社が負担いたします。配送途中の破損などの事故がございましたら、弊社までご連絡下さい。送料・手数料ともに弊社負担で早急に新品をご送付致します。</p>
                    <ol>
                        <li>【返品対象】「不良品・当社の商品の間違い」の場合</li>
                        <li>【返品時期】ご購入後○日以内にご連絡があった場合に返金可能となります。</li>
                        <li>【返品方法】メールにて返金要請してください。○日以内にご購入代金を指定の口座へお振込みいたします。</li>
                    </ol>
                    <h3>表現、及び商品に関する注意書き</h3>
                    <p>本商品に示された表現や再現性には個人差があり、必ずしも利益や効果を保証したものではございません。</p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Commerce);