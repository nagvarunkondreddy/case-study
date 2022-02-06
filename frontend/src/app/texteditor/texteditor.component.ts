import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {
  fontStyle:string='Roboto';
  fontSize : string = '22';
  editor:any;
  boldToggleButton:boolean=false;
  italicToggleButton:boolean=false;
  underlineToggleButton:boolean=false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.editor=document.getElementById('editor');
    this.editor.contentDocument.designMode = "on";
    this.changeFontStyle();
  }


  changeFontStyle(){
    this.editor.focus();
    this.editor.contentWindow.document.execCommand("fontName",false,this.fontStyle);
  }
  


  makeTextBold(){

    this.boldToggleButton=!this.boldToggleButton;
    this.editor.contentWindow.document.execCommand("bold");
  }

  makeTextItalic(){

    this.italicToggleButton=!this.italicToggleButton;
    this.editor.contentWindow.document.execCommand("Italic")
  }

  underlineText()
  {   
    this.underlineToggleButton=!this.underlineToggleButton;
    this.editor.contentWindow.document.execCommand('underline')
    
  }

  postArticle(){
  }


}
