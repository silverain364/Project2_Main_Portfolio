
const links = document.querySelectorAll('aside .link');
const allMenu = document.querySelector('.allMenu');
const allMenuBtn = document.querySelectorAll('.allMenu li a');
const sections = document.querySelectorAll('#container>section'); // 기존 유지
let pageNum = 0;
let totalNum = sections.length;

init(pageNum);

window.addEventListener('scroll', function () {
    let scroll = window.scrollY || window.pageYOffset;

    for (let i = 0; i < totalNum; i++) {
        if (scroll > sections[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < sections[i].offsetTop - window.outerHeight / 1.5 + sections[i].offsetHeight) {

            pageNum = i;
            init(pageNum);
            funcObj[`f_${pageNum}`]();
        }
    }
});

let funcObj = {
    f_0: function () {
        // console.log('hero 섹션');
    },
    f_1: function () {
        // console.log('about 섹션');
    },
    f_2: function () {
        // console.log('work 섹션');
    },
    f_3: function () {
        // console.log('contact 섹션');
    }
};

funcObj['f_0']();

function init(i) {
    links.forEach((link) => link.classList.remove('active'));
    allMenuBtn.forEach((menu)=>menu.classList.remove('active'))
    sections.forEach((section) => section.classList.remove('current'));

    links[i].classList.add('active');
    sections[i].classList.add('current');
}

const sectionClassNames = ['hero', 'about', 'work', 'contact'];

links.forEach(function (link, index) {
    link.addEventListener('click', function () {
        init(index);

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `.${sectionClassNames[index]}`, // 해당 클래스를 가진 섹션으로 이동
                autoKill: false
            }
        });
    });
});

allMenuBtn.forEach(function (menu, index) {
    menu.addEventListener('click', function () {
        init(index);

        gsap.to(window, {
            // duration: 1,
            scrollTo: {
                y: `.${sectionClassNames[index+1]}`, // 해당 클래스를 가진 섹션으로 이동
                autoKill: false
            }
        });

        header.classList.remove('allMenu-open');

    });
});
