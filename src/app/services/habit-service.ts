import { inject, Service, signal, WritableSignal } from '@angular/core';
import { StorageService } from './storage-service';
import { Habit } from '../models/habit.model';

@Service()
export class HabitService {
  readonly HABIT_KEY = 'habits';

  private readonly storageService: StorageService = inject(StorageService);

  readonly habits: WritableSignal<Array<Habit> | undefined> = signal([]);

  private async setHabits(habits: Array<Habit>) {
    this.habits.set(habits);
    await this.storageService.setChromeStorageItem(this.HABIT_KEY, habits);
  }

  async loadHabits(): Promise<void> {
    if (this.habits() === undefined) {
      let habits = await this.storageService.getStorageItem(this.HABIT_KEY);
      if (habits) {
        this.habits.set(JSON.parse(habits));
      } else {
        this.habits.set([]);
        await this.storageService.setChromeStorageItem(this.HABIT_KEY, []);
      }
    }
  }

  async addHabit(habit: Habit): Promise<void> {
    if (this.habits() === undefined) {
      await this.loadHabits();
    }

    const habits = this.habits() || [];
    habits.push(habit);
    await this.setHabits(habits);
  }

  async removeHabit(index: number): Promise<void> {
    if (this.habits() === undefined) {
      await this.loadHabits();
    }

    const habits = this.habits() || [];
    habits.splice(index, 1);
    await this.setHabits(habits);
  }

  async clearHabits(): Promise<void> {
    await this.setHabits([]);
  }
}
