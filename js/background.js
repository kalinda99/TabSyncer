let begin = () => {
  console.log("Hello, welcome to TabSyncer!");

  let rURL = chrome.identity.getRedirectURL()
  console.log(rURL);  
}

window.onload = () => { begin(); };
