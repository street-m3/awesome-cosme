import { render } from 'lit';
import { smoothScroll } from './lib/utils/smooth';
import './components/layouts/wrapper';
import './pages/fragments/slider{fragment}';
import './pages/fragments/about{fragment}';
import './pages/fragments/sidebar{fragment}';
import './pages/fragments/products{fragment}';
import './pages/fragments/proposal{fragment}';
import './pages/fragments/releaseinfo{fragment}';
import './pages/fragments/access{fragment}';
import './pages/fragments/faq{fragment}';
import './pages/company';
import './pages/policy';
import './pages/terms';
import './pages/commerce';
import './pages/contact';
import './pages/404';

const app = document.getElementById('app');

setTimeout(() => {
    app.dataset.animate = 'true';
}, 800)

export class Router {
    constructor(root, anchors) {
        this.navbar = root;
        this.anchors = root.querySelectorAll(anchors);
        this.init();
    }

    init() {
        this._navbarAttributePath();
        this._popstateHandler();
        this._documentTrigger();
        this._routerMain();
    }

    async _routerMain() {
        const routes = [
            {
                path: "/",
                data: () => app.innerHTML = `
                <section-sidebar></section-sidebar>
                <section-slider-component></section-slider-component>
                <gl-wrapper>
                    <section-about id="index_id01"></section-about>
                    <section-products id="index_id02"></section-products>
                    <section-proposal></section-proposal>
                    <section-release-info id="index_id03"></section-release-info>
                    <section-access id="index_id04"></section-access>
                    <section-faq id="index_id05"></section-faq>
                </gl-wrapper>
                `,
            },
            {
                path: "/company",
                data: () => app.innerHTML = '<pages-company></pages-company>',
            },
            {
                path: "/policy",
                data: () => app.innerHTML = '<pages-policy></pages-policy>',
            },
            {
                path: "/terms",
                data: () => app.innerHTML = '<pages-terms></pages-terms>',
            },
            {
                path: "/commerce",
                data: () =>  app.innerHTML = '<pages-commerce></pages-commerce>',
            },
            {
                path: "/contact",
                data: () => app.innerHTML = '<pages-contact></pages-contact>',
            },
            ,
            {
                path: "/404",
                data: () => app.innerHTML = '<pages-error></pages-error>',
            },
        ];

        const currentRouteMatches = routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path,
            }
        });

        let match = currentRouteMatches.find(currentRouteMatch => currentRouteMatch.isMatch);

        if (!match) {
            match = {
                route: routes[value],
                isMatch: false,
            }
        }

        // String(i)
        match.route.data(match)
    } 

    // DOMをdata属性で取得する
    _documentTrigger() {
        this.anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                if (e.target.matches("[data-content-anchor]")) {
                    e.preventDefault();
                    app.dataset.animate = 'false';
                    history.pushState(null, null, e.target.href);
                    smoothScroll(0);
                    setTimeout(() => {
                        this._navbarAttributePath();
                        this._routerMain();
                        app.dataset.animate = 'true';
                    }, 800);
                }
            }, false);
        });
    }

    _popstateHandler() {
        window.addEventListener('popstate', (e) => {
            this._navbarAttributePath();
            this._routerMain();
        });
    }

    _navbarAttributePath() {
        return this.navbar.setAttribute('path', location.pathname);
    }
}