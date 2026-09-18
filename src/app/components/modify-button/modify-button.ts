import { Component, input } from '@angular/core';
import { ModifyType } from '../../models/types/modify.type';

@Component({
  imports: [],
  selector: 'app-modify-button',
  styleUrl: './modify-button.css',
  templateUrl: './modify-button.html',
})
export class ModifyButton {
  symbol = input.required<ModifyType>();
}
