import { css } from 'lit';

export default css`
    .o-Typography-Landing {
        line-height: 2;
        letter-spacing: 0.05em;
    }

    .o-userWriting-Area {
        --reading-title: 1.71;
    }

    .o-userWriting-Area > * {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .o-userWriting-Area > :first-child {
        margin-top: 0!important;
    }

    .o-userWriting-Area > :last-child {
        margin-bottom: 0!important;
    }

    .o-userWriting-Area p:not([class]) {
        line-height: 1.71;
        line-height: var(--reading-title);
        letter-spacing: var(--tracking-wide);
        font-size: 1rem;
    }

    .o-userWriting-Area h3:not([class]) {
        line-height: var(--reading-title);
        letter-spacing: var(--tracking-wide);
        font-weight: normal;
        font-family: var(--font-serif-ja) !important;
        font-size: 1.5rem;
    }
`