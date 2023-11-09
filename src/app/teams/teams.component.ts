import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  ngOnInit(): void 
  {
    $('document').ready(function () {
      $('.meet').click(function(){
        $('.drop1').show();
        $('.img1').show();
        $('.drop2').hide();
        $('.drop3').hide();
        $('.drop4').hide();
        $('.img2').hide();
        $('.img3').hide();
        $('.img4').hide();
      })
      $('.call').click(function(){
        $('.drop2').show();
        $('.img2').show();
        $('.drop1').hide();
        $('.drop3').hide();
        $('.drop4').hide();
        $('.img1').hide();
        $('.img3').hide();
        $('.img4').hide();
      })
      $('.collaborate').click(function(){
        $('.drop3').show();
        $('.img3').show();
        $('.drop2').hide();
        $('.drop1').hide();
        $('.drop4').hide();
        $('.img2').hide();
        $('.img1').hide();
        $('.img4').hide();
      })
      $('.chats').click(function(){
        $('.drop4').show();
        $('.img4').show();
        $('.drop2').hide();
        $('.drop3').hide();
        $('.drop1').hide();
        $('.img2').hide();
        $('.img3').hide();
        $('.img1').hide();
      })
    })
  }
}
