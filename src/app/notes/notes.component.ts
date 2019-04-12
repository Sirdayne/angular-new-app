import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  doctors: object[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    const url = 'doctors';
    this.httpService.get(url).subscribe(res => {
      this.doctors = res
    });
  }

}
