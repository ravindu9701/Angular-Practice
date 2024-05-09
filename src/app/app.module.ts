import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Directive } from './directives/test1.directive';
import { CustomValidateDirective } from './directives/custom-validate.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusDirective } from './directives/autofocus.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';
import { DirectivesPracticeComponent } from './pages/directives-practice/directives-practice.component';
import { DiPracticeComponent } from './pages/di-practice/di-practice.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { AssignmentDirective } from './directives/assignment.directive';
import { IfDirective } from './directives/if.directive';
import { TrigonometryDirective } from './directives/trigonometry.directive';
import { HostDirective } from './directives/host.directive';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { ChangeDetectionTestDirective } from './directives/change-detection-test.directive';
import { MathDirective } from './directives/math.directive';
import { CarouselDirective } from './directives/carousel.directive';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Directive,
    CustomValidateDirective,
    AutofocusDirective,
    DraggableDirective,
    ClickOutsideDirective,
    RxjsPracticeComponent,
    DirectivesPracticeComponent,
    DiPracticeComponent,
    AssignmentComponent,
    AssignmentDirective,
    IfDirective,
    TrigonometryDirective,
    HostDirective,
    ReactiveFormsComponent,
    ChangeDetectionTestDirective,
    MathDirective,
    CarouselDirective,
    ChangeDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
