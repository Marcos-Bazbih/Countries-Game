var countries = [
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


var countriesImages = document.getElementsByClassName("countriesImages");
var counter = 0;

for (var i = 0; i < countriesImages.length; i++) {
    countriesImages[i].src = countries[i].countryFlag;
};

playGameBtn.onclick = () => {
    playGameBtn.innerText = 3;
    var countdownId = window.setInterval(() => {
        playGameBtn.innerText--;
        if (playGameBtn.innerText == 0) {
            window.clearInterval(countdownId);
            playGameBtn.style.display = "none";
        }
    }, 1000);

    var gameIntervalId = window.setInterval(() => {

        for (var i = 0; i < countriesImages.length; i++) {
            countriesImages[i].style.position = "absolute";
            countriesImages[i].style.display = "block";
            countriesImages[i].style.left = `${Math.floor(Math.random() * 90)}vw`;
            countriesImages[i].style.top = `${Math.floor(Math.random() * 30)}vh`;
        };

        countriesImages[0].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[0].style.display = "none";
        };

        countriesImages[1].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[1].style.display = "none";
        };

        countriesImages[2].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[2].style.display = "none";
        };

        countriesImages[3].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[3].style.display = "none";
        };

        countriesImages[4].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[4].style.display = "none";
        };

        countriesImages[5].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[5].style.display = "none";
        };

        countriesImages[6].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[6].style.display = "none";
        };
        countriesImages[7].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[7].style.display = "none";
        };

        countriesImages[8].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[8].style.display = "none";
        };

        countriesImages[9].onclick = (event) => {
            console.log(`X is:${event.x}, Y is:${event.y}`);
            counter++;
            counterParagraph.innerText = counter;
            countriesImages[9].style.display = "none";
        };


        if (counter == 10) {
            goodJobGif.style.display = "block";
            window.clearInterval(gameIntervalId);
            for (var i = 0; i < countriesImages.length; i++) {
                countriesImages[i].style.display = "none";
            };
        }
        else {
            counter = 0;
            counterParagraph.innerText = counter;
        };
    }, 3000);
};