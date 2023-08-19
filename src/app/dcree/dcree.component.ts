import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AddUpdateDcreeComponent } from 'src/app/dcree/add-update-dcree/add-update-dcree.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dcree',
  templateUrl: './dcree.component.html',
  styleUrls: ['./dcree.component.css']
})
export class DcreeComponent implements OnInit{

  displayedColumns: string[] = ['dcreeNumber', 'date', 'organ', 'explain'];
  dataSource!: MatTableDataSource<any>;

  constructor(private service: SharedService, private dialog: MatDialog){}
  // listDcree : any=[];
  openDialog(){
    this.dialog.open(AddUpdateDcreeComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.loadDcree()
      }
    })
  }

  ngOnInit(): void {
    this.loadDcree();
  }

  editDcree(element : any){
    this.dialog.open(AddUpdateDcreeComponent,{
      width: '30%',
      data : element
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.loadDcree();
      }
    })
  }

  deleteDcree(id:number){
    this.service.DeleteDcree(id)
    .subscribe({
      next:(res) => {
        alert("Dcree deleted successfully")
      },
      error:()=>{
        alert("Error")
      }
    })
  }

  loadDcree(){    
    this.service.GetAllDcree().subscribe({
      next: (res) => {
        this.dataSource = res.data;
        console.log(this.dataSource);
      },
    })
  }
} 
