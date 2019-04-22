import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/app.api';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  comics: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(URL).subscribe(res => this.comics = res)

    console.log(this.comics)
  }

}
