function cgpaToPercentage() {
  const cgpa = parseFloat(document.getElementById("cgpa").value);
  const factor = parseFloat(localStorage.getItem("factor") || "9.5");
  const result = isNaN(cgpa) ? "Enter valid CGPA" : `Percentage: ${(cgpa * factor).toFixed(2)}%`;
  document.getElementById("result").innerText = result;
}

function percentageToCGPA() {
  const perc = parseFloat(document.getElementById("perc").value);
  const factor = parseFloat(localStorage.getItem("factor") || "9.5");
  const result = isNaN(perc) ? "Enter valid percentage" : `CGPA: ${(perc / factor).toFixed(2)}`;
  document.getElementById("result").innerText = result;
}

function sgpaToCGPA() {
  const inputs = document.querySelectorAll(".sgpa");
  let total = 0, count = 0;
  inputs.forEach(i => {
    const val = parseFloat(i.value);
    if (!isNaN(val)) {
      total += val;
      count++;
    }
  });
  const result = count === 0 ? "Enter valid SGPAs" : `CGPA: ${(total / count).toFixed(2)}`;
  document.getElementById("result").innerText = result;
}

function percentageToMarks() {
  const perc = parseFloat(document.getElementById("perc").value);
  const total = parseFloat(document.getElementById("total").value);
  const marks = isNaN(perc) || isNaN(total) ? "Invalid input" : `Marks: ${((perc / 100) * total).toFixed(2)}`;
  document.getElementById("result").innerText = marks;
}

function marksToPercentage() {
  const obtained = parseFloat(document.getElementById("obtained").value);
  const total = parseFloat(document.getElementById("total").value);
  const result = isNaN(obtained) || isNaN(total) || total === 0 ?
    "Invalid input" :
    `Percentage: ${((obtained / total) * 100).toFixed(2)}%`;
  document.getElementById("result").innerText = result;
}

function calculateAttendance() {
  const attended = parseFloat(document.getElementById("attended").value);
  const total = parseFloat(document.getElementById("total").value);
  const percent = isNaN(attended) || isNaN(total) || total === 0 ?
    "Invalid input" :
    `Attendance: ${((attended / total) * 100).toFixed(2)}%`;
  document.getElementById("result").innerText = percent;
}

function setGradingFactor() {
  const factor = document.getElementById("factor").value;
  if (factor) {
    localStorage.setItem("factor", factor);
    alert("Factor saved!");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load theme on first visit
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-theme");
    toggle.checked = true;
  }

  // Theme toggle handler
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});