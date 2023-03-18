let p = document.querySelectorAll("p");
let section = document.querySelectorAll("section");
let icons = document.querySelectorAll("i");
section.forEach(function (sec) {
  sec.addEventListener("click", function () {
    // console.log(sec.dataset.index);
    let show = document.querySelector(`.${sec.dataset.index}`);
    let icon = this.children[0].children[0];
    // console.log(icon);
    icons.forEach(function (ico) {
      ico.classList.remove("fa-minuse");
      ico.classList.add("fa-plus");
    });
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
    p.forEach(function (e) {
      e.classList.remove("active");
    });

    show.classList.add("active");
  });
});
// ============================
let image = document.querySelector(".slideshow img");
abc = ["image/1.png", "image/2.png"];

i = 0;
image.setAttribute("src", abc[i]);
function aaa() {
  setInterval(() => {
    image.setAttribute("src", abc[i]);
    i++;
    if (i >= abc.length) {
      i = 0;
    }
  }, 3000);
}

aaa();
// ==============================
let imageSlide = Array.from(document.querySelectorAll(".slider .images img"));

let current = 1;
let imageslidecount = imageSlide.length;

let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");

nextbtn.addEventListener("click", next);
prevbtn.addEventListener("click", prev);

let span = document.querySelector(".slider span");
let ul = document.createElement("ul");
ul.className = "ul";

span.appendChild(ul);

for (let i = 0; i < imageslidecount; i++) {
  // console.log(i);
  let li = document.createElement("li");
  li.className = `li${i + 1}`;
  li.setAttribute("data-ind", `${i + 1}`);
  li.appendChild(document.createTextNode(i + 1));
  ul.appendChild(li);
}

let lis = document.querySelectorAll(".ul li");
lis.forEach(function (li) {
  li.addEventListener("click", function () {
    // console.log(li.dataset.ind);
    current = li.dataset.ind;
    checker();
  });
});

// هذا الكود اذا اردت الانتقال من صورة للأخري تلقائيا

// setInterval(() => {
//   current++;
//   checker();
//   if (current >= imageslidecount) {
//     current = 0;
//   }
// }, 5000);

function checker() {
  imageSlide.forEach(function (img) {
    img.classList.remove("active");
  });
  lis.forEach(function (li) {
    li.classList.remove("active");
  });
  lis[current - 1].classList.add("active");
  imageSlide[current - 1].classList.add("active");
  if (current <= 1) {
    prevbtn.classList.add("disapled");
  } else {
    prevbtn.classList.remove("disapled");
  }
  if (current >= imageslidecount) {
    nextbtn.classList.add("disapled");
  } else {
    nextbtn.classList.remove("disapled");
  }
}
checker();

function next() {
  if (current >= imageslidecount) {
    console.log("next");
  } else {
    current++;
    checker();
  }
}
function prev() {
  if (current <= 1) {
    console.log("prev");
  } else {
    current--;
    checker();
  }
}
// >>>>>>>>>>>>>>>> Tab
let tabs = document.querySelectorAll(".tab span");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    let TABS = document.querySelectorAll(`.tabcontainer div`);
    TABS.forEach(function (TAB) {
      TAB.style.display = "none";
    });
    document.querySelector(`.${tab.dataset.tab}`).style.display = "block";
  });
});
// Random Background
let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let arr = [];

// console.log(a);

for (let i = 0; i < 6; i++) {
  let a = random[Math.floor(Math.random() * random.length)];
  arr.push(a);
}

document.querySelector(".random").style.backgroundColor = `#${arr.join("")}`;
document.querySelector(".random span").innerHTML = `#${arr.join("")}`;
// console.log(arr.join(""));
// >>>>>>>>>>>>>>>
let spans = document.querySelectorAll(".local span");

let localStoragediv = document.querySelector(".local div");
spans.forEach(function (span) {
  span.addEventListener("click", function () {
    // console.log(span.dataset.color);
    window.localStorage.color = span.dataset.color;
    localStoragediv.style.backgroundColor = window.localStorage.color;
  });
});

if (window.localStorage.getItem("color")) {
  localStoragediv.style.backgroundColor = window.localStorage.color;
}
// >>>>>>>>>>>>>>>>
let abcd = document.querySelector(".section").offsetTop;
let spansat = document.querySelectorAll(".section span");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= abcd) {
    if (!started) {
      spansat.forEach(function (span) {
        startcount(span);
      });
      started = true;
    }
  } else {
    spansat.forEach(function (span) {
      span.textContent = 0;
    });
    started = false;
  }
});

function startcount(ele) {
  let number = ele.dataset.num;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == number) {
      clearInterval(counter);
    }
  }, 1000 / number);
}
// >>>>>>>>>>>
let sectionone = document.querySelector(".section-one");
let spanwidth = document.querySelectorAll(".section-one span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= sectionone.offsetTop) {
    spanwidth.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  } else {
    spanwidth.forEach(function (span) {
      span.style.width = "0%";
    });
  }
});
// >>>>>>>>>>>>> filter

let lisFilter = document.querySelectorAll(".filter ul li");
let divFilter = document.querySelectorAll(".filter .all");

lisFilter.forEach(function (li) {
  li.addEventListener("click", function () {
    lisFilter.forEach(function (li) {
      li.classList.remove("active");
    });
    li.classList.add("active");
    // console.log(li.dataset.index);
    divFilter.forEach(function (div) {
      div.style.display = "none";
    });
    let dd = document.querySelectorAll(
      `.filter-container .${li.dataset.index}`
    );
    // console.log(dd);
    dd.forEach(function (d) {
      d.style.display = "block";
    });
  });
});
// Scroll To Top & nav
let nav = document.querySelector("nav");
let btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    nav.classList.add("active");
    btn.classList.add("active");
  } else {
    nav.classList.remove("active");
    btn.classList.remove("active");
  }
});

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
