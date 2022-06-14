export class SlideShow {
    constructor(container, elements, options) {

        const defaultOptions = {
            delay: 5000,
            fader: 500,
            counter: 0,
            zoom: 'data-effect',
            dotted: true,
        };

        this.options = Object.assign(defaultOptions, options);

        this.stylesheet = document.styleSheets;
        this.useSheet = this.stylesheet[this.stylesheet.length - 1];
        this.container = container;
        this.pictures = elements;
        this.delay = this.options.delay;
        this.fader = this.options.fader;
        this.counter = this.options.counter;
        this.dotted = this.options.dotted;
        this.zoom = this.options.zoom;

        this._init();
    }

    _init() {
        if (!this.container) return false;
        this._process();
    }

    _process() {
        this.pictures[0].dataset.slideActive = 'true';
        if (this.pictures.length < 2) return console.warn('スライド画像を2枚以上用意して設定してください。');
        setInterval(() => {
            if (this.counter < this.pictures.length - 1) {
                let currentPicture = this.pictures[this.counter];
                let hasNextPicture = this.pictures[++this.counter];
                if (this.container.getAttribute(this.zoom) === 'zoom') {
                    this._zoomAnimation(currentPicture, hasNextPicture);
                } else {
                    this._internalAttribute(currentPicture, hasNextPicture);
                }
            } else {
                let currentPicture = this.pictures[this.counter]; //fadeOut
                let hasNextPicture = this.pictures[this.counter = 0]; //fadeIn
                if (this.container.getAttribute(this.zoom) === 'zoom') {
                    this._zoomAnimation(currentPicture, hasNextPicture);
                } else {
                    this._internalAttribute(currentPicture, hasNextPicture);
                }
            }
        }, this.delay)
    }

    _internalAttribute(currentState, secondState) {
        currentState.dataset.slideActive = 'false';
        secondState.dataset.slideActive = 'true';
    }

    _zoomAnimation(currentState, secondState) {
        currentState.dataset.slideActive = 'false';
        secondState.dataset.slideActive = 'true';
        secondState.dataset.zoomResolve = 'true';
        setTimeout(() => {
            currentState.dataset.zoomResolve = 'false';
        }, this.fader);
    }

    _transparent(element) {
        return element.style.opacity = 1;
    }
}