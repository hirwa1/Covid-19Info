// sidebar javascript


const navToggle = document.querySelector('.hamburg');
const navLinks = document.querySelectorAll('.nav-links');

navToggle.addEventListener('click', () => {

    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        document.body.classList.remove('nav-open');
    })
})


//charts js

//confirmed Cases 
const xDailyConfirmedCasesLabels = [];
const yDailyConfirmedCasesData = [];


const yWeeklyConfirmedCasesData = [];
const xWeeklyConfirmedCaseslabels = [];

//confirmed Deaths

const xConfirmedDeathsDailyLabels = [];
const yDailyConfirmedDeathsData = [];

const xWeeklyConfirmedDeathsLabels = [];
const yweeklyConfirmedDeathsData = [];

//vacinnes variables
const xVaccinatedPeopleDailyLabels = [];
const yVaccinatedPeopleDailyData = [];


const xVaccinatedPeopleWeeklyLabels = [];
const yVaccinatedPeopleWeeklyData = [];

let confirmedCasesData = [];
let confirmedDeathData = [];
let vaccinatedPeopleData = [];

let isDisplayingDeathCases = false;
let isDisplayingVaccines = false;
let isWeekly = false;

window.addEventListener('load', function () {
    getConfirmedCasesDailyData();
    getVaccinatedPeopleDailyData();
    getConfirmedDeathsDailyData();
    getTravelRestrictions();
    getAirlineRestritions();




});


const ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan 8", "Mar 14", "May 15", "July 12", "Sept 10", "Nov 9", "Dec 9 "],
        datasets: [{
            label: 'Confirmed Cases',
            data: [200, 400, 800, 1000, 1200, 1500, 2000],
            backgroundColor: 'lightgray',
            borderColor: 'lightgray',
            HoverBorderWidth: '3',
            hoverBorderColor: 'rgba(203, 62, 60, 255)',
            hoverBackgroundColor: 'rgba(203, 62, 60, 255)',
            borderWidth: 1
        }]
    },
    options: {
        tooltips: {

            displayColors: false,
            backgroundColor: 'white',
            titleFontColor: 'black',
            borderColor: 'black',
            callbacks: {
                label: function (tooltipItem, data) {
                    let confirmedCases = tooltipItem.value;
                    let lastConfirmedCases = parseInt(data.datasets[0].data[tooltipItem.index - 1]);

                    let str = "";
                    if (isDisplayingVaccines) {
                        str = "Vaccinated People";
                    } else if (isDisplayingDeathCases) {
                        str = "Confirmed Deaths";
                    } else {
                        str = "Confirmed Cases";
                    }
                    let type = isWeekly ? 'Weekly' : 'Daily'
                    if (lastConfirmedCases > confirmedCases) {
                        let decrease = lastConfirmedCases - confirmedCases;
                        let percentage = (decrease / lastConfirmedCases) * 100;
                        let item1 = confirmedCases + '' + str
                        let item2 = decrease + ' ' + type + ' Increase: '
                        let item3 = percentage + "% " + type + " decrease percentage";
                        return [item1, item2, item3]
                    } else {
                        let increase = confirmedCases - lastConfirmedCases;
                        let percentage = Math.round(increase / lastConfirmedCases * 100) / 10;
                        let item1 = confirmedCases + ' ' + str
                        let item2 = increase + ' ' + type + ' Increase'
                        let item3 = percentage + "% " + type + " increase percentage";
                        return [item1, item2, item3];
                    }
                },

                labelTextColor: function (tooltipItem, chart) {
                    return 'black';
                }
            },


        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                type: 'time',
                gridLines: {
                    display: false
                },
                time: {
                    unit: 'day',
                    unitStepSize: 60,

                }, ticks: {

                    fontColor: "black",
                }

            }],

            yAxes: [{
                position: 'right',
                gridLines: {
                    display: false,
                },
                ticks: {
                    min: 0,
                    fontColor: "black",
                }
            }]
        }
    }
})


