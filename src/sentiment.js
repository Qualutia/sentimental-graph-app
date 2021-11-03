//SENTIMENT ANALYSIS//
let Sentiment = require('sentiment');
let JsSearch = require('js-search');

import data from './Data/main.js'
import initNodes from './script.js'


// DATA COLLECTED FROM TWITTER
import Sandwich from './Data/Sandwich.js';
import Dover from './Data/Dover.js';
import Hythe from './Data/Hythe.js';
import NewRomney from './Data/NewRomney.js';
import Hastings from './Data/Hastings.js';
import Lydd from './Data/Lydd.js';
import Folkestone from './Data/Folkestone.js';
import Faversham from './Data/Faversham.js';
import Margate from './Data/Margate.js';
import Deal from './Data/Deal.js';
import Ramsgate from './Data/Ramsgate.js';
import Tenterden from './Data/Tenterden.js';
import Rye from './Data/Rye.js';
import Winchelsea from './Data/Winchelsea.js';
import Gillingham from './Data/Gillingham.js';
import Bekesbourne from './Data/Bekesbourne.js';
import Eastbourne from './Data/Eastbourne.js';
import Pebsham from './Data/Pebsham.js';
import Pevensey from './Data/Pevensey.js';
import Seaford from './Data/Seaford.js';
import Reculver from './Data/Reculver.js';
import Sarre from './Data/Sarre.js';
import Fordwich from './Data/Walmer.js';
import Walmer from './Data/Walmer.js';
import Stonar from './Data/Stonar.js';
import Brightlingsea from './Data/Brightlingsea.js';
import Birchington from './Data/Birchington.js';
import Ringwould from './Data/Ringwould.js';
import Woodchurch from './Data/Woodchurch.js';
import Kingsdown from './Data/Kingsdown.js';
import WestHythe from './Data/WestHythe.js';

const customTitlebar = require('custom-electron-titlebar');

new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#212121'),
    overflow: "hidden",
    titleHorizontalAlignment: "left",
    enableMnemonics: true,
    menu: null,
    icon: "./icons/app_icon.png"
});

const bar = document.getElementById('searchField');
const hearth = document.getElementById('hearth');
const hearthAnimation = document.getElementById('hearthAnimation');
const button = document.getElementById('search-button')

button.addEventListener('click', () => {
    groupSearch()
})
bar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        groupSearch()
    }
});

function groupSearch() {

    handleSearch(Sandwich, "Sandwich");
    handleSearch(Dover, "Dover");
    handleSearch(Hythe, "Hythe");
    handleSearch(NewRomney, "New Romney");
    handleSearch(Hastings, "Hastings");
    handleSearch(Lydd, "Lydd");
    handleSearch(Folkestone, "Folkestone");
    handleSearch(Faversham, "Faversham");
    handleSearch(Margate, "Margate");
    handleSearch(Deal, "Deal");
    handleSearch(Ramsgate, "Ramsgate");
    handleSearch(Tenterden, "Tenterden");
    handleSearch(Rye, "Rye");
    handleSearch(Winchelsea, "Winchelsea");
    handleSearch(Gillingham, "Gillingham");
    handleSearch(Bekesbourne, "Bekesbourne");
    handleSearch(Eastbourne, "Eastbourne");
    handleSearch(Pebsham, "Pebsham");
    handleSearch(Pevensey, "Pevensey");
    handleSearch(Seaford, "Seaford");
    handleSearch(Reculver, "Reculver");
    handleSearch(Sarre, "Sarre");
    handleSearch(Fordwich, "Fordwich");
    handleSearch(Walmer, "Walmer");
    handleSearch(Stonar, "Stonar");
    handleSearch(Brightlingsea, "Brightlingsea");
    handleSearch(Birchington, "Birchington");
    handleSearch(Ringwould, "Ringwould");
    handleSearch(Woodchurch, "Woodchurch");
    handleSearch(Kingsdown, "Kingsdown");
    handleSearch(WestHythe, "WestHythe");

    initNodes();
}

function handleSearch(database, name) {
    let searchRequest = document.getElementById('searchField').value
    let analysisValuesList = [];
    let analysisResultsList = [];


    let sentiment = new Sentiment();
    let search = new JsSearch.Search('conversation_id');

    search.addDocuments(database);
    search.addIndex('tweet');
    search.addIndex('hashtags');


    if (searchRequest === null || searchRequest === '') return;

    let searchGrabData = search.search(searchRequest);

    for (let tweet in searchGrabData) {
        analysisValuesList.push(searchGrabData[tweet].tweet)
    }


    for (let i = 0; i < analysisValuesList.length; i++) {
        const result = sentiment.analyze(analysisValuesList[i]);
        analysisResultsList.push(result.score)
    }

    let average = sum(analysisResultsList) / analysisResultsList.length;

    //Change hearth and bar values and icons


    changePolarity(name, average)

    if (average > 0) {
        hearth.style.fill = "rgba(95, 184, 129, 0.8)";
        hearthAnimation.style.animationDuration = "3s";
        bar.style.backgroundColor = "rgba(95, 184, 129, 0.1)";
        changeIcon(name, "positive");
    } else if (average < 0) {
        hearth.style.fill = "rgba(237, 108, 92, 0.8)";
        hearthAnimation.style.animationDuration = "1s";
        bar.style.backgroundColor = "rgba(237, 108, 92, 0.1)"
        changeIcon(name, "negative");
    } else {
        hearth.style.fill = "rgba(253, 199, 49, 0.8)";
        hearthAnimation.style.animationDuration = "2s";
        bar.style.backgroundColor = "rgba(253, 199, 49, 0.1)"
        changeIcon(name, "neutral");
    }
}


//HELPERS//
function changeIcon(query, replacement) {
    for (let i = 0; i < data.nodes.length; i++) {
        if (data.nodes[i].id === query) {
            data.nodes[i].group = replacement;
        }
    }
}

function changePolarity(query, replacement) {
    for (let i = 0; i < data.nodes.length; i++) {
        if (data.nodes[i].id === query) {
            data.nodes[i].polarity = replacement;
        }
    }
}

function sum(input) {

    if (toString.call(input) !== "[object Array]")
        return false;

    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}