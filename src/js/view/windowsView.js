class WindowsView {

    _clientWidthEls;

    _setClientWidth(el){
        el.style.width = `${document.body.getBoundingClientRect().width}px`;
    }

    addHandlerUrl(handler){
        window.addEventListener('load', e => {
            console.log(`Event load handler is activated`);
            setTimeout(handler(),10);
        });
    }

    addHandler(){
        this._clientWidthEls = document.querySelectorAll('.view-width');
        console.log('working');
        console.log(this._clientWidthEls);
        [...this._clientWidthEls].map(el => this._setClientWidth(el));
        window.addEventListener('resize',() => {
            [...this._clientWidthEls].map(el => this._setClientWidth(el))
        })
    }
}

export default new WindowsView();