// Available:
// console - ya know, for simple logging (doesn't go anywhere)
// logger - logger that will stream
// expect - Jest's expect
// {Key, By, until} - selenium webdriver
// axios - for dem api calls and such
// macro - macros for doing things like getting elements and other neat things
async function test(baseUrl, driver, data) {
    logger.info(`Demo test ${new Date()}`);
}

test(baseUrl, driver, data); // implicitly returns a promise
