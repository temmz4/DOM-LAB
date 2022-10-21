//  DOM Menu Lab

//  Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");





let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");






let aEl;

for(let count = 0; count < menuLinks.length; count++) {
 aEl = document.createElement("a");
 aEl.setAttribute("href", menuLinks[count].href);
 aEl.textContent = menuLinks[count].text;
topMenuEl.append(aEl);
}



let subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'


// 5.1
let topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

//5.2
function handleClick(evt) {
    evt.preventDefault();

    let clickedLink = evt.target;
    if(clickedLink.tagName !== 'A') {
        return;
    } else {
        console.log(clickedLink);

        if(clickedLink.classList.contains('active')) {
            clickedLink.classList.remove('active'); // 5.3.1
            showingSubMenu = false;                // 5.3.2
            subMenuEl.style.top = '0';              // 5.3.3
            return;                                // 5.3.4
        }

        topMenuLinks.forEach(function(aLink) {     //5.4
            aLink.classList.remove('active');
        });

        clickedLink.classList.add('active');       //5.5

        function buildSubMenu(linkObject) {        //5.7.1b
                subMenuEl.innerHTML = '';          //5.8.1
                linkObj.subLinks.forEach(function(subLinkObj) { //5.8.2
                    let link = document.createElement('a');         //5.8.2.1
                    link.setAttribute('href', subLinkObj.href);        //5.8.2.2
                    link.textContent = subLinkObj.text;
                    subMenuEl.append(link);
                })
        }

subMenuEl.addEventListener('click', function(subLinkEvt) {  //6.0.1
        subLinkEvt.preventDefault();                        //6.0.2
        let subMenuClickedLink = subLinkEvt.target;
       if(subMenuClickedLink.tagName !== 'A') {             // 6.0.3
        return;                                             // 6.0.4
       } else {
        console.log(subMenuClickedLink);

        showingSubMenu = false;                             //6.1.1
        subMenuEl.style.top = '0';                           // 6.1.2

        topMenuLinks.forEach(function(aLink) {              //6.2
            aLink.classList.remove('active');
        });
        
       }
})

        let linkObj = menuLinks.find(function(aLinkObj) { //5.6.1
            return aLinkObj.text === clickedLink.textContent; 
        });

        if(clickedLink.getAttribute('href') === '#') { //5.6
            showingSubMenu = true;
            buildSubMenu([linkObj]);                   // 5.7.1a
            subMenuEl.style.top = '100%' //5.7.2
        } else {
            showingSubMenu = false;
            console.log(showingSubMenu);
            subMenuEl.style.top = '0';                   // 5.7.2b

        }


    }

    mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>` //6.4
}





topMenuEl.addEventListener('click', handleClick);













































































































































// // 5.1.1
// let topMenuLinks = topMenuEl.getElementsByTagName('a');

// //5.1.2
// let showingSubMenu = false;

// //  ===== 5.2.1 =====
// topMenuEl.addEventListener('click', handleClick);
// // ===== 5.2.2 =====
// function handleClick(evt) {
//     evt.preventDefault();
//     // ===5.2.3 ===
//     if(evt.target.tagName === "A") {
//         console.log(evt.target.textContent)
//         console.log(evt.target.classList)
//         showingSubMenu = false;
//         subMenuEl.style.top = '0'
//     // ===5.4.1 ===
//     if(evt.target.tagName ==='A') {
//         evt.target.classList.remove('active')
//         console.log('hi')
//         }
//     // ===5.5.1===    
//     if(evt.target.tagName === 'A') {
//         evt.target.classList.add('active')
//         console.log('add active')
//     }    
//     } 
//     return;

//     // if(evt.target.tagName ==='A') {
//     //     evt.target.classList.remove('active')
//     //     console.log('hi')
//     // }
//     // return;
// }
































































































// // const topMenuLinks = document.querySelectorAll('a')
// // console.log(topMenuLinks)









// // for (let i = 0; i < menuLinks.length; i++) {
// //     console.log('menuLinks')

// //     console.log(menuLinks[i])
// //     // console.log(menuLinks[i].subLinks)

// //     console.log(menuLinks[i].hasOwnProperty('subLinks'))


// //     showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
// //     if (menuLinks[i].hasOwnProperty('subLinks')) {

// //       console.log(menuLinks[i].subLinks)
// //     }

// //   }