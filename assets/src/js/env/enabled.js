const EnabledScripts = () => {
    const mode = false;
    let Html = document.documentElement;

    if (Html.nodeType && mode) {
        Html.setAttribute('data-js-enabled', 'true');
        console.info('JavaScript is loading properly!');
    }

    return Html = null;
}

EnabledScripts();