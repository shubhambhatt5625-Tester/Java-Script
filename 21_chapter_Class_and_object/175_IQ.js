class Browser {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("Starting the browser")
    }
    closeBrowser() {
        console.log("Closing the browser")
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(firefox.isOpen);
chrome.startBrowser();
chrome.closeBrowser();

/*Because the constructor runs automatically every time you use new.
Think of the constructor like a "welcome song" that plays every time a new object is born:
1. let chrome = new Browser("Chrome") → Chrome is born → welcome song plays → "Chrome launched"
2. let firefox = new Browser("Firefox") → Firefox is born → welcome song plays → "Firefox launched"
3. console.log(firefox.isOpen) → prints true
So the output is:
Chrome launched
Firefox launched
true
The constructor is not like a normal method you call manually. It runs by itself the moment you say 
new Browser(...). That's why both names print — you created two objects, so the constructor ran twice.*/