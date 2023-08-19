import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-document',
  templateUrl: './add-update-document.component.html',
  styleUrls: ['./add-update-document.component.css']
})
export class AddUpdateDocumentComponent implements OnInit {

  documentForm !: FormGroup;
  actionBtn: string = "Save"
  constructor(private formBuilder : FormBuilder, private service: SharedService,
              @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef: MatDialogRef<AddUpdateDocumentComponent>
              ){}
              
  ngOnInit(): void{
    this.documentForm = this.formBuilder.group({
      documentNumber : ['',Validators.required],
      date : [''],
      organ : [''],
      explain : ['',Validators.required],
    });
    
    if(this.editData){
      this.actionBtn = "Update";
      this.documentForm.controls['documentNumber'].setValue(this.editData.DocumentNo);
      this.documentForm.controls['date'].setValue(this.editData.Date);
      this.documentForm.controls['organ'].setValue(this.editData.Organ);
      this.documentForm.controls['explain'].setValue(this.editData.Explain);
    }
  }

  addDocument(){
    if(!this.editData){
      if(this.documentForm.valid){
        this.service.AddDocument(this.documentForm.value)
        .subscribe({
          next:(res) =>{
            console.log('Response after adding dcree:', res); 
            alert("Document added successfully")
            this.documentForm.reset();
            this.dialogRef.close('save');
          },
        })
      }
    }
    else{
      this.updateDocument()
    }
  }

  updateDocument(){
    this.service.UpdateDocument(this.documentForm.value, this.editData.id)
    .subscribe({
      next: (res) =>{
        console.log('Response after updating dcree:', res);
        alert("Document updated successfully");
        this.documentForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the document")
      }
    })
  }
}
