import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AddUpdateDocumentComponent } from 'src/app/document/add-update-document/add-update-document.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  displayedColumns: string[] = ['documentNumber', 'date', 'organ', 'explain'];
  dataSource!: MatTableDataSource<any>;

  constructor(private service: SharedService, private dialog: MatDialog){}
  // listDocument : any=[];
  openDialog(){
    this.dialog.open(AddUpdateDocumentComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.loadDocument()
      }
    })
  }

  ngOnInit(): void {
    this.loadDocument();
  }

  editDocument(element : any){
    this.dialog.open(AddUpdateDocumentComponent,{
      width: '30%',
      data : element
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.loadDocument();
      }
    })
  }

  deleteDocument(id:number){
    this.service.DeleteDocument(id)
    .subscribe({
      next:(res) => {
        alert("Document deleted successfully")
      }
    })
  }

  loadDocument(){    
    this.service.GetAllDocument().subscribe({
      next: (res) => {
        this.dataSource = res.data;
        console.log(this.dataSource);
      },
    })
  }
} 
