document.addEventListener("DOMContentLoaded", function () {
  const departmentApp = document.getElementById("departmentApp");

  fetch("/data/faculty.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`http error: ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      const selectedFaculty = localStorage.getItem("selectedFaculty");
      const departments = data[selectedFaculty];

      if (departments) {
        departmentApp.innerHTML = departments
          .map(function (dept) {
            return `<button class="dept-btn">
  ${dept}
</button>`;
          })
          .join("");
      } else {
        departmentApp.innerHTML = `<p>Could not find departments for: ${selectedFaculty}</p>`;
      }
    })
    .catch(function (error) {
      console.error("Error loading departments:", error);
    });
});
