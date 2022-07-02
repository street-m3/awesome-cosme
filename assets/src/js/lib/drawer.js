import { fixedHeaderResolveScroll } from './utils/smooth';
import { backfaceFixed } from './utils/backfaceFixed';

export const ResponsiveHandler = (header, breakpoints) => {
    const responsive = window.matchMedia(`(min-width:${breakpoints}px)`).matches;

    if (header) {
        console.info('[ResponsiveHandler] デスクトップ用のヘッダーメニューが読み上げ対象です。')
        const ishidden = true;
        return responsive ? header.setAttribute('aria-hidden', !ishidden) : header.setAttribute('aria-hidden', ishidden);
    } else {
        console.warn('[ResponsiveHandler] デスクトップ用のヘッダーメニューが存在しません。')
    }
}

export class Drawer {
    
    /**
     * 
     * @param {object} root 
     * @param {boolean} closed 
     * @param {object} options 
     * @returns 
     */
    constructor(root, closed, options) {
        this.root = root;
        if (!this.root) return;

        const defaultOptions = {
            focusvisible: 'data-focus-visible', //body && Overlay
            button: 'js-Drawer-Button',
            screenScope: 'js-Drawer-Overlay',
            navDrawer: 's-Drawer_nav',
            locations: 'a[href*="#"]',
            group: 's-Drawer_navLink-Group',
        };

        this.options = Object.assign(defaultOptions, options);

        /**
         * * @type {object} focusvisible ドロワー開閉を識別するdata属性
         * * @type {object} button ドロワーボタン
         * * @type {object} screenScope フォーカス時の背景
         * * @type {object} navDrawer ドロワーナビメニューリスト
         * * @type {object} locations ドロワーナビメニューリンク
         * * @type {boolean} closed メニュー押下時、自動的にドロワーを閉じるかを真偽値を設定
         * * @type {number} breakpoints ドロワーの非表示領域
         * * @type {boolean} responsive タッチデバイスが有効な場合、PCメニューを読み上げない
         */
        this.focusvisible = this.root.querySelectorAll(`[${this.options.focusvisible}]`);
        this.button = this.root.querySelector(`.${this.options.button}`);
        this.screenScope = this.root.querySelector(`.${this.options.screenScope}`);
        this.navDrawer = this.root.querySelector(`.${this.options.navDrawer}`);
        this.locations = this.navDrawer.querySelectorAll(`${this.options.locations}`);
        this.closed = closed;
        // private this.group
        this.group = this.root.querySelectorAll(`.${this.options.group}`);
        this.touchEventListener = this._touchEventListener();
        this.init();
    }

    init() {
        this._event(this.button);
        this._event(this.screenScope);
        this._AutomaticOperation();
    }

    /**
     * 
     * @param {object} elements trigger Objects
     */
    _event(elements) {
        elements.addEventListener(this.touchEventListener, (e) => {
            e.preventDefault();
            this._open();
            this._focusState();
        });
    }

    /**
     * aria-expandedの切替
     */
    _open() {
        const isOpen = 'true';
        const isExpanded = this.button.getAttribute('aria-expanded') === isOpen;
        this.button.setAttribute('aria-expanded', !isExpanded);
        this.navDrawer.setAttribute('aria-hidden', isExpanded);
        this.#_TextSlideAnimation(!isExpanded);
    }

    /**
     * フォーカス時、背面固定しスクロールを阻止
     */
    _focusState() {
        this.focusvisible.forEach((element) => {
            if (element.getAttribute('data-focus-visible') === 'true') {
                element.dataset.focusVisible = 'false';
                backfaceFixed(false);
            } else {
                element.dataset.focusVisible = 'true';
                backfaceFixed(true);
            }
        });
    }

    /**
     * 
     * @returns ページ内リンクを押下後、スムーススクロール + ドロワーをクローズ
     */
    _AutomaticOperation() {
        if (!this.locations) return console.warn('[Drawer] ターゲットのリンクが正しく設定されていないか存在しません。');
        if (this.closed) {
            this.locations.forEach((element) => {
                element.addEventListener(this.touchEventListener, (e) => {
                    fixedHeaderResolveScroll(e);
                    this.button.click();
                }, { passive: true });
            });
        }
    }

    // Private method Text Slide Animation
    #_TextSlideAnimation(isExpanded) {
        Array.prototype.forEach.call(this.group, element => {
            isExpanded ? setTimeout(() => {
                element.classList.add('is-show');
            }, 500) : element.classList.remove('is-show');
        });
    }

    /**
     * 
     * @returns touchEventListeners
     */
    _touchEventListener() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
}