import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-logger-in',
  templateUrl: './page-logger-in.component.html',
  styleUrls: ['./page-logger-in.component.scss']
})
export class PageLoggerInComponent implements OnInit {
  public id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap : any) =>{
      const {params} = paramMap
      console.log(params.variable)
    })
  }

}
