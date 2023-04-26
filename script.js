// inputs
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submitBtn = document.querySelector("#submit");

// error content
const errorDay = document.querySelector("#error-day");
const errorMonth = document.querySelector("#error-month");
const errorYear = document.querySelector("#error-year");


// output

const outYears = document.querySelector(".output-years");
const outMonths = document.querySelector(".output-months");
const outDays = document.querySelector(".output-days");



let nowDate = new Date();




day.addEventListener("input", (e) => {
    const dayText = e.target.value;
    inputValidation(dayText, day);
});

month.addEventListener("input", (e) => {
    const monthText = e.target.value;
    inputValidation(monthText, month);

});
year.addEventListener("input", (e) => {
    const yearText = e.target.value;
    inputValidation(yearText, year);
});


submitBtn.addEventListener("click", function () {
    let dayLabel = day.previousElementSibling;
    let monthLabel = month.previousElementSibling;
    let yearLabel = year.previousElementSibling;

    if (day.value > 31 || day.value == "") {
        errorDay.textContent = "Must be a valid day";
        classListEffect(day, dayLabel, errorDay);
    }

    if (month.value > 12 || month.value == "") {
        errorMonth.textContent = "Must be a valid month";
        classListEffect(month, monthLabel, errorMonth);
    }
    if (year.value > nowDate.getFullYear() || year.value == "") {
        errorYear.textContent = "Must be in the past";
        classListEffect(year, yearLabel, errorYear);
    }

    if ((day.value < 31 && day.value !== "") && (month.value < 12 && month.value !== "") && (day.value < nowDate.getFullYear() && day.value !== "")) {


        let nowDay = nowDate.getDate();
        let nowMonth = 1 + nowDate.getMonth();
        let nowYear = nowDate.getFullYear();

        const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day.value > nowDay) {
            nowDay = nowDay + months[nowMonth - 1];
            nowMonth = nowMonth - 1;
        }
        if (month.value > nowMonth) {
            nowMonth = nowMonth + 12;
            nowYear = nowYear - 1;
        }

        const d = nowDay - day.value;
        const m = nowMonth - month.value;
        const y = nowYear - year.value;








        outDays.textContent = d;
        outMonths.textContent = m;
        outYears.textContent = y;

        console.log(d, m, y);
    }
});

function inputValidation(value, input) {
    const text = value.replace(/[^0-9]/g, '');
    input.value = text;
}

function classListEffect(input, label, errorText) {
    input.classList.add("border-effect");
    label.classList.add("color-effect");
    setTimeout(() => {
        errorText.textContent = "";
        input.classList.remove("border-effect");
        label.classList.remove("color-effect");
    }, 1000);

}