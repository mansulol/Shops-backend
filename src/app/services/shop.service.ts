import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endPoint: string = "http://localhost:8080/api/shops"

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.endPoint)
  }

  // Servicio para crear un nuevo dato
  create(brand: string, model: string){
    const headers = new HttpHeaders({
      'content-type': 'aplication/x-www-form-urlencoded',
    })

    const body = new URLSearchParams();
    
    body.append("brand", brand)
    body.append("model", model)

    return this.httpClient.post(this.endPoint, body, {headers})
  }

  update(columna: string, valor: string){
    // this.httpClient.post("  ").subscribe();
  }
  
  delete(id: number){
    // Hay que especificar que el tipo de respuesta es texto
    this.httpClient.delete(`http://localhost:8080/api/shops/${id}`, {responseType: "text"})
    .subscribe( data => {
      console.log("Elemento eliminado"+id)
    } )
    
  }

}
