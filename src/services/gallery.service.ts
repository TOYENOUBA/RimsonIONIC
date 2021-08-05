import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService{
  public host:string="https://pixabay.com/api/";
  constructor(private http:Http){

  }
  chercher(query:string,size:number,page:number){
    return this.http.get(this.host+"?key=18129954-d21202615e88f1ed41f855063&q="+query+"&per_page="+size+"&page="+page)
      .map(resp=>resp.json())
  }
}
