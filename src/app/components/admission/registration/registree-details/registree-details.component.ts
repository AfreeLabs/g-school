import { Component, OnInit, Input } from '@angular/core';
import { Registree } from '../../../../models/registree';
import { FetchData } from '../../../../services/FetchData.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-registree-details',
  templateUrl: './registree-details.component.html',
  styleUrls: ['./registree-details.component.css']
})
export class RegistreeDetailsComponent implements OnInit {

  // @Input() item: Registree;

  item: Registree;

  // selectedItem: Registree;
  
  constructor(
    private fetchData: FetchData,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCurrentRegistree();
  }

  goBack(): void {
    this.location.back();
  }

  getCurrentRegistree(): void {
    const endPoint = 'api/admission/registration/';
    this.route.paramMap
    .switchMap((params: ParamMap) => this.fetchData.get(endPoint + params.get('id')))
    .subscribe(data => this.item = data);
    console.log(this.item);
  }

}
