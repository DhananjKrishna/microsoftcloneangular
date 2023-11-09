import { Component, OnInit  } from '@angular/core';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  ngOnInit(): void 
  {
    $('document').ready(function (){
      $('#btn1').click(function (){
        $('.firstimg').show();
        $('.secimg').hide();
      })
      $('#btn2').click(function (){
        $('.secimg').show();
        $('.firstimg').hide();
      })
    })
  }
}
