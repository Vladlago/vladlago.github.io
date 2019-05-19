$(document).ready(function() {
    $('.freezing-wrap').addClass('freezing-active');
    init();
    $('.freezing-close').on('click', function(e) {
        e.preventDefault();
        $('.freezing-wrap').addClass('freezing-hide');
    });
});
var buyerCounter;
var init = function() {
    var countryVal = countryName();
    buyerCounter = 49;
    var countryValIndex;
    var countryPrice = $('.dynamic-freezing-info--price');
    if (countryVal == 'RUS' || countryVal == 'UKR' || countryVal == 'BLR' || countryVal == 'KAZ') {
        switch (countryVal) {
            case 'RUS':
                countryValIndex = 0;
                countryPrice.text('45 рублей');
                break;
            case 'BLR':
                countryValIndex = 1;
                countryPrice.text('14 000 рублей');
                break;
            case 'UKR':
                countryValIndex = 2;
                countryPrice.text('15 гривен');
                break;
            case 'KAZ':
                countryValIndex = 3;
                countryPrice.text('188 тенге');
                break;
        }
        buyed(countryValIndex);
        setTimeout(function() {
            $('.freezing-wrap').addClass('freezing-active');
        }, 2000);
    }
};
var countryName = function() {
    var countryValue = $('#country').val();
    return countryValue;
};
var buyed = function(countryValIndex) {
    var timeInterval = setTimeout(function tInterval() {
        var lengthTown = arr_buyer.country[countryValIndex].town.length;
        var lengthName = arr_buyer.country[countryValIndex].people_name.length;
        var buyerName = getRandomInt(0, lengthName - 1);
        var buyerTown = getRandomInt(0, lengthTown - 1);
        buyerCounter--;
        $('.freezing-buyer--name').text(arr_buyer.country[countryValIndex].people_name[buyerName]);
        $('.freezing-buyer--town').text(arr_buyer.country[countryValIndex].town[buyerTown]);
        $('.freezing-buyer--flag').removeClass().addClass("freezing-buyer--flag " + arr_buyer.country[countryValIndex].class_flag[0]);
        $('.packages-count').text(buyerCounter);
        $('.freezing-buyer').addClass('freezing-buyer--show');
        setTimeout(function() {
            $('.freezing-buyer').removeClass('freezing-buyer--show');
        }, 5000);
        var randInterval = getRandomInt(10, 15);
        if (buyerCounter > 10) {
            timeInterval = setTimeout(tInterval, randInterval * 2200);
        }
    }, 8000);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}