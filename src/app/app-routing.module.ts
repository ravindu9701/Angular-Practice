import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';
import { DirectivesPracticeComponent } from './pages/directives-practice/directives-practice.component';
import { DiPracticeComponent } from './pages/di-practice/di-practice.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';

const routes: Routes = [
  { path: '', component: DirectivesPracticeComponent },
  { path: 'rxjs', component: RxjsPracticeComponent},
  { path: 'di', component: DiPracticeComponent },
  { path: 'assignment', component: AssignmentComponent },
  { path: 'reactive-form', component: ReactiveFormsComponent },
  { path: 'change-detection', component: ChangeDetectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
