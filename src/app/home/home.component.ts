import { Component, OnInit,AfterViewInit ,NgZone } from '@angular/core';
import * as jQuery from 'jquery';

//import * as allinone_bannerRotator from 'allinone_bannerRotator';
//declare var $ : any;
declare const allinone_bannerRotator:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {

  constructor(private zone: NgZone) { }

  imgs = [
    {
      'img' : 'http://via.placeholder.com/1170x570/6c5ce7/ffffff?text=page+1',
      'title' : 'ABC'  
    },
    {
      'img' : 'http://via.placeholder.com/1170x570/fd79a8/ffffff?text=page+2',
      'title' : 'ZZZZZ'
    },
    {
      'img' : 'http://via.placeholder.com/1170x570/d63031/ffffff?text=page+3',
      'title' : 'COMPRAR'
    },
    {
      'img' : 'http://via.placeholder.com/1170x570/2d3436/ffffff?text=page+4',
      'title' : 'FINALIZAR'
    }

  ];

  images = [];
  ngOnInit() {

  }

  ngAfterViewInit()
  {
  	/*
  	"../node_modules/jquery/dist/jquery.min.js",
  	(function($){
  		$('#allinone_bannerRotator_classic').allinone_bannerRotator({
			skin: 'classic',
			width: 960,
			height: 384,
			thumbsWrapperMarginBottom:5,
			defaultEffect: 'random'		
		});
  	})(jQuery);*/

    setTimeout(() => {
      this.images = this.imgs;
      setTimeout(()=>{
        this.runLibrary();
      },200);
    },1000);

  }

  private runLibrary()
  {
      this.zone.runOutsideAngular(() => {
        if($('#allinone_bannerRotator_classic').length){
            $('#allinone_bannerRotator_classic').allinone_bannerRotator({
              skin: 'universal',
              width: 1170,
              height: 570,
              responsive:true,
              thumbsWrapperMarginBottom:35,
              showPreviewThumbs:false,
              showCircleTimer:false,
              autoHideBottomNav:false,
              showBottomNav: false,
              defaultEffect: 'random'    
            });          
        }
      });
      
  }

}
