import View from './view.js';
class SliderView extends View{

    _slider = document.querySelector('.slider');
    _sliderElem;
    _slideBtns;
    _slides = document.querySelector('.slider__slides');
    _dots;
    _dotsize = 1;
    _dotMargin = 0.5;
    
    _slideshow;
    
    _dotBox = document.querySelector('.slider__dots');
    _dotElems;
    _indicatorElem;
    _parentElement;
    
    
    loadSlides(slideData){
        console.log(slideData);
        this._render(slideData);
        this._sliderElem = document.querySelectorAll('.slider__slide');
        this._indicatorElem = this._slider.querySelector('.slider__indicator');
        this._setStyle(slideData);
        setTimeout(this._addHandler(), 100);
    }

    _setIndicator(){
        const i = this._slider.dataset.pos;
        const dot = this._dotsize + this._dotMargin * 2;
        const left = dot * i;
        const right = dot * (this._dots - i) - dot;
        this._indicatorElem.style.left = `${left}em`;
        this._indicatorElem.style.right = `${right}em`;
        console.log()
    }

    _setSlidesPos(){
        const slideWidth = 100 / this._dots;
        const pos = this._slider.dataset.pos;
        
        [...this._sliderElem].map(el => el.style.width = `${100 / this._dots}%`);
        this._slides.style.transform = `translateX(-${slideWidth * pos}%)`;
    }
    
    _setStyle(slideData){
        this._dots = slideData.length;
        this._slides.style.width = `${this._dots * 100}%`;
        this._setSlidesPos();
        this._setIndicator();
    }

    _render(slideData){
        this._parentElement = this._dotBox;
        super._render(slideData)
        this._parentElement = this._slides;
        super._render(slideData)
    }

    _generateTitle(title){
        let index = title.slice(1).split("").findIndex(letter => / /.test(letter));;

        // title.split("").every((letter,i) => {
        //     if(span !== `` && (/[A-Z]/.test(span) && !(/[A-Z]/.test(letter))) || ((+ span[-1]) != NaN && ((+ letter) == NaN || letter === " "))){
        //         return false;
        //     }
        //     span = span + letter;
        //     index += 1;
        //     return true;
        //     if(`"‘'`.test(letter)){

        //     }
        // });
        if(/"/.test(title[0])){
            index = title.slice(1).split("").findIndex(letter => /"/.test(letter)) + 1;
        }
        if(/'/.test(title[0])){
            index = title.slice(1).split("").findIndex(letter => /'/.test(letter)) + 1;
        }
        if(/‘/.test(title[0])){
            index = title.slice(1).split("").findIndex(letter => /’/.test(letter)) + 1;
        }
        let span = title.slice(0,index + 1);

        return `<span>${span}</span>${title.slice(index + 1)}`
    }

    _generateMarkup(data) {
        if(this._parentElement == this._dotBox) return `<div class="slider__indicator"></div>` + data.map(d => `<div class="slider__dot" data-pos="${data.indexOf(d)}"></div>`).join("");
        if(this._parentElement == this._slides) return data.map(d => `
            <div class="slider__slide">
                <div class="slider__background" style="background-image: url(${d.image.url})"></div>
                <img class="slider__image" src="${d.image.url}">
                <div class="slider__title"><div class="slider__title__container"><h1>${this._generateTitle(d.title)}</h1><span class="slider__slide__time">Published at: ${d.datePublished.slice(0,10)}</span></div></div>
            </div>`
        ).join("");
    }

    _setDuration(currentPos,newPos, ms){
        return Math.abs(newPos-currentPos) > 6 ? ms * 6 : ms * Math.abs(newPos-currentPos);
    }

    _slideFunc(currentPos,newPos){
        const transition = newPos > currentPos ? `left ${this._setDuration(currentPos,newPos, 0.3)}s ${this._setDuration(currentPos,newPos, 0.1)}s cubic-bezier(.51, .92, .24, 1.15), right ${this._setDuration(currentPos,newPos, 0.3)}s cubic-bezier(.51, .92, .24, 1.15)` : `left ${this._setDuration(currentPos,newPos, 0.3)}s cubic-bezier(.51, .92, .24, 1.15), right ${this._setDuration(currentPos,newPos, 0.3)}s ${this._setDuration(currentPos,newPos, 0.1)}s cubic-bezier(.51, .92, .24, 1.15)`;

                this._slides.style.transition = `transform ${this._setDuration(currentPos,newPos, 0.3)}s cubic-bezier(.51, .92, .24, 1)`;

                this._indicatorElem.style.transition = transition;

                this._slider.setAttribute('data-pos', newPos);
                this._setSlidesPos();
                this._setIndicator();
    }

    _addHandler(){
        this._slideBtns = this._slider.querySelectorAll('.slider__btn');

        [...this._slideBtns].map(slideBtn => {
            slideBtn.addEventListener('click', () => {
                this.cancelSlideshow();

                const direction = slideBtn.getAttribute('data-direction');

                const currentPos = parseInt(this._slider.getAttribute('data-pos'));
                const newPos = (direction == 'Left' ? (currentPos == 0 ? this._dots - 1 : currentPos - 1): (currentPos ==  this._dots - 1 ? 0 : currentPos + 1));

                this._slideFunc(currentPos,newPos);

                this.startSlideshow();
            })
        });

        this._dotElems = document.querySelectorAll('.slider__dot');

        [...this._dotElems].map(dotElem => {
                
            dotElem.addEventListener('click', (e) => {
                this.cancelSlideshow();

                let currentPos = parseInt(this._slider.getAttribute('data-pos'));
                let newPos     = parseInt(dotElem.getAttribute('data-pos'));
                
                this._slideFunc(currentPos,newPos);
                
                this.startSlideshow();
            })
            
        });
    }

    cancelSlideshow(){
        clearInterval(this._slideshow);
    }

    startSlideshow(){
        this._slideshow = setInterval(()=>{
            const currentPos = parseInt(this._slider.getAttribute('data-pos'));
            const newPos = (currentPos == this._dots - 1 ? 0 : currentPos + 1);

            this._slideFunc(currentPos,newPos);
        },5000);
    }
}

export default new SliderView();