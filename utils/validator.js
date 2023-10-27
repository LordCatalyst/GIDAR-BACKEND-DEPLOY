const { DateTime } = require("luxon");

class Validator {
    static isInt(number) {
        const REGEX_NUMBERS = /^-?[0-9]+$/;
        const isNumber = REGEX_NUMBERS.test(number);

        if (!isNumber) {
            return false;
        }

        const intNumber = parseInt(number, 10);
        const isNan = !isNaN(intNumber);

        return isNan && intNumber > 0;
    }

    static checkArrayInObject(arrayKeys, object) {
        return arrayKeys.every((key) => {
            return key in object;
        });
    }

    static isValidTime(dates) {
        const validDates = dates.filter((date) => {
            const validDate = DateTime.fromFormat(date, "hh:mm:ss");
            return this.isInt(validDate.hour) && this.isInt(validDate.minute);
        });

        return dates.length === validDates.length;
    }
}

module.exports = { Validator };
