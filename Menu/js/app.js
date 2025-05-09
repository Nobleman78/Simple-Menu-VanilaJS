const menu = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/Menu/images/ButterMik.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Milk Shake",
        category: "lunch",
        price: 13.99,
        img: "/Menu/images/Milkshake.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Burger",
        category: "snacks",
        price: 6.99,
        img: "/Menu/images/Burger.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Lemon Juice",
        category: "breakfast",
        price: 20.99,
        img: "/Menu/images/LemonJuice.webp",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Coca Cola",
        category: "lunch",
        price: 22.99,
        img: "/Menu/images/CocaCola.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Egg Omlet",
        category: "breakfast",
        price: 18.99,
        img: "/Menu/images/EggOmlet.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Yugurt",
        category: "breakfast",
        price: 8.99,
        img: "/Menu/images/Yogurt.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Chicken Fry",
        category: "lunch",
        price: 12.99,
        img: "/Menu/images/ChickenFry.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Milk",
        category: "night",
        price: 16.99,
        img: "/Menu/images/Milk.avif",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;

    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtn = categories.map(function (btn) {
        return `
        <button type="button" class="filter-btn" data-id=${btn}>
          ${btn}
        </button>
        `
    }).join("")
    btnContainer.innerHTML = categoryBtn;

    const filterButton = document.querySelectorAll('.filter-btn');
    filterButton.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(item){
                if(category === item.category){
                    return item;
                }
            })
            if(category === 'all'){
                diplayMenuItems(menu)
            }
            else{
                diplayMenuItems(menuCategory)
            }
           
        })
    })



}