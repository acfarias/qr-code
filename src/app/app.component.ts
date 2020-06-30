import { Component, OnInit, ViewChild } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataStringQrCode = 'www.google.com; Farias-Dev';
  linkQrCode = null;
  @ViewChild("qrcode", { static: false }) qrcode: QRCodeComponent

  ngOnInit(): void {
    
  }

  downloadQrCode() {
    this.linkQrCode = this.qrcode.qrcElement.nativeElement.firstChild.currentSrc;
  }
}
