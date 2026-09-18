import { Component, inject, signal } from '@angular/core';
import { ModifyButton } from './components/modify-button/modify-button';
import { HabitService } from './services/habit-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ModifyButton, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('HabiTracker');
  private readonly habitService = inject(HabitService);

  time: string = '12:31';

  async onAddClick() {
    await this.habitService.addHabit({ name: this.title(), interval: null, schedules: null, deleteScheduleOnPast: null, isDone: false });
  }
}
