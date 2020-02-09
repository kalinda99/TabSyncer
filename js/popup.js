let killOldTab = () => {
  let oldTab = document.querySelector(".current");
  let oldTabPg = document.querySelector(".active");

  if (oldTab) {
    oldTab.classList.remove("current");
    oldTabPg.classList.remove("active");
    oldTab.classList.add("none");
    oldTabPg.classList.add("hidden");
  }
};

let start = () => {
  // Load dark theme settings
  chrome.storage.sync.get(['dark_theme'], (response) => {
    if (response.dark_theme == true) {
      document.getElementsByTagName("body")[0].classList.add("dark");
      document.getElementById("theme").checked = true;
    } else {
      document.getElementById("theme").checked = false;
    }
  });

  // listeners for buttons
  document.getElementById("settings-link").addEventListener('click', () => {    
    let activeDiv = document.getElementById("settings");
    let currentDiv = document.getElementById("settings-link");
    killOldTab()
    currentDiv.classList.add("current");
    currentDiv.classList.remove("none");
    activeDiv.classList.add("active");
    activeDiv.classList.remove("hidden");
  });
  document.getElementById("open-tabs").addEventListener('click', () => {
    let activeDiv = document.getElementById("tab-list");
    let currentDiv = document.getElementById("open-tabs");
    killOldTab()
    currentDiv.classList.add("current");
    currentDiv.classList.remove("none");
    activeDiv.classList.add("active");
    activeDiv.classList.remove("hidden");
  });

  // dark theme toggle
  document.getElementById("theme").addEventListener('change', () => {
    if (document.getElementById("theme").checked == true) {
      document.getElementsByTagName("body")[0].classList.add("dark");
      chrome.storage.sync.set({dark_theme: true}).then( (msg) => {
        console.log(msg);
      });
    } else {
      document.getElementsByTagName("body")[0].classList.remove("dark");
      chrome.storage.sync.set({dark_theme: false}).then( (msg) => {
        console.log(msg);
      });
    };
  });
}

window.onload = () => { start(); };
