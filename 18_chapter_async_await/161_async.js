async function apistatus() {
    try {
        let status = await Promise.reject("404");
    }
    catch (error) {
        console.log(error + " code Error in Api");
    }
    finally {
        console.log("It will be executed weather it is getting fail or pass");
    }
}
apistatus();