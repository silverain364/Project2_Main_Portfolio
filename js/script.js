gsap.registerPlugin(ScrollTrigger)

const logo = document.querySelector('.logo a');
const mobBtnLine = document.querySelectorAll('.mob-btn span')
const topBtn = document.querySelector('.fixedTop')

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;

  if (scroll > 250) {
    topBtn.classList.add('On')
      logo.style.color = "#fff"
      mobBtnLine.forEach(span => {
        span.style.backgroundColor = "#fff";
      });
  }
  else {
    topBtn.classList.remove('On')
    logo.style.color = "#000"
    mobBtnLine.forEach(span => {
      span.style.backgroundColor = "#000";
    });
  }
});

topBtn.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const header = document.querySelector('header')
const mobBtn = document.querySelector('.mob-btn')

mobBtn.addEventListener('click', () => {

  let scroll = window.scrollY;
  header.classList.toggle('allMenu-open')

  if (scroll > 250) {
  if (!header.classList.contains('allMenu-open')) {
      logo.style.color = "#fff"
      mobBtnLine.forEach(span => {
        span.style.backgroundColor = "#fff";
      });
    }
    else if(header.classList.contains('allMenu-open')){
      logo.style.color = "#000"
      mobBtnLine.forEach(span => {
        span.style.backgroundColor = "#000";
      });
    }
  }
})

const circle = gsap.timeline({ repeat: -1, repeatDelay: 2 })

  .to('.circle', 0.5, { width: '9vw' })
  .to('.circle', 0.5, { width: '20vw' })


const scene1 = gsap.timeline({
  // duration:.5
})

ScrollTrigger.create({
  animation: scene1,
  trigger: ".about",
  start: "top 20%",
  end: "top 80%",
  scrub: 2
})


scene1.to('.skill-list > div li > *', {
  opacity: 1,
  stagger: .2,
  duration: .2
})

scene1.to('.pg-wrap .pg.pg1', {
  width: '95%',
  delay: -.5
})
scene1.to('.pg-wrap .pg.pg2', {
  width: '90%',
  delay: -.5
})
scene1.to('.pg-wrap .pg.pg3', {
  width: '80%',
  delay: -.5
})
scene1.to('.pg-wrap .pg.pg4', {
  width: '80%',
  delay: -.5
})
scene1.to('.pg-wrap .pg.pg5', {
  width: '90%',
  delay: -.5
})
scene1.to('.pg-wrap .pg.pg6', {
  width: '90%',
  delay: -.5
})

const swiper = new Swiper(".workSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const scswiper = new Swiper(".scrollSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});



//work 리스트 grid 행마다 개수에 따라 line 정리
function applyLargeScreenLogic() {
  const ulElements = document.querySelectorAll(".work-list");

  ulElements.forEach((ul) => {
    const workItems = ul.querySelectorAll(".work-item");

    workItems.forEach((item, index) => {
      if (index >= 3) {
        const topLine = item.querySelector(".topLine-wrap");
        if (topLine) topLine.style.opacity = "1";
      }
      if (index % 3 === 0) {
        const leftLine = item.querySelector(".leftLine-wrap");
        if (leftLine) leftLine.style.opacity = "1";
      }
    });
  });
}

function applySmallScreenLogic() {
  const ulElements = document.querySelectorAll(".work-list");

  ulElements.forEach((ul) => {
    const workItems = ul.querySelectorAll(".work-item");

    workItems.forEach((item, index) => {
      if (index >= 1) {
        const topLine = item.querySelector(".topLine-wrap");
        if (topLine) topLine.style.opacity = "1";
      }
      // 모두 적용
      const leftLine = item.querySelector(".leftLine-wrap");
      leftLine.style.opacity = "1";
    });
  });
}

function applyMediumScreenLogic() {
  const ulElements = document.querySelectorAll(".work-list");

  ulElements.forEach((ul) => {
    const workItems = ul.querySelectorAll(".work-item");

    workItems.forEach((item, index) => {
      if (index >= 2) {
        const topLine = item.querySelector(".topLine-wrap");
        if (topLine) topLine.style.opacity = "1";
      }
      if (index % 2 === 0) {
        const leftLine = item.querySelector(".leftLine-wrap");
        if (leftLine) leftLine.style.opacity = "1";
      }
    });
  });
}

