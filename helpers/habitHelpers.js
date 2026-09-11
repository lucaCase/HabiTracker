import {getLocalStorageItem, setLocalStorageItem} from "./localstorageHelper.js";

const HABITS_KEY = 'habits';

export function getHabits() {
    const habits = getLocalStorageItem(HABITS_KEY);

    if (!habits) {
        return [];
    }

    return habits;
}

export function setHabits(habits) {
    setLocalStorageItem(HABITS_KEY, habits);
}

export function addHabit(habit) {
    let habits = getHabits();
    habits.push(habit);
    setHabits(habits);
}

export function removeHabit(habit) {
    let habits = getHabits();
    habits.splice(habits.indexOf(habit), 1);
    setHabits(habits);
}