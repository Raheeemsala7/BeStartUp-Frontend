// script.js

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    document.querySelectorAll(".faq-answer").forEach(ans => {
        ans.classList.remove("open");
    });
    document.querySelectorAll(".faq-question").forEach(q => {
        q.querySelector("span").innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M3 13.5625H24M13.5 3.0625V24.0625" stroke="#8646F4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`; ;
    });

    console.log(element.querySelector(".icon"))
    if (isOpen) {
        answer.classList.remove("open");
        element.querySelector(".icon").classList.remove("open");
        element.querySelector("span").innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M3 13.5625H24M13.5 3.0625V24.0625" stroke="#8646F4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } else {
        answer.classList.add("open");
        element.querySelector(".icon").classList.add("open");
    }
}

