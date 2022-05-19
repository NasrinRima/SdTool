/*
 * This file is part of the sbiCloud Budget module.
 *
 * Copyright (c) 2019-2022, BRAC IT SERVICES LIMITED <http://www.bracits.com>
 */

declare let $: any;
const a =  document.createElement('a');
export function getRootNode(selector) {

    if (typeof selector == 'undefined' || selector === null || selector === '') {
        return $(document);
    }

    return $(selector);
}

export function getAbsoluteUrl(url) {
    a.href = url;
    return a.href;
}
