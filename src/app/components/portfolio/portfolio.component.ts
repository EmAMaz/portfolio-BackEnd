import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit{
  public loading:boolean;

  constructor(){
    this.loading = true;
  }

  ngOnInit(): void {
      this.loading = false;
  }

}
