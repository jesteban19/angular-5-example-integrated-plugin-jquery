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
  	this.zone.runOutsideAngular(() => {
  		$('#allinone_bannerRotator_classic').allinone_bannerRotator({
			width: 960,
			height: 384,
			thumbsWrapperMarginBottom:5,
			defaultEffect: 'random'		
		});
  	});
  }

}
