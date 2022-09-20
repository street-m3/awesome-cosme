import { LitElement, html, css } from 'lit';
import reset from '../styles/reset';
import container from '../styles/container';
import headline from '../styles/headline';
import typography from '../styles/typography';
import utils from '../styles/utils';

const tagName = 'pages-policy';

export class Policy extends LitElement {
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
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `
        ]
    }

    render() {
        return html`
            <section class="pages-Singular-ComponentBlock">
                <div class="ly-Inner_Grid -lg">
                    <div class="c-headline-lv6 u-uppercase">Privacy Policy</div>
                    <h2 class="c-headline-lv2">プライバシーポリシー</h2>
                    <div class="pages-Singular-Component_Content o-userWriting-Area">
                        <h3>1.個人情報の定義</h3>
                        <p>「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。</p>
                        <h3>2.個人情報の収集</h3>
                        <p>当サービスではサービスのご契約、お問合せをされた際にお客様の個人情報を収集することがございます。収集するにあたっては利用目的を明記の上、適法かつ公正な手段によります。当サービスで収集する個人情報は以下の通りです。</p>
                        <ol>
                            <li>A)お名前、フリガナ</li>
                            <li>B)ご住所</li>
                            <li>C)お電話番号</li>
                            <li>D)メールアドレス</li>
                            <li>E)パスワード</li>
                            <li>F)当サービスとのお取引履歴及びその内容</li>
                            <li>G)上記を組み合わせることで特定の個人が識別できる情報</li>
                        </ol>
                        <h3>3.個人情報の利用</h3>
                        <p>当サービスではお客様からお預かりした個人情報の利用目的は以下の通りです。</p>
                        <ol>
                            <li>A)ご注文の確認、照会</li>
                            <li>B)お問合せの返信時</li>
                        </ol>
                        <p>当サービスでは、下記の場合を除いてはお客様の断りなく第三者に個人情報を開示・提供することはいたしません。</p>
                        <ol>
                            <li>A)法令に基づく場合、及び国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                            <li>B)人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                            <li>C)当サービスを運営する会社の関連会社で個人データを交換する場合</li>
                        </ol>
                        <h3>4.個人情報の安全管理</h3>
                        <p>お客様よりお預かりした個人情報の安全管理はサービス提供会社によって合理的、組織的、物理的、人的、技術的施策を講じるとともに、当サービスでは関連法令に準じた適切な取扱いを行うことで個人データへの不正な侵入、個人情報の紛失、改ざん、漏えい等の危険防止に努めます。</p>
                        <h3>5.個人情報の訂正、削除</h3>
                        <p>お客様からお預かりした個人情報の訂正・削除は下記の問合せ先よりお知らせ下さい。</p>
                        <h3>6.cookie(クッキー)の使用について</h3>
                        <p>当社は、お客様によりよいサービスを提供するため、cookie（クッキー）を使用することがありますが、これにより個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することはございません。※cookie（クッキー）とは、サーバーコンピュータからお客様のブラウザに送信され、お客様が使用しているコンピュータのハードディスクに蓄積される情報です。</p>
                        <h3>7.SSLの使用について</h3>
                        <p>個人情報の入力時には、セキュリティ確保のため、これらの情報が傍受、妨害または改ざんされることを防ぐ目的でSSL（Secure Sockets Layer）技術を使用しております。※SSLは情報を暗号化することで、盗聴防止やデータの改ざん防止送受信する機能のことです。SSLを利用する事でより安全に情報を送信する事が可能となります。</p>
                        <h3>8.お問合せ先</h3>
                        <p>こちらよりお問い合わせください。</p>
                        <h3>9.プライバシーポリシーの変更</h3>
                        <p>当サービスでは、収集する個人情報の変更、利用目的の変更、またはその他プライバシーポリシーの変更を行う際は、当ページへの変更をもって公表とさせていただきます。</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.get(tagName) || customElements.define(tagName, Policy);