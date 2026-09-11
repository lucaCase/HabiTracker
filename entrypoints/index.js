import {addHabit} from "../helpers/habitHelpers.js";
import {Habit, HabitSettings} from "../definitions/habitDefinitions.js";
import {SchedulingTime} from "../definitions/timeDefinitions.js";
import {clearLocalStorage} from "../helpers/localstorageHelper.js";

console.log('Happy developing ✨')

function startHabits() {
    const date = new Date()

    clearLocalStorage();
    addHabit(new Habit("Luca new Stutter", new HabitSettings(true, new SchedulingTime(date.getHours(), date.getMinutes() + 1), false)))
}

document.querySelector("#start-button").addEventListener("click", startHabits);