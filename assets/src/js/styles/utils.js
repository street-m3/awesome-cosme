'use strict';

const Utils = () => {
    return css`
    .u-content-area.-top {
        padding-top: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
    }

    .u-content-area.-bottom {
        padding-bottom: 100px;
    }

    .u-title-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .u-flex {
        display: flex;
    }

    .u-flex-wrap {
        flex-wrap: wrap;
    }

    .u-flex-bet {
        justify-content: space-between;
    }

    .u-flex-content-center {
        align-items: center;
    }

    .u-flex-justify-center {
        justify-content: center;
    }

    .u-flex-row {
        flex-direction: row;
    }

    .u-flex-column {
        flex-direction: column;
    }

    .u-flex-none {
        display: block !important;
    }

    .u-visual-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    .u-under-line {
        border-bottom: 1px solid currentColor;
    }

    .u-uppercase {
        text-transform: uppercase;
    }

    .u-capitalize {
        text-transform: capitalize;
    }

    .u-brsp {
        display: inline-block;
    }

    .u-brpc {
        display: none;
    }

    @media screen and (min-width: 768px) {
        .u-brsp {
            display: none;
        }

        .u-brpc {
            display: inline-block;
        }
    }`
};

export default { Utils };