import { backfaceFixed } from '../utils/backfaceFixed';
// export class Modal {
//     constructor(eventTarget) {
//         this.modal = document.querySelector('.js-modal');
//         this.target = document.querySelectorAll(eventTarget);
//         this.button = document.querySelector('[data-modal-close]');
//         this.content = document.querySelector('[data-modal="content"]');
//         this.touchEventListener = this._touchEventListener();
//         console.log(this.modal + this.target + this.button + this.content)
//     }

//     _touchEventListener() {
//         return window.ontouchstart ? "touchstart" : "click";
//     }
// }

// class Modal



// const modals = document.querySelectorAll('.modal');
// const modalItem = Array.from(document.querySelectorAll('.modal'));

// modals.forEach((modal, index) => {
//     modal.setAttribute('id', `modal-index-${index}`);
//     modal.setAttribute('aria-hidden', `true`);
//     const container = modal.querySelector('.modal-container');
//     container.setAttribute('aria-labelledby', `modal-index-${index}-title`)
//     console.log(modal)
//     console.log(container)
// });

// const container = document.querySelector('.modal-container');
// container.setAttribute('role', 'dialog');
// container.setAttribute('aria-modal', 'true');

// const button = document.querySelector('[data-modal-trigger]');

// console.log(button)







// 



export class Modal {
    constructor(root, options) {
        if (!root) return;

        const defaultOptions = {
            animation: true,
        };

        const entities = {
            overlay: 'modal-overlay',
            container: 'modal-container',
        };

        this.options = Object.assign(defaultOptions, options);
        this.root = document.querySelector(root);
        this.overlay = this.root.querySelector(`.${entities.overlay}`);
        this.container = this.root.querySelector(`.${entities.container}`);
    
        this.init();
        this._event();
    }

    init() {
        // return console.log(this.container);
    }

    _event() {
    }
}