function displayDailyConfirmedCases() {


    if (xDailyConfirmedCasesLabels.length == 0) {
        getConfirmedCasesDailyData();
    }

    myChart.reset();
    myChart.data.labels = xDailyConfirmedCasesLabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yDailyConfirmedCasesData;
    myChart.update();
}


function displayWeeklyConfirmedCases() {

    if (xWeeklyConfirmedCaseslabels.length == 0 && xDailyConfirmedCasesLabels.length == 0) {
        getConfirmedCasesDailyData();
        getConfirmedCasesWeeklyData();
    } else if (xWeeklyConfirmedCaseslabels.length == 0 && xDailyConfirmedCasesLabels.length != 0) {
        getConfirmedCasesWeeklyData();
    }
    myChart.reset();
    myChart.data.labels = xWeeklyConfirmedCaseslabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yWeeklyConfirmedCasesData;
    myChart.update();


}

/**Display data on the chart showing the death rate  */

function displayDailyConfirmedDeaths() {



    if (xConfirmedDeathsDailyLabels.length == 0) {
        getConfirmedDeathsDailyData();

    }


    myChart.reset();
    myChart.data.labels = xConfirmedDeathsDailyLabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yDailyConfirmedDeathsData;
    myChart.update();
    myChart.data.datasets[0]["label"] = "Confirmed Deaths";
    myChart.update();

}

function displayWeeklyConfirmedDeaths() {

    if (xWeeklyConfirmedDeathsLabels.length == 0 && xConfirmedDeathsDailyLabels.length == 0) {
        getConfirmedDeathsDailyData();
        getConfirmedDeathsWeeklyData();

    } else if (xWeeklyConfirmedDeathsLabels.length == 0 && xConfirmedDeathsDailyLabels.length != 0) {
        getConfirmedDeathsWeeklyData()
    }

    myChart.reset();
    myChart.data.labels = xWeeklyConfirmedDeathsLabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yweeklyConfirmedDeathsData;
    myChart.update();
    myChart.data.datasets[0]["label"] = "Confirmed Deaths";
    myChart.update();
}

/** Display data on chart  showing the number of vacinnated people **/

function displayDailyVaccinatedPeople() {
    if (xVaccinatedPeopleDailyLabels.length == 0) {
        getVaccinatedPeopleDailyData();

    }

    myChart.reset();
    myChart.data.labels = xVaccinatedPeopleDailyLabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yVaccinatedPeopleDailyData;
    myChart.update();
    myChart.data.datasets[0]["label"] = "The Number of Vaccinated people per hundred";
    myChart.update();

}


function displayWeeklyVaccinatedPeople() {

    if (xVaccinatedPeopleWeeklyLabels.length == 0 && xVaccinatedPeopleDailyLabels == 0) {
        getVaccinatedPeopleDailyData();
        getVaccinatedPeoplesWeeklyData();

    } else if (xVaccinatedPeopleWeeklyLabels.length == 0 && xVaccinatedPeopleDailyLabels != 0) {
        getVaccinatedPeoplesWeeklyData();
    }

    myChart.reset();
    myChart.data.labels = xVaccinatedPeopleWeeklyLabels;
    myChart.update();
    myChart.data.datasets[0]["data"] = yVaccinatedPeopleWeeklyData;
    myChart.update();
    myChart.data.datasets[0]["label"] = "The Number of Vaccinated people per hundred";
    myChart.update();

}

//using api to get the confirmed cases

async function getConfirmedCasesDailyData() {

    if (confirmedCasesData.length == 0) {
        const response = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
        const data = await response.json();
        confirmedCasesData = data.GBR.data;

    }
    confirmedCasesData.forEach(data => {

        xDailyConfirmedCasesLabels.push(data.date);
        yDailyConfirmedCasesData.push(data.total_cases);

    });


}


