
// Available:
// console - ya know, for simple logging (doesn't go anywhere)
// logger - logger that will stream
// expect - Jest's expect
// {Key, By, until} - selenium webdriver
// axios - for dem api calls and such
// macro - macros for doing things like getting elements and other neat things

// Exports so you can then use random.example(...)
const random = {
    async picsum(driver) {
        const x = macro.randomNumber(3);
        const y = macro.randomNumber(3);
        logger.info(`Getting random image with dimensions ${x}x${y} from picsum`);
        await macro.get(driver, `https://picsum.photos/${x}/${y}`);
    },
    async unsplash(driver) {
        const x = macro.randomNumber(3);
        const y = macro.randomNumber(3);
        logger.info(`Getting random image with dimensions ${x}x${y} from unsplash`);
        await macro.get(driver, `https://source.unsplash.com/random/${x}x${y}`);
    }
    
}