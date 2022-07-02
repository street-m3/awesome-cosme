import { smoothScroll } from '../../lib/utils/smooth';

export const updateViewPages = (root) => {
    const app = document.getElementById('app');
    const roots = root;
    const anchors = roots.querySelectorAll('a');
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            if (anchor.getAttribute("href") === "/404") {
                app.dataset.animate = 'false';
                history.pushState(null, null, e.target.href);
                smoothScroll(0);
                app.innerHTML = '<pages-error></pages-error>';
                setTimeout(() => {
                    app.dataset.animate = 'true';
                }, 800)
            }
        })
    });
}
