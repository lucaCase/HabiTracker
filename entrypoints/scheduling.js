import {getHabits} from "../helpers/habitHelpers.js";

function scheduleHabits() {
    for (const habit of getHabits()) {
        const now = new Date();

        const scheduled = new Date(now);
        scheduled.setHours(
            habit.habitSettings.schedulingTime.hour,
            habit.habitSettings.schedulingTime.minute,
            0,
            0
        );

        if (scheduled < now) {
            scheduled.setDate(scheduled.getDate() + 1);
        }

        const timeout = scheduled.getTime() - now.getTime();

        setTimeout(() => {
            alert(`It's time to perform your habit: ${habit.name}`);
            scheduleHabits();
        }, timeout);
    }
}

scheduleHabits();