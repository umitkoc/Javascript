var slider = [{
        name: "iphone 6",
        description: "iphone 6 satıştaki rekabet...",
        price: "3500 TL",
        image: "iphone6.jpg"

    },
    {
        name: "iphone 7",
        description: "iphone 7 satıştaki rekabet...",
        price: "4200 TL",
        image: "iphone7.jpg"
    },
    {
        name: "Samsung A5",
        description: "Samsung A5 satıştaki rekabet...",
        price: "2750 TL",
        image: "samsunga5.jpg"
    }

];
var index = -1;
setInterval(function() {
    var date = new Date();
    document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000);
setInterval(Continue, 3000);

function Continue() {
    index++;
    if (index > 2) {
        index = 0;
    }
    document.getElementById('image').src = slider[index].image;
    document.getElementById('body').innerHTML = slider[index].description;
    document.getElementById('footer').innerHTML = slider[index].price;
    document.getElementById('headers').innerHTML = slider[index].name;
    console.log(index);
}