async function getConfirmedCasesWeeklyData() {

    var i;
    for (i = 0; i < xDailyConfirmedCasesLabels.length; i += 7) {

        xWeeklyConfirmedCaseslabels.push(xDailyConfirmedCasesLabels[i]);
        yWeeklyConfirmedCasesData.push(yDailyConfirmedCasesData[i]);
    }

}

/**********************************Get data of deaths using the csv file and display it on chart showing the number of deaths */

async function getConfirmedDeathsDailyData() {

    if (confirmedDeathData.length == 0) {
        const response = await fetch('../csv/Vaccinated.csv');
        confirmedDeathData = await response.text();

    }

    const rows = confirmedDeathData.split('\n').slice(1);
    rows.forEach(row => {
        const columns = row.split(",");
        if (columns[2] == "United Kingdom") {
            const dateReported = columns[3];
            xConfirmedDeathsDailyLabels.push(dateReported);
            const yConfirmedCase = columns[7];
            yDailyConfirmedDeathsData.push(yConfirmedCase);
        }


    });


}


async function getConfirmedDeathsWeeklyData() {

    var i;
    for (i = 0; i < xConfirmedDeathsDailyLabels.length; i += 7) {

        xWeeklyConfirmedDeathsLabels.push(xConfirmedDeathsDailyLabels[i]);
        yweeklyConfirmedDeathsData.push(yDailyConfirmedDeathsData[i]);
    }

}


/**********************************Get data and display it on chart showing the number of people vacinnated */



async function getVaccinatedPeopleDailyData() {



    if (vaccinatedPeopleData.length == 0) {
        const response = await fetch('../csv/vaccinated.csv');
        vaccinatedPeopleData = await response.text();
    }

    const rows = vaccinatedPeopleData.split('\n').slice(1);
    rows.forEach(row => {
        const columns = row.split(",");
        if (columns[2] == "United Kingdom") {
            const dateReported = columns[3];
            xVaccinatedPeopleDailyLabels.push(dateReported);
            const yConfirmedCase = columns[40];
            yVaccinatedPeopleDailyData.push(yConfirmedCase);
        }


    });
}

async function getVaccinatedPeoplesWeeklyData() {

    var i;
    for (i = 0; i < xVaccinatedPeopleDailyLabels.length; i += 7) {

        xVaccinatedPeopleWeeklyLabels.push(xVaccinatedPeopleDailyLabels[i]);
        yVaccinatedPeopleWeeklyData.push(yVaccinatedPeopleDailyData[i]);
    }

}


/*************************************** Display graph to the user **********************************8**/



function displayData() {



    let dropdownSelectedValue = $("select option:selected").text();
    let toggleButtonValue = $(':focus').text();

    console.log(dropdownSelectedValue);
    console.log(toggleButtonValue);

    if ((dropdownSelectedValue == "Confirmed Cases" && toggleButtonValue == "Daily")) {
        isDisplayingDeathCases = false;
        isDisplayingVaccines = false;
        isWeekly = false;
        displayDailyConfirmedCases();
    } else if (dropdownSelectedValue == "Confirmed Cases" && toggleButtonValue == "Weekly") {
        isDisplayingDeathCases = false;
        isDisplayingVaccines = false;
        isWeekly = true;
        displayWeeklyConfirmedCases();
    } else if ((dropdownSelectedValue == "Confirmed Death" && toggleButtonValue == "Daily")) {
        isDisplayingDeathCases = true;
        isDisplayingVaccines = false;
        isWeekly = false;
        displayDailyConfirmedDeaths();
    } else if (dropdownSelectedValue == "Confirmed Death" && toggleButtonValue == "Weekly") {
        isDisplayingDeathCases = true;
        isDisplayingVaccines = false;
        isWeekly = true;
        displayWeeklyConfirmedDeaths();
    } else if (dropdownSelectedValue == "Vaccinated People" && toggleButtonValue == "Daily") {
        isDisplayingDeathCases = false;
        isDisplayingVaccines = true;
        isWeekly = false;
        displayDailyVaccinatedPeople();
    } else if (dropdownSelectedValue == "Vaccinated People" && toggleButtonValue == "Weekly") {
        isDisplayingDeathCases = false;
        isDisplayingVaccines = true;
        isWeekly = true;
        displayWeeklyVaccinatedPeople();
    } else {
        isDisplayingDeathCases = false;
        isWeekly = false;
        displayDailyConfirmedCases();
    }
}

