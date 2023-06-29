function openTab(evt, tabName) {
  // Get all elements with class of "tabcontent and hide them"
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((content) => {
    //console.log(content)
    content.style.display = "none";
  });

  // Get all elements with class of "tablinks" and remove the class "active"
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((link) => {
    //console.log(link)
    link.classList.remove("active");
  });

  // Show the current tab and add an 'active' class to the button that opened the tab.
  document.getElementById(tabName).style.display = "block";
  evt.target.classList.add("active");
}

// Set default tab
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablinks").classList.add("active")
    document.querySelector(".tabcontent").classList.add("active")
})