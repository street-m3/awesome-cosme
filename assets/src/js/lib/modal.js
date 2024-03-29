const backfaceFixed = (fixed) => {
    const documentFirstSelector = document.getElementsByTagName('body')[0];
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y') || "0" ;

    const scrollbarWidth = window.innerWidth - documentFirstSelector.clientWidth;
    documentFirstSelector.style.paddingRight = fixed ? `${scrollbarWidth}px` : '';
    document.documentElement.style.minHeight = fixed ? `100vh` : '';

    const styles = {
        height: '100vh',
        left: '0',
        overflow: 'hidden',
        position: 'fixed',
        top: `-${scrollY}`,
        width: '100vw',
    }

    // style merged
    Object.keys(styles).forEach((key) => {
        document.body.style[key] = fixed ? styles[key] : '';
    });
}

const Throttle = (callback, options) => {
    const config = {
        speed: 250,
        control: true,
    }
    
    const state = Object.assign(config, options);

    let isExpanded = state.control;
    if (isExpanded) return console.log('destroy');

    isExpanded = true;

    setTimeout(() => {
        callback();
        isExpanded = false;
    }, state.speed);
}

const documentSetCSSVariables = () => {
    return document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}

const scrollObserver = () => {
    window.addEventListener('scroll', () => {
        Throttle(documentSetCSSVariables,
            {
                speed: 250,
                control: false
            }
        )
    }, false);

    return window.removeEventListener('scroll', Throttle, false);
}

scrollObserver();

const FOCUSABLE = 'a[href], input:not([disabled]):not([type="hidden"]):not([aria-hidden]), select:not([disabled]):not([aria-hidden]), textarea:not([disabled]):not([aria-hidden]), button:not([disabled]):not([aria-hidden]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])';

export class Modal {
    constructor(root, modal, options) {
        this.modal = modal;
        this.root = root;

        if (!this.modal) return;

        const config = {
            openTrigger: 'data-modal-target',
            closeTrigger: 'data-modal-close',
            openClass: 'is-open',
            disableScroll: false,
            disableFocus: false,
            awaitCloseAnimation: false,
            awaitOpenAnimation: false,
            closeTime: 400,
            startTime: 400,
            contentWrapper: ''
        };

        this.options = Object.assign(config, options);
        this.touchEventHandler = this._touchEventHandler();

        this.openTrigger = this.root.querySelectorAll(`[${this.options.openTrigger}]`);
        this.closeTrigger = this.root.querySelectorAll(`[${this.options.closeTrigger}]`);
        // this.contentWrapper = document.querySelector(`${this.options.contentWrapper}`);
        this.focusableElements = this.root.querySelectorAll(FOCUSABLE);

        if (!this.openTrigger) {
            return console.error('[Modal: Error Message] openTriggerは必須です。');
        }

        if (!this.closeTrigger) {
            return console.error('[Modal: Error Message] closeTriggerは必須です。');
        }

        // if (!this.contentWrapper) {
        //     return console.error('[Modal: Error Message] contentWrapperは必須です。')
        // }

        this.init();
    }

    init() {
        this.modalAttributes();
        this._showModal();
        this._closeModal();
        this._focusModalOnKeyDown();
    }

    _showModal() {
        this.openTrigger.forEach((element) => {
            element.addEventListener(this.touchEventHandler, (e) => {
                this._open(e);
            });
        });
    }

    _closeModal() {
        this.closeTrigger.forEach((element) => {
            element.addEventListener(this.touchEventHandler, (e) => {
                if (e.currentTarget === e.target) {
                    this._close();
                }
            });
        });
    }

    _focusModalOnKeyDown() {
        this.modal.addEventListener('keydown', (e) => {
            this._onKeydown(e);
        });
    }

    _open(event) {
        const targetTrigger = event.currentTarget;
        const modalId = targetTrigger.getAttribute(`${this.options.openTrigger}`);
        const targetModal = this.root.querySelector(`#${modalId}`);

        targetModal.style.display = '';
        targetModal.setAttribute('aria-hidden', 'false');

        if (this.options.disableScroll) {
            backfaceFixed(true);
        }

        // if (this.contentWrapper) this.contentWrapper.setAttribute('inert', '');

        if (this.options.awaitOpenAnimation) {
            setTimeout(() => {
                targetModal.classList.add(this.options.openClass);
                targetModal.removeAttribute('style');
            }, this.options.startTime);
        } else {
            targetModal.classList.add(this.options.openClass);
            targetModal.removeAttribute('style');
        }

        setTimeout(() => {
            targetModal.focus();
        }, 100);
    }

    _close() {
        this.modal.setAttribute('aria-hidden', 'true');
        this.modal.setAttribute('inert', '');

        const scrollY = parseInt(document.body.style.top || '0') * -1;

        // if (this.contentWrapper) {
        //     this.contentWrapper.removeAttribute('inert');
        // }

        setTimeout(() => {
            if (this.options.disableScroll) {
                backfaceFixed(false);
            }

            this.modal.removeAttribute('inert', '');
            this.modal.classList.remove(this.options.openClass);
            this.modal.style.display = 'none';

            window.scrollTo({
                top: scrollY,
                left: 0,
                behavior: 'auto'
            });

        }, this.options.closeTime);
    }

    _onKeydown(event) {
        if (!this.options.disableScroll) return;

        const firstFocusableElement = this.focusableElements[0];
        const lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
        const selectTab = !event.shiftKey && event.code === 'Tab';
        const selectTabShift = event.shiftKey && event.code === 'Tab';

        if (selectTab && document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
        }

        if (selectTabShift && document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
        }

        if (event.code === 'Escape') {
            this._close();
        }
    }

    modalAttributes() {
        this.modal.setAttribute('role', 'dialog');
        this.modal.setAttribute('aria-hidden', 'true');
        this.modal.setAttribute('aria-modal', 'true');
        this.modal.setAttribute('tabindex', '-1');
        this.modal.style.display = 'none';


        document.documentElement.style.setProperty('--modal-animation-close', `${this.options.closeTime}ms`);
        document.documentElement.style.setProperty('--modal-animation-start', `${this.options.startTime}ms`);

        this.openTrigger.forEach((element) => {
            element.setAttribute('aria-haspopup', 'dialog');
        });
    }

    _touchEventHandler() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
}