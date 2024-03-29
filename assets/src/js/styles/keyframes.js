import { css } from "lit";

export default css`
/*=============================================
    Loop Slider
=============================================*/
@keyframes translate-Loop-Primary {
    0% {
        transform: translateX(100%);
    }

    to {
        transform: translateX(-100%);
    }
}

@keyframes translate-Loop-Secondary {
    0% {
        transform: translateX(0);
    }

    to {
        transform: translateX(-200%);
    }
}


/*=============================================
    Modal Component Animation
=============================================*/

@keyframes zoomIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }

    100% {
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        visibility: hidden;
    }

    100% {
        opacity: 1;
        visibility: visible;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        visibility: visible;
    }

    100% {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(100%);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateX(100%);
        visibility: hidden;
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-3rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-3rem);
    }
}


.c-revealer-sentence,
.c-revealer-sentence::after {
    animation-delay: var(--animation-delay, 2s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.c-revealer-sentence {
    --animation-delay: var(--delay, 0);
    --animation-duration: var(--duration, 800ms);
    --animation-iterations: var(--iterations, 1);
    position: relative;
    animation-name: clip-text;
    color: var(--color-text-primary);
    white-space: normal;
    cursor: default;
}

.c-revealer-sentence.-yellow {
    --animation-delay: 800ms;
    display: inline-block;
}

.c-revealer-sentence::after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f98b;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
}

.c-revealer-sentence.-yellow::after {
    background-color: #f2f98b;
}

.c-revealer-sentence.-purple::after {
    background-color: #7f40f1;
}

@keyframes clip-text {
    from {
        clip-path: inset(0 100% 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes text-revealer {

    0%,
    50% {
        transform-origin: 0 50%;
    }

    60%,
    100% {
        transform-origin: 100% 50%;
    }

    60% {
        transform: scaleX(1);
    }

    100% {
        transform: scaleX(0);
    }
}

/*=============================================
    Scroll Observer Animation
=============================================*/

.anim-fadein {
    --duration: 0.8s;
    --timing-function: ease;
    transition: opacity var(--duration) var(--timing-function), visibility var(--duration) var(--timing-function);
}

.anim-fadein[data-animate="false"] {
    opacity: 0;
    visibility: hidden;
}

.anim-fadein[data-animate="true"] {
    opacity: 1;
    visibility: visible;
}

.anim-fadein:nth-child(1) {
    transition-delay: 0s;
}

.anim-fadein:nth-child(2) {
    transition-delay: 0.15s;
}

.anim-fadein:nth-child(3) {
    transition-delay: 0.25s;
}

.anim-fadein:nth-child(4) {
    transition-delay: 0.35s;
}

.anim-fadein:nth-child(5) {
    transition-delay: 0.45s;
}

.anim-fadein:nth-child(6) {
    transition-delay: 0.55s;
}

.anim-fadein:nth-child(7) {
    transition-delay: 0.65s;
}

.anim-fadein:nth-child(8) {
    transition-delay: 0.75s;
}

.anim-fadein:nth-child(9) {
    transition-delay: 0.85s;
}

.anim-fadein:nth-child(10) {
    transition-delay: 0.95s;
}

.anim-fadein-up {
    --duration: 0.8s;
    --timing-function: ease;
    --starting-position: 30px;
    transition: opacity var(--duration) var(--timing-function), transform var(--duration) var(--timing-function), visibility var(--duration) var(--timing-function);
}

.anim-fadein-up[data-animate="false"] {
    opacity: 0;
    visibility: hidden;
    transform: translateY(var(--starting-position));
}

.anim-fadein-up[data-animate="true"] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.anim-fadein-up:nth-child(1) {
    transition-delay: 0s;
}

.anim-fadein-up:nth-child(2) {
    transition-delay: 0.15s;
}

.anim-fadein-up:nth-child(3) {
    transition-delay: 0.25s;
}

.anim-fadein-up:nth-child(4) {
    transition-delay: 0.35s;
}

.anim-fadein-up:nth-child(5) {
    transition-delay: 0.45s;
}

.anim-fadein-up:nth-child(6) {
    transition-delay: 0.55s;
}

.anim-fadein-up:nth-child(7) {
    transition-delay: 0.65s;
}

.anim-fadein-up:nth-child(8) {
    transition-delay: 0.75s;
}

.anim-fadein-up:nth-child(9) {
    transition-delay: 0.85s;
}

.anim-fadein-up:nth-child(10) {
    transition-delay: 0.95s;
}
`;