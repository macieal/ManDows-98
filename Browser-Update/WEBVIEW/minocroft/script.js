function install() {
    window.top.postMessage({action: 'showElement', elementId: 'appunlocker'}, '*');
}