const COUNTRIES_ARRAY = [
    {
        countryName: "Israel",
        countryFlag: "https://cdn.pixabay.com/photo/2018/01/28/17/42/flag-3114272_960_720.jpg"
    },
    {
        countryName: "Ethiopia",
        countryFlag: "https://cdn.pixabay.com/photo/2012/04/10/23/17/ethiopia-26943__340.png"
    },
    {
        countryName: "USA",
        countryFlag: "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_960_720.png"
    },
    {
        countryName: "Italy",
        countryFlag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_960_720.png"
    },
    {
        countryName: "Spain",
        countryFlag: "https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428_960_720.png"
    },
    {
        countryName: "Brazil",
        countryFlag: "https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_960_720.png"
    },
    {
        countryName: "England",
        countryFlag: "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg"
    },
    {
        countryName: "Portugal",
        countryFlag: "https://cdn.pixabay.com/photo/2021/05/28/00/38/portugal-6289508_960_720.png"
    },
    {
        countryName: "Germany",
        countryFlag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_960_720.png"
    },
    {
        countryName: "China",
        countryFlag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/china-162389_960_720.png"
    },
];

const countriesImages = document.getElementsByClassName("countriesImages");

let counter = 0;

for (let country of COUNTRIES_ARRAY) {
    flagsSection.innerHTML += `<img src="${country.countryFlag}" alt="" class="countriesImages">`
}

playGameBtn.onclick = () => {
    playGameBtn.disabled = true;
    playGameBtn.innerText = 3;
    let countdownId = setInterval(() => {
        playGameBtn.innerText--;
        if (playGameBtn.innerText == 0) {
            window.clearInterval(countdownId);
            playGameBtn.style.display = "none";
        }
    }, 1000);

    let gameIntervalId = setInterval(() => {
        for (let country of countriesImages) {
            let positionLeft = `${Math.floor(Math.random() * 90)}%`;
            let positionTop = `${Math.floor(Math.random() * 60)}%`;
            country.style = `position: absolute; display: block; left: ${positionLeft}; top: ${positionTop}`;
            country.onclick = () => {
                counter++;
                counterParagraph.innerText = counter;
                country.style.display = "none";
            }
        }
        if (counter == 10) {
            clearInterval(gameIntervalId);
            flagsSection.innerHTML = `<img src="./gif-good-job.gif" alt="" id="goodJobGif">`
        }
        else {
            counterParagraph.innerText = counter = 0;
        };
    }, 3000);
};