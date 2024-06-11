import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { KnobModule } from 'primeng/knob';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    DividerModule,
    KnobModule,
    FormsModule,
    CardModule,
    StepsModule,
    StepperModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'prime-test';

  constructor(private primengConfig: PrimeNGConfig) {}

  value: number = 31;

  stepsItems: MenuItem[] | undefined;
  stepActive: number = 2;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.stepsItems = [
      {
        label: 'Status 40',
      },
      {
        label: 'Status 50',
      },
      {
        label: 'Status 60',
      },
      {
        label: 'Status 70',
      },
    ];
  }
}
