
// Available:
// console - ya know, for simple logging (doesn't go anywhere)
// logger - logger that will stream
// expect - Jest's expect
// {Key, By, until} - selenium webdriver
// axios - for dem api calls and such
// macro - macros for doing things like getting elements and other neat things

async function example(driver, param1) {
    logger.info('A module edit');
    await macro.get(driver, 'app.bionicmetrics.com');
}

// Exports so you can then use random.example(...)
const random = {
    example
}
random; //Implicitly returns