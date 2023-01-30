import View from "./view.js";

class HeaderView extends View{

    _data = {
        more: [
            {name: 'Business', class: 'business', icon: `<i class="fa-solid fa-briefcase"></i>`, topic: "Business"},
            {name: 'Technology', class: 'technology', icon: `<i class="fa-solid fa-microchip"></i>`, topic: "Technology"},
            {name: 'Science', class: 'science', icon: `<i class="fa-solid fa-atom"></i>`, topic: "Science"},
            {name: 'Education', class: 'education', icon: `<i class="fa-solid fa-school"></i>`, topic: "Education"},
            {name: 'Life Style', class: 'lifestyle', icon: `<i class="fa-solid fa-martini-glass-citrus"></i>`, topic: "LifeStyle"},
            {name: 'Crime', class: 'crime', icon: `<i class="fa-solid fa-handcuffs"></i>`, topic: "Crime"},
            {name: 'Weather', class: 'weather', icon: `<i class="fa-solid fa-cloud-sun"></i>`, topic: "Weather"},
            {name: 'Health', class: 'health', icon: `<i class="fa-solid fa-heart-pulse"></i>`, topic: "Health"},
            {name: 'Environment', class: 'environment', icon: `<i class="fa-solid fa-tree"></i>`, topic: "Environment"},
            {name: 'Crypto', class: 'crypto', icon: `<i class="fa-brands fa-bitcoin"></i>`, topic: "Crypto"},
            {name: 'Politics', class: 'politics', icon: `<i class="fa-solid fa-landmark"></i>`, topic: "Politics"}
        ],
        sports: [
            {name: 'Cricket', class: 'cricket', icon: ``, topic: "Cricket"},
            {name: 'FIFA', class: 'fifa', icon: ``, topic: "FIFA"},
            {name: 'NFL', class: 'nfl', icon: ``, topic: "NFL"},
            {name: 'MLB', class: 'mlb', icon: ``, topic: "MLB"},
            {name: 'NBA', class: 'nba', icon: ``, topic: "NBA"},
            {name: 'WNBA', class: 'wnba', icon: ``, topic: "WNBA"},
            {name: 'NHL', class: 'nhl', icon: ``, topic: "NHL"},
            {name: 'Boxing & MMA', class: 'boxing', icon: ``, topic: "Boxing"},
            {name: 'Golf', class: 'golf', icon: ``, topic: "Golf"},
            {name: 'Olympics', class: 'olympics', icon: ``, topic: "Olympics"},
            {name: 'Tennis', class: 'tennis', icon: ``, topic: "Tennis"},
            {name: 'Basketball', class: 'basketball', icon: ``, topic: "Basketball"},
            {name: 'Chess', class: 'chess', icon: ``, topic: "Chess"}
        ],
        entertainment:[
            {name: 'Cinema', class: 'cinema', icon: ``, topic: "Cinema"},
            {name: 'Music', class: 'music', icon: ``, topic: "Music"},
            {name: 'Hollywood', class: 'hollywood', icon: ``, topic: "Hollywood"},
            {name: 'Bollywood', class: 'bollywood', icon: ``, topic: "Bollywood"},
            {name: 'Kollywood', class: 'kollywood', icon: ``, topic: "Kollywood"},
            {name: 'Tollywood', class: 'tollywood', icon: ``, topic: "Tollywood"},
            {name: 'Mollywood', class: 'mollywood', icon: ``, topic: "Mollywood"},
            {name: 'Web Series', class: 'web-series', icon: ``, topic: "webseries"},
        ],
        search: [{name: "Search"}],
        world:[
            {name: 'International', class: 'international', icon: ``, topic: "International"},
            {name: 'Europe', class: 'europe', icon: ``, topic: "Europe"},
            {name: 'Asia', class: 'asia', icon: ``, topic: "Asia"},
            {name: 'Middle East', class: 'middle-east', icon: ``, topic: "MiddleEast"},
            {name: 'India', class: 'india', icon: ``, topic: "India"},
            {name: 'Americas', class: 'americas', icon: ``, topic: "Americas"},
            {name: 'United Kingdom', class: 'uk', icon: ``, topic: "UK"},
            {name: 'Ukraine', class: 'ukraine', icon: ``, topic: "Ukraine"},
            {name: 'Australia', class: 'australia', icon: ``, topic: "Australia"},
            {name: 'China', class: 'china', icon: ``, topic: "China"},
            {name: 'Japan', class: 'japan', icon: ``, topic: "Japan"},
        ]
    }

    _grandParentEl = document.querySelector('.more-list');
    _parentElement = document.querySelector('.more-list__nav');
    _navBtns;
    _navClickBtns;

    _render(data_id){
        if(this._parentElement.dataset.topic == data_id){
            return;
        }
        const data = this._data[data_id];
        this._parentElement.dataset.topic = data_id;

        super._render(data);
    }
    
    _generateMarkup(data){
        return data.map(d => {
            if(d.name == "Search"){
                return `<form class="search" id="s-0">
                            <button class="btn btn--medium search__btn">
                                <i class="fa-solid fa-magnifying-glass search__icon"></i>
                            </button>
                            <input type="text" class="search__field" placeholder="Search..." />
                        </form>`
            }
            return `
            <li class="nav__item">
                <button class="nav__btn nav__btn__${d.class}" data-topic = "${d.class}">
                    <a href="./?name=${d.topic}">
                        ${d.icon}
                        <span>${d.name}</span>
                    </a>
                </button>
            </li>`}
        ).join("");
    }

    _openListOnClick(id){
        this._grandParentEl.classList.remove('hover');
        this._grandParentEl.dataset.list_id = id;
        this._render(id);
    }

    _openListOnHover(id) {
        this._grandParentEl.classList.add('hover');
        this._grandParentEl.dataset.list_id = id;
        this._render(id);
    }

    addHandlerUrl(handler){
        ['hashchange','load'].forEach(event => window.addEventListener(event,e => handler()));
    }

    addHandler() {
        window.addEventListener('click', e => {
            const target = e.target;
            if ((target.closest('.more-list') || this._grandParentEl.classList.contains('hover')) || target.closest('.click__btn')){
                return;
            };
            [...this._navBtns].map(btn => btn.classList.remove("disable"));
            this._grandParentEl.classList.add('hover');
            if (target.closest('.topic__item')) this._openListOnHover(target.closest('.topic__item').childNodes[1].dataset.data_id);
            
            
        })
        this._navClickBtns = document.querySelectorAll('.click__btn');
        [...this._navClickBtns].map(btn => btn.addEventListener('click', e => {
            const id = e.target.closest('.nav__btn').dataset.data_id;
            if(id === this._grandParentEl.dataset.list_id && !(this._grandParentEl.classList.contains('hover'))){
                this._grandParentEl.classList.add('hover');
                return;
            }
            [...this._navBtns].map(btn => btn.classList.add("disable"));
            this._openListOnClick(id);
        }));

        this._navBtns = document.querySelectorAll('.topic__btn');
        [...this._navBtns].map(btn => btn.addEventListener('mouseover', e => this._openListOnHover(e.target.closest('.nav__btn').dataset.data_id)));
    }
}

export default new HeaderView();

