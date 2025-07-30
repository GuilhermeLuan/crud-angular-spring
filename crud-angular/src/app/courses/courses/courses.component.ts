import {Component} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    {_id: '1', name: 'Angular Fundamentals', category: 'Development'},
  ];
  displayedColumns: string[] = ['name', 'category'];


}
