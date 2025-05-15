document.addEventListener("DOMContentLoaded", function () {
  const facultyButtons = document.querySelectorAll(".Faculty-buttons button");
  facultyButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      const selectedFaculty = item.id;

      localStorage.setItem("selectedFaculty", selectedFaculty);
      window.location.href = "pages/department.html";
    });
  });
});
