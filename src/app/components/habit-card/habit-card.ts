import { Component, input, InputSignal } from '@angular/core';
import { Habit } from '../../models/habit.model';

@Component({
  imports: [],
  selector: 'app-habit-card',
  styleUrl: './habit-card.css',
  templateUrl: './habit-card.html',
})
export class HabitCard {
  habit: InputSignal<Habit> = input.required<Habit>();
}
