const el = {};

const updateKeyInformation = (ev) => {
    ev.preventDefault();

    const { altKey, key, code, composed, ctrlKey, keyCode, metaKey, shiftKey, } = ev;

    el.keyInfo.textContent = key;

    el.altKeyInfo.textContent = altKey;
    el.codeInfo.textContent = code;
    el.composedInfo.textContent = composed;
    el.ctrlKeyInfo.textContent = ctrlKey;
    el.keyCodeInfo.textContent = keyCode;
    el.metaKeyInfo.textContent = metaKey;
    el.shiftKeyInfo.textContent = shiftKey;
};

const start = () => {
    el.keyInfo = document.querySelector("#info-key");

    el.altKeyInfo = document.querySelector("#info-altKey");
    el.codeInfo = document.querySelector("#info-code");
    el.composedInfo = document.querySelector("#info-composed");
    el.ctrlKeyInfo = document.querySelector("#info-ctrlKey");
    el.keyCodeInfo = document.querySelector("#info-keyCode");
    el.metaKeyInfo = document.querySelector("#info-metaKey");
    el.shiftKeyInfo = document.querySelector("#info-shiftKey");

    document.body.addEventListener("keydown", updateKeyInformation);
};

document.addEventListener("DOMContentLoaded", start);
