import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ThemePalette} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})
export class FundosComponent {
  colorControl = new FormControl('primary' as ThemePalette);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}