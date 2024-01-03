export const parseTime = (time: string): { hour: string, minute: string } => {
    const splitted = time.split(':');
    let hour: string = '00';
    let minute: string = '00';

    if (splitted[0]) {
        const numberHour = Number(splitted[0]);

        if (!isNaN(numberHour)) {
            if (numberHour >= 1 && numberHour <= 9) {
                hour = `0${numberHour}`;
            } else if (numberHour >= 10 && numberHour <= 23) {
                hour = numberHour.toString();
            }
        }
    }

    if (splitted[1]) {
        const numberMinute = Number(splitted[1]);

        if (!isNaN(numberMinute)) {
            if (numberMinute >= 1 && numberMinute <= 9) {
                minute = `0${numberMinute}`;
            } else if (numberMinute >= 10 && numberMinute <= 59) {
                minute = numberMinute.toString();
            }
        }
    }

    return { hour, minute };
};