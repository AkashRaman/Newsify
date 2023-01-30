class WindowsView {

    _clientWidthEls;

    _setClientWidth(el){
        el.style.width = `${document.body.getBoundingClientRect().width}px`;
    }

    addHandler(){
        this._clientWidthEls = document.querySelectorAll('.view-width');
        console.log('working');
        console.log(this._clientWidthEls);

        ['resize','load'].map(event => window.addEventListener(event,() => {
            [...this._clientWidthEls].map(el => this._setClientWidth(el))
        }))
    }
}

export default new WindowsView();