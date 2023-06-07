/*

Here are the main things we will likely need to store for each coffee:
name - the name od the coffee
pic - the picture of the coffee
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day - the day of the week
description - a description of the coffee


*/

let myDate = new Date();

let today = myDate.getDay();

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){

return `
<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
`;

}

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 
today = parseInt(today);

switch(today){

    case 1:
        today = "Monday"; 
        
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `Sip on the enchanting fusion of flavors and textures as you delve into the world of bubble tea, 
            where refreshing tea infusions meet chewy tapioca pearls, 
            creating a delightful symphony of sweetness and a playful burst of delight with every sip.`
        };


    break;
    
    case 2:
           today = "Tuesday"; 

            coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            color: "brown",
            day: "Tuesday",
            desc: `
            Experience the perfect marriage of robust espresso and decadent chocolate in every sip of our mocha coffee, 
            as velvety smoothness intertwines with a bittersweet symphony, 
            awakening your senses and leaving you craving for more.`
        };

    break;

    case 3:
        today = "Wednesday";
        
        coffee = {
            name: "Caramel latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel latte",
            color: "dark brown",
            day: "Wednesday",
            desc: `Indulge in the rich, velvety delight of a caramel latte coffee, 
            where smooth espresso harmoniously blends with creamy steamed milk, 
            and a luscious swirl of caramel syrup tantalizes your taste buds`
        };

    break;

    case 4:
           today = "Thursday"; 

            coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            color: "black",
            day: "Thursday",
            desc: `Embark on a refreshing journey with every sip of cold brew coffee, 
            where the bold essence of carefully steeped grounds dances with icy tranquility, awakening your palate to a smooth, 
            invigorating elixir that's perfect for those warm summer days.`
        };

        break;

    case 5:
           today = "Friday"; 

            coffee = {
            name: "Frappuccino",
            pic: "images/Frappuccino.jpg",
            alt: "A picture of a Frappuccino",
            color: "Hazel",
            day: "Friday",
            desc: `Delight in the icy bliss of a Frappuccino coffee, where velvety espresso meets a symphony of flavors, 
            all blended to perfection with creamy milk, ice, and a swirl of irresistible sweetness, 
            creating a delectable treat that will whisk you away to a world of pure indulgence.`
        };

        break;

    case 6:
            today = "Saturday"; 
    
            coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip",
            color: "blue",
            day: "Saturday",
            desc: `Savor the pure essence of a perfectly brewed drip coffee, 
            where the aromatic melodies of freshly ground beans harmonize with the gentle cascade of hot water, 
            resulting in a smooth and robust cup that awakens your senses and fuels your day with unparalleled satisfaction.`
        };

        break;

    case 0:
            today = "Sunday"; 
    
            coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            color: "yellow",
            day: "Sunday",
            desc: `Embrace the cozy flavors of the season with a Pumpkin Spice Latte, 
            where the comforting blend of aromatic spices and creamy steamed milk entwines with rich espresso, 
            creating a warm and indulgent beverage that captures the essence of autumn in every delightful sip.`
        };

        break;


    default:
    today = "Day is unknown";
}


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);