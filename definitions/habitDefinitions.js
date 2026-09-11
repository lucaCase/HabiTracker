export class Habit {
    constructor(name, habitSettings) {
        this.name = name;
        this.habitSettings = habitSettings;
    }
}

export class HabitSettings {
    constructor(onBrowserOpen, schedulingTime, oneTimeScheduling) {
        this.onBrowserOpen = onBrowserOpen;
        this.schedulingTime = schedulingTime;
        this.oneTimeScheduling = oneTimeScheduling;
    }
}