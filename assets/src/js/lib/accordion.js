export class Accordion {
    constructor(container, tab) {
        this.accordionContainer = container;
        this.accordionTabs = this.accordionContainer.querySelectorAll(`.${tab}`);
        this.accordionAddCls = 'is-open-panel';
        this.touchEventListener = this.touchEventDetection();
        this.multiSelectDefault = true;
        this.init();
    }

    init() {
        if (!this.accordionContainer) return;
        this._accordion_trigger();
    }

    _accordion_trigger() {
        this.accordionTabs.forEach((item) => {
            item.addEventListener(this.touchEventListener, (e) => {
                e.preventDefault();
                // this._multiSelectable(item);
                item.classList.toggle(this.accordionAddCls);
                const panelItembody = item.nextElementSibling;
                if (item.classList.contains(this.accordionAddCls)) {
                    panelItembody.style.maxHeight = panelItembody.scrollHeight + 'px';
                } else {
                    panelItembody.style.maxHeight = 0;
                }
            });
        });
    }

    _multiSelectable(itemElement) {
        if (this.multiSelectDefault == true) {
            const currentlyPanel = this.accordionContainer.querySelector('.js-accordion-header.is-open-panel');
            if (currentlyPanel && currentlyPanel !== itemElement) {
                currentlyPanel.classList.remove(this.accordionAddCls);
                currentlyPanel.nextElementSibling.style.maxHeight = 0;
            }
        }
    }

    touchEventDetection() {
        return window.ontouchstart ? "touchstart" : "click";
    }
}