$('#caseTitle').click(function () {

    document.getElementById('Cases').innerHTML = commaSeparateNumber(yDailyConfirmedCasesData[yDailyConfirmedCasesData.length - 1]);
})


$('#DeathTitle').click(function () {

    document.getElementById('Deaths').innerHTML = commaSeparateNumber(yDailyConfirmedDeathsData[yDailyConfirmedDeathsData.length - 1]);


})


$('#vacinTitle').click(function () {
    let result = yVaccinatedPeopleDailyData.map(i => Number(i));
      result.sort(function (a, b) { return parseFloat(a) - parseFloat(b) });
      console.log(result);

    document.getElementById('Vaccine').innerHTML = result[result.length - 1] + "%";


})

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}


//Travel Restrictions Data 

async function getTravelRestrictions() {

    let result1 = "";
    let result2 = "";
    let result3 = ""

    const response = await fetch('../csv/TravelRestrictions.json');
    const data = await response.json();

    data.forEach(obj => {

        if (obj.adm0_name == "United Kingdom of Great Britain & Northern Ireland") {
            result1 += "<strong>Published: </strong> " + obj.published + "<br><strong>Source: </strong> " + obj.sources + "<strong>Latest News:</strong> " + obj.info;
            result2 += obj.optional2;
            result3 += obj.optional3;
        }


    });
    $('#travel').html(result1);
    $('#quarantine').html(result2);
    $('#certificate').html(result3);
}

async function getAirlineRestritions() {

    let result = "";
    const response = await fetch('../csv/AirlineRestrictions.json');
    const data = await response.json();

    data.forEach(obj => {

        if (obj.adm0_name == "United Kingdom of Great Britain & Northern Ireland") {
            result += "<br><strong>Published:</strong> " + obj.published + "<br><strong>Source:</strong> " + obj.source + "<br><strong>Airline:</strong> " + obj.airline + "<br>" + obj.info + "<br>";
        }


    });

    $('#Airline').html(result);

}

//Display travel information

function displayTravelRestritions() {

    document.getElementById('travel-one').style.display = "none";
    document.getElementById('travel-data').style.display = "block";
}

function closeDataTravelRestritions() {
    document.getElementById('travel-one').style.display = "block";

    if (document.getElementById('travel-two')) {
        document.getElementById('travel-data').style.display = "none";
    }

}

function displayAirlineRestrictions() {
    document.getElementById('airline-one').style.display = "none";
    document.getElementById('airline-data').style.display = "block";
}

function closeAirlineRestrictions() {
    document.getElementById('airline-one').style.display = "block";

    if (document.getElementById('airline-two')) {
        document.getElementById('airline-data').style.display = "none";
    }

}

function displayQuarantineRestrictions() {
    document.getElementById('quarantine-one').style.display = "none";
    document.getElementById('quarantine-data').style.display = "block";
}

function closeQuarantineRestrictions() {
    document.getElementById('quarantine-one').style.display = "block";

    if (document.getElementById('quarantine-two')) {
        document.getElementById('quarantine-data').style.display = "none";
    }

}


function displayCertificateRestrictions() {
    document.getElementById('certificate-one').style.display = "none";
    document.getElementById('certificate-data').style.display = "block";
}

function closeCertificateRestrictions() {
    document.getElementById('certificate-one').style.display = "block";

    if (document.getElementById('certificate-two')) {
        document.getElementById('certificate-data').style.display = "none";
    }

}










