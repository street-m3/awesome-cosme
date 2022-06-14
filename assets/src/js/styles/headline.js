'use strict';

const Headline = () => {
    return css`
    .c-headline-lv1{
        --clamp-size: 12.07729vw;
        font-family:Cormorant Garamond,serif;
        font-family:var(--font-serif-en);
        font-size:clamp(3.125rem,var(--clamp-size),4.1875rem);
        min-height: 0;
    }

    .c-headline-lv1,
    .c-headline-lv2 {
        color:#2d1b0e;
        color: var(--color-text-primary);
        font-weight: 400;
    }

    .c-headline-lv2 {
        --clamp-size: 7.24638vw;
        font-size: clamp(1.875rem,var(--clamp-size),2.375rem);
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.11875rem;
        line-height: 1.32;
        min-height: 0;
        text-align: left
    }

    .c-headline-lv3 {
        color:#2d1b0e;
        color: var(--color-text-primary);
        font-family: var(--font-family-en);
        font-size: 2.25rem;
        font-weight: 400;
        letter-spacing: normal;
        text-align: center;
    }
    .c-headline-lv4 {
        font-size: 1.75rem;
        letter-spacing: .0875rem
    }

    .c-headline-lv4,
    .c-headline-lv5 {
        color:#2d1b0e;
        color:var(--color-text-primary);
        font-weight:400;
        text-align:left;
    }

    .c-headline-lv5{
        font-family: var(--font-family-en);
        font-size: 1.5rem;
        letter-spacing: normal;
    }

    .c-headline-lv6{
        --clamp-size: 2.89855vw;
        align-items: center;
        color:#2d1b0e;
        color: var(--color-text-primary);
        display: flex;
        font-family: Cormorant Garamond,serif;
        font-family: var(--font-serif-en);
        font-size: clamp(.75rem,var(--clamp-size),1.125rem);
        font-weight: 400;
        letter-spacing: normal;
        min-height: 0;
    }

    .c-headline-lv6:before{
        --clamp-size:9.66184vw;
        background-color:#d3d3d3;
        background-color: var(--color-accent-gray);
        content: "";
        display: block;
        height: 1px;
        margin-right: clamp(10px,1.7vw,23.5px);
        min-height: 0;
        width: clamp(40px,var(--clamp-size),60px);
    }

    .c-headline-number{
        counter-reset: num;
    }

    .c-headline-number\:index{
        counter-increment: num;
        display: inline-block;
    }
    .c-headline-number\:index:before{
        content: counter(num,decimal-leading-zero);
    }
    `;
}