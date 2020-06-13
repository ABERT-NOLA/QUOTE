import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    {id:1, name:'The pessimist sees difficuly in every opportunity',description:"terrible"},
    {id:2, name:'Dont let yesterday take up too much today',description:'inspirational'},
    {id:3, name:'You learn more from failure than from success',description:'terrible'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
