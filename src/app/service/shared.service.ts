import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="https://localhost:44397/api";  
  
  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJqdGkiOiIxMTJkNTBmYi1kNTczLTRmZWYtYmY3MC0yN2MzYThkZDM3ZTAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW5pc3RyYXRvciIsIklkIjoiMSIsIkZ1bGxOYW1lIjoiQWRtaW5pc3RyYXRvciIsIlBob25lIjoiMDk3ODE1ODA0MCIsIkF2YXRhciI6IjQ1NGRlNjU1YzMxNTBjNGI1NTA0XzIwMjIxMTIxMDMyNDQ5MTM4XzIwMjMwMzE3MTYzMzQ3MTgwLmpwZyIsIlJvbGVNYXgiOiIiLCJSb2xlTGV2ZWwiOiIiLCJBY2Nlc3NLZXkiOiJURU1QTEFURV9NQU5BR0VNRU5UOjExMTExMTExMS1GVU5DVElPTl9NQU5BR0VNRU5UOjExMTExMTExMS1EQVNIQk9BUkQ6MTExMTExMTExLUJMT0NLX01BTkFHRU1FTlQ6MTExMTExMTExLUNVUlJFTlRTVEFURV9NQUlOVEVYVFVSRV9NQU5BR0VNRU5UOjExMTExMTExMS1ERUNSRUVfVFlQRTFfTUFOQUdFTUVOVDoxMTExMTExMTEtVkJDQzoxMTExMTExMTEtTEFORF9QUklDRV9NQU5BR0VNRU5UOjExMTExMTExMS1MQU5FX01BTkFHRU1FTlQ6MTExMTExMTExLUxBTkRfU1BFQ0lBTF9DT0VGRklDSUVOVDoxMTExMTExMTEtQVBBUlRNRU5UX0lORk86MTExMTExMTExLVJBVElPX01BSU5URVhUVVJFX01BTkFHRU1FTlQ6MTExMTExMTExLURFQ1JFRV9UWVBFMl9NQU5BR0VNRU5UOjExMTExMTExMS1GTE9PUl9NQU5BR0VNRU5UOjExMTExMTExMS1WRVJJRllDQVRJT05fVU5JVF9NQU5BR0VNRU5UOjExMTExMTExMS1ST0xFX01BTkFHRU1FTlQ6MTExMTExMTExLVdBUkRfTUFOQUdFTUVOVDoxMTExMTExMTEtRElTVFJJQ1RfTUFOQUdFTUVOVDoxMTExMTExMTEtREVQQVJUTUVOVF9NQU5BR0VNRU5UOjExMTExMTExMS1VU0VSX01BTkFHRU1FTlQ6MTExMTExMTExLUFSRUFfTUFOQUdFTUVOVDoxMTExMTExMTEtQ09OU1RSVUNUSU9OX1BSSUNFX01BTkFHRU1FTlQ6MTExMTExMTExLUNBTENfUFJJQ0VfQVBBUlRNRU5UX0lORk86MTExMTExMTExLURJU1RSSUJVVElPTl9GTE9PUl9DT0VGRklDSUVOVF9NQU5BR0VNRU5UOjExMTExMTExMS1QT1NJVElPTl9DT0VGRklDSUVOVF9NQU5BR0VNRU5UOjExMTExMTExMS1DQUxDX1BSSUNFX0xBTkRfSU5GTzoxMTExMTExMTEtTE9HX0FDVElPTl9NQU5BR0VNRU5UOjExMTExMTExMS1BUEFSVE1FTlRfTUFOQUdFTUVOVDoxMTExMTExMTEtUFJJQ0VMSVNUX01BTkFHRU1FTlQ6MTExMTExMTExLVBPU0lUSU9OX01BTkFHRU1FTlQ6MTExMTExMTExLVBST1ZJTkNFX01BTkFHRU1FTlQ6MTExMTExMTExLVVOSVRQUklDRV9NQU5BR0VNRU5UOjExMTExMTExMS1MQU5EX1BSSUNFX0NPUlJFQ1RJT05fQ09FRkZJQ0lFTlRfTUFOQUdFTUVOVDoxMTExMTExMTEtQ0FURV9DT01NT046MTExMTExMTExLUNVU1RPTUVSX01BTkFHRU1FTlQ6MTExMTExMTExLVZBVF9NQU5BR0VNRU5UOjExMTExMTExMS1ERURVQ1RJT05fTEFORF9NT05FWV9NQU5BR0VNRU5UOjExMTExMTExMS1VU0VfVkFMVUVfQ09FRkZJQ0lFTlRfTUFOQUdFTUVOVDoxMTExMTExMTEtVElNRV9MQVlPVVRfQ09FRkZJQ0lFTlRfTUFOQUdFTUVOVDoxMTExMTExMTEtU0FMQVJZX0NPRUZGSUNJRU5UX01BTkFHRU1FTlQ6MTExMTExMTExLVZBVF9DT0VGRklDSUVOVF9NQU5BR0VNRU5UOjExMTExMTExMS1SRU5USU5HX1BSSUNFX01BTkFHRU1FTlQ6MTExMTExMTExLURFRFVDVElPTl9DT0VGRklDSUVOVF9NQU5BR0VNRU5UOjExMTExMTExMS1JTlZFU1RNRU5UX1JBVEVfTUFOQUdFTUVOVDoxMTExMTExMTEtSE9MSURBWV9NQU5BR0VNRU5UOjExMTExMTExMS1BUkVBX0NPUlJFQ1RJT05fQ09FRkZJQ0lFTlRfTUFOQUdFTUVOVDoxMTExMTExMTEtQ0FURUdPUllfMjoxMTExMTExMTEtQ0FURUdPUlk6MTExMTExMTExLVRZUEVBVFRSSUJVVEVfTUFOQUdFTUVOVDoxMTExMTExMTEtU1lTVEVNOjExMTExMTExMS1TUEVDSUFMOjEwMDAwMDAwMCIsImV4cCI6MTY5MjQ5NDgwMiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzOTcvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzOTcvIn0.U9tgO-L3C48qbJYI0lukuSTU4VUv6epXIfnoRh_XW_k`  }),
    };
  // Dcree
  GetAllDcree(): Observable<any>{
    return this.http.get<any>(this.APIUrl+'/DungDcree/GetByPage?query=1%3D1&page=1&page_size=10',this.httpOptions);
  }
  AddDcree(data: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/DungDcree', data, this.httpOptions);
  }
  UpdateDcree(id: number,data: any){
    return this.http.put<any>(this.APIUrl +`/DungDcree/${id}`, data, this.httpOptions);
  }
  DeleteDcree(id: number): Observable<any> {
    return this.http.delete<any>(this.APIUrl+`/DungDcree/${id}`, this.httpOptions);
  }

  // Document
  GetAllDocument(): Observable<any>{
    return this.http.get<any>(this.APIUrl+'/DungDocument/GetByPage?query=1%3D1&page=1&page_size=10',this.httpOptions);
  }
  AddDocument(data: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/DungDocument', data, this.httpOptions);
  }
  UpdateDocument(id: number,data: any){
    return this.http.put<any>(this.APIUrl +`/DungDocument/${id}`, data, this.httpOptions);
  }
  DeleteDocument(id: number): Observable<any> {
    return this.http.delete<any>(this.APIUrl+`/DungDocument/${id}`, this.httpOptions);
  }

  // Price
  GetAllPrice(): Observable<any>{
    return this.http.get<any>(this.APIUrl+'/DungPrice/GetByPage?query=1%3D1&page=1&page_size=10',this.httpOptions);
  }
  AddPrice(data: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/DungPrice', data, this.httpOptions);
  }
  UpdatePrice(id: number,data: any){
    return this.http.put<any>(this.APIUrl +`/DungPrice/${id}`, data, this.httpOptions);
  }
  DeletePrice(id: number): Observable<any> {
    return this.http.delete<any>(this.APIUrl+`/DungPriceO/${id}`, this.httpOptions);
  }
}
