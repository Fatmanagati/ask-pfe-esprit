import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rfp } from '../components/rfp/rfp.component';

@Injectable({
  providedIn: 'root'
})
export class RfpService {

  constructor(private httpClient: HttpClient) { }

  public getRFP() {
    return this.httpClient.get<rfp[]>('http://localhost:8080/PFE/rfp/getall')
  }
  public getRFPbytheme(themeId:number) {
    return this.httpClient.get<rfp[]>(`http://localhost:8080/PFE/rfp/getbytheme/${themeId}`);
  }
  addrfp(r: rfp, themeId: number) {
    return this.httpClient.post(`http://localhost:8080/PFE/rfp/addaff/${themeId}`,r);
  }
  public deleterfp(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/rfp/delete/${id}`);
  }
  public updaterfp(id: number,r:rfp){
    return this.httpClient.put(`http://localhost:8080/PFE/rfp/update/${id}`,r);
  }
  public retrieverfp(id:number){
    return this.httpClient.get<rfp>(`http://localhost:8080/PFE/rfp/getbyid/${id}`)
  }
}
