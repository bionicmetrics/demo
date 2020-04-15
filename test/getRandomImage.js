// Available:
// console - ya know, for simple logging (doesn't go anywhere)
// logger - logger that will stream
// expect - Jest's expect
// {Key, By, until} - selenium webdriver
// axios - for dem api calls and such
// macro - macros for doing things like getting elements and other neat things
async function test(baseUrl, driver, data) {
    // changing and committing on master, adding something and local commit
    logger.info('test');
    await random.picsum(driver);
}

test(baseUrl, driver, data); // implicitly returns a promise
