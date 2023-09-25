import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../components/theme/theme.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  public getthemes() {
    return this.httpClient.get<Theme[]>('http://localhost:8080/PFE/theme/getall')
  }
  addtheme(t: Theme) {
    return this.httpClient.post('http://localhost:8080/PFE/theme/add', t);
  }
  public deleteTheme(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/theme/delete/${id}`);
  }

}
