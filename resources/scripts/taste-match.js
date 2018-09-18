class Beer {
    constructor(ime, gorcina, slatkoca, gustina, aroma) {
        this.ime = ime;
        this.gorcina = gorcina;
        this.slatkoca = slatkoca;
        this.gustina = gustina;
        this.aroma = aroma;
    }
}

const beers = [
    new Beer('lager', 'slabo', 'jako', 'srednje', 'bez'),
    new Beer('stout', 'jako', 'srednje', 'jako', 'kafa'),
    new Beer('ipa', 'jako', 'jako', 'jako', 'vocna')
];


const buttonFind = document.querySelector('.btn-pronadji');

const getOptionsValue = (optionsId) => {
    const element = document.getElementById(optionsId);
    return element.options[element.selectedIndex].value;
}

buttonFind.addEventListener('click', () => {
    const gorcina = getOptionsValue('gorcina');
    const slatkoca = getOptionsValue('slatkoca');
    const gustina = getOptionsValue('gustina');
    const aroma = getOptionsValue('aroma');

    
    const beersMatches = beers.map((beer) => {
        let matchCount = 0;
        if (beer.gorcina === gorcina) matchCount++;
        if (beer.slatkoca === slatkoca) matchCount++;
        if (beer.gustina === gustina) matchCount++;
        if (beer.aroma === aroma) matchCount++;
        
        return matchCount;
    });
    let bestMatchIndex = beersMatches.indexOf(Math.max(...beersMatches));
    
    
//    console.log(beers);
//    console.log(beersMatches);
//    console.log(beers[bestMatchIndex]);
    const beerpic = beers[bestMatchIndex];
    console.log(beerpic);
    document.getElementById('bottle-pic').src = beerpic.ime + '.jpg';
});
