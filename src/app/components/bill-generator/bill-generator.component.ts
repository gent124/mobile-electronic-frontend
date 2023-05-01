import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Unit } from 'src/app/interfaces/unit.interface';
import { BillService } from 'src/app/services/bill.service';
import { PdfGeneratorService } from 'src/app/services/pdf-generator.service';

@Component({
  selector: 'app-bill-generator',
  templateUrl: './bill-generator.component.html',
  styleUrls: ['./bill-generator.component.css']
})
export class BillGeneratorComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable!: ElementRef;


  units: Unit[] = this.billService.getUnits();
  preTotal! : number;
  quantity: number = 0;
  debt : number = 0;

  constructor(
    public dialogRef: MatDialogRef<BillGeneratorComponent>,
    private billService: BillService,
    private pdfGenerator: PdfGeneratorService
  ) { }

  ngOnInit(): void {
    this.generatePreTotal();
  }

  close() {
    this.dialogRef.close();
  }

  generatePreTotal() {
    this.preTotal = this.billService.getTotal();
  }

  generatePdf() {
    console.log('generate')
  const element = document.getElementById('pdf-content');
    this.pdfGenerator.generatePDF(this.pdfTable);
  }



}
