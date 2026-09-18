import { Interval } from './time.model';

export interface Habit {
  name: string;
  interval: Interval | null;
  schedules: Array<Date> | null;
  deleteScheduleOnPast: boolean | null;
  isDone: boolean;
  exceptions: Array<string>;
}
