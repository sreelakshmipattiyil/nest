import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single-state',
  imports: [],
  templateUrl: './single-state.component.html',
  styleUrl: './single-state.component.css'
})
export class SingleStateComponent {
  constructor(private activated: ActivatedRoute, private api:ApiService) { }




  data:any;
  
  ngOnInit() {

    //finding the id from URL
    let id = this.activated.snapshot.paramMap.get('id');
    
    //finding the state by id
    this.data= this.api.getStateByID(id);
    
  }



}
