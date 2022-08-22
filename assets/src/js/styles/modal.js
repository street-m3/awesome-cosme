import { css } from 'lit';

export default css`
.component-scope-modal[aria-hidden=false]{display:block}
.component-scope-modal[aria-hidden=true] .component-scope-modal-container {-webkit-animation:fadeOut var(--modal-animation-close) ease-in-out forwards;animation:fadeOut var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal[aria-hidden=false] .component-scope-modal-container{-webkit-animation:fadeIn var(--modal-animation-close) ease-in-out forwards;animation:fadeIn var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal .component-scope-modal-container{align-items:center;justify-content:center}
.component-scope-modal .component-scope-modal-inner{max-height:80%;padding:3px;width:80%}
.component-scope-modal[aria-hidden=true] .component-scope-modal-inner{-webkit-animation:zoomOut var(--modal-animation-close) ease-in-out forwards;animation:zoomOut var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal[aria-hidden=false] .component-scope-modal-inner{-webkit-animation:zoomIn var(--modal-animation-close) ease-in-out forwards;animation:zoomIn var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal .component-scope-modal-inner:before{content:"";display:block;padding-top:56.25%}
.component-scope-modal .component-scope-modal-content{bottom:0;left:0;position:absolute;right:0;top:0}
.component-scope-modal-container{align-items:flex-start;background-color:rgba(0,0,0,.3);display:flex;height:100%;justify-content:center;left:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:10000;z-index:var(--zindex-modal-container)}
.component-scope-modal-inner{background-color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.2);cursor:default;margin:2rem;max-height:80%;max-width:80%;padding:2rem;position:relative;width:400px}
.component-scope-modal-headline{font-family:var(--font-setif-en);font-weight:400}
.component-scope-modal-close{align-items:center;background-color:#fff;background-color:var(--color-white);border-radius:50%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.2);color:#2d1b0e;color:var(--color-text-primary);display:flex;font-size:1.5rem;height:3rem;justify-content:center;position:absolute;right:-1.5rem;top:-1.5rem;width:3rem;z-index:1}
.component-scope-modal-close:after{transform:rotate(-45deg)}.component-scope-modal-close:before{transform:rotate(45deg)}
.component-scope-modal-close:after,.component-scope-modal-close:before{background-color:#2d1b0e;background-color:var(--color-text-primary);bottom:0;content:"";display:inline-flex;height:2px;left:0;margin:auto;position:absolute;right:0;top:0;width:16px}
.component-scope-modal-content{overflow:hidden;position:relative;width:100%}
.component-scope-modal-content>:not(img, video),.component-scope-modal-footer{margin-top:.8rem}
.component-scope-modal-fotter-button{font-weight:700}
.component-scope-modal-inner img, .component-scope-modal-inner video{display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}
`;