import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

const LINE_SEPARATOR = `<div><br></div>`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() { }

  inspect() {
    const editor = document.querySelector('.document');
    const content = editor.innerHTML;
    const lines = content.split(LINE_SEPARATOR);
  }

}
