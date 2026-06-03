let browser = ("edge");

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("chromium Browser");
        break;

    case "firefox":
        console.log("mozilla browser");
        break;

    case "safari":
        console.log("Apple browser");
        break;
    default:
        console.log("No Browser");
}