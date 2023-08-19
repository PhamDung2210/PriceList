import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-dcree',
  templateUrl: './add-update-dcree.component.html',
  styleUrls: ['./add-update-dcree.component.css']
})
export class AddUpdateDcreeComponent implements OnInit {

  dcreeForm !: FormGroup;
  actionBtn: string = "Save"
  constructor(private formBuilder : FormBuilder, private service: SharedService,
              @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef: MatDialogRef<AddUpdateDcreeComponent>
              ){}
              
  ngOnInit(): void{
    this.dcreeForm = this.formBuilder.group({
      dcreeNumber : ['',Validators.required],
      date : [''],
      organ : [''],
      explain : ['',Validators.required],
    });
    
    if(this.editData){
      this.actionBtn = "Update";
      this.dcreeForm.controls['dcreeNumber'].setValue(this.editData.DcreeNo);
      this.dcreeForm.controls['date'].setValue(this.editData.Date);
      this.dcreeForm.controls['organ'].setValue(this.editData.Organ);
      this.dcreeForm.controls['explain'].setValue(this.editData.Explain);
    }
  }

  addDcree(){
    if(!this.editData){
      if(this.dcreeForm.valid){
        this.service.AddDcree(this.dcreeForm.value).subscribe({
          next:(res) => { 
            console.log('Response after adding dcree:', res);
            alert("Dcree added successfully")
            this.dcreeForm.reset();
            this.dialogRef.close('save');
          }
        })
      }
    }
    else{
      this.updateDcree()
    }
  }

  updateDcree(){
    this.service.UpdateDcree(this.dcreeForm.value, this.editData.id)
    .subscribe({
      next: (res) =>{
        console.log('Response after updating dcree:', res);
        alert("Dcree updated successfully");
        this.dcreeForm.reset();
        this.dialogRef.close('update');
      },
    })
  }
}
