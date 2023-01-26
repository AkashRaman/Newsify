export default class View{
    _data;

    _insert(markup){
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    _render(data){
        const markup = this._generateMarkup(data);
        this._clear();
        this._insert(markup);
    }
}