function resetAllLines() {
  document.querySelectorAll(".topLine-wrap, .leftLine-wrap").forEach((el) => {
    el.style.opacity = "0";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const mqMedium = window.matchMedia("(max-width: 1460px)");
  const mqSmall = window.matchMedia("(max-width: 1040px)");

  function handleScreenChange() {
    resetAllLines();

    if (mqSmall.matches) {
      applySmallScreenLogic();
    } else if (mqMedium.matches) {
      applyMediumScreenLogic();
    } else {
      applyLargeScreenLogic();
    }
  }

  mqSmall.addEventListener("change", handleScreenChange);
  mqMedium.addEventListener("change", handleScreenChange);
  handleScreenChange(); // 초기 실행
});



//contact-wrap hover될 때 문구 변경
const cWraps = document.querySelectorAll('.c-wrap');

const originalTexts = {
  name: document.querySelector('.c-wrap.name .txt').textContent,
  tel: document.querySelector('.c-wrap.tel .txt').textContent,
  email: document.querySelector('.c-wrap.email .txt').textContent,
};

cWraps.forEach(wrap => {
  const txt = wrap.querySelector('.txt');

  wrap.addEventListener("mouseover", () => {
    if (wrap.classList.contains('name')) {
      txt.textContent = "→ It's Me!";
    } else if (wrap.classList.contains('tel')) {
      txt.textContent = "→ Call Me!";
    } else if (wrap.classList.contains('email')) {
      txt.textContent = "→ Mail Me!";
    }
  });

  wrap.addEventListener("mouseout", () => {
    if (wrap.classList.contains('name')) {
      txt.textContent = originalTexts.name;
    } else if (wrap.classList.contains('tel')) {
      txt.textContent = originalTexts.tel;
    } else if (wrap.classList.contains('email')) {
      txt.textContent = originalTexts.email;
    }
  });
});


const messages = [
  "work together!",
  "talk with me!",
  "make it happen!",
  "team up now!"
];

let msgIndex = 0;

const titCircle = document.querySelector('.tit-circle');
const circleText = document.querySelector('.circle-text');

// 측정용 숨은 요소 생성 (circleText 기준으로 측정)
const measurer = document.createElement('span');
measurer.style.position = 'absolute';
measurer.style.visibility = 'hidden';
measurer.style.whiteSpace = 'nowrap';
measurer.style.display = 'inline-block';
measurer.style.top = '-9999px';
measurer.style.left = '-9999px';
document.body.appendChild(measurer);

// 정확한 너비 측정 함수
function getAccurateWidth(text) {
  measurer.textContent = text;

  // .circle-text와 동일한 스타일 복사
  const textStyles = getComputedStyle(circleText);
  for (let prop of [
    "fontSize", "fontFamily", "fontWeight", "letterSpacing",
    "textTransform", "lineHeight"
  ]) {
    measurer.style[prop] = textStyles[prop];
  }

  // .tit-circle의 padding, border 너비 계산
  const circleStyles = getComputedStyle(titCircle);
  const paddingX = parseFloat(circleStyles.paddingLeft) + parseFloat(circleStyles.paddingRight);
  const borderX = parseFloat(circleStyles.borderLeftWidth) + parseFloat(circleStyles.borderRightWidth);

  // 고정 너비 여유를 추가해서 최종 너비 계산
  const textWidth = measurer.offsetWidth + paddingX + borderX;

  const fontSize = parseFloat(textStyles.fontSize); // px 단위
  const extra = fontSize * 1.75;

  return textWidth + extra; // 추가 여유를 더한 최종 너비
}

function getHashOnlyWidth() {
  const hashSpan = titCircle.querySelector('span'); // 첫 번째 <span>, 즉 #
  measurer.textContent = hashSpan.textContent;

  const hashStyles = getComputedStyle(hashSpan);
  for (let prop of [
    "fontSize", "fontFamily", "fontWeight", "letterSpacing",
    "textTransform", "lineHeight", "fontStyle", "boxSizing"
  ]) {
    measurer.style[prop] = hashStyles[prop];
  }

  const circleStyles = getComputedStyle(titCircle);
  const paddingX = parseFloat(circleStyles.paddingLeft) + parseFloat(circleStyles.paddingRight);
  const borderX = parseFloat(circleStyles.borderLeftWidth) + parseFloat(circleStyles.borderRightWidth);
  const fontSize = parseFloat(hashStyles.fontSize);
  const extra = fontSize * 0.05; // 여유 좀만

  return measurer.offsetWidth + paddingX + borderX - extra;
}

function animateTextChange() {
  const hashOnlyWidth = getHashOnlyWidth();

  // 1단계: 너비 줄이기
  gsap.to(titCircle, {
    duration: 1,
    width: hashOnlyWidth,
    ease: "power1.inOut",
    onComplete: () => {
      // 2단계: 텍스트 변경
      msgIndex = (msgIndex + 1) % messages.length;
      const newText = messages[msgIndex];
      circleText.textContent = newText;

      // 3단계: 텍스트 너비에 맞춰 자연스럽게 늘리기
      const targetWidth = getAccurateWidth(newText);

      gsap.to(titCircle, {
        duration: 0.8,
        delay: 0.5,
        width: targetWidth,
        ease: "power1.inOut"
      });
    }
  });
}

// 초기화: 첫 메시지 너비에 맞게 설정
window.addEventListener('load', () => {
  const initialWidth = getAccurateWidth(messages[0]);
  titCircle.style.width = `${initialWidth}px`;

  // 반복 애니메이션 실행
  gsap.timeline({ repeat: -1, repeatDelay: 2 })
    .call(animateTextChange, null, "+=2");
});
