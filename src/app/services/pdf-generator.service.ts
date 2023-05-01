import { ElementRef, Injectable } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  generatePDF(table: ElementRef) {

    const doc = new jsPDF();

    const pdfTable = table.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);


    const documentDefinition = { content: html, name: `Fature - ${new Date().getDate()}`};
    const element = document.getElementById('debt');

    console.log(documentDefinition.content);


    const tenig =  pdfMake.createPdf(documentDefinition).download('Fature ' + new Date().toJSON().slice(0, 10));

  }
}
