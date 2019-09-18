import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy, HostListener, AfterViewChecked, ViewChild } from '@angular/core';
import { resolve } from 'url';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewChecked {

  private keepTyping: boolean;
  public skipContent;
  private afterAnimation: boolean = false;
  private side = document.getElementById("sideContent");


  constructor(private deviceService: DeviceDetectorService) {
    this.keepTyping = true;
   }
  
  ngOnInit() {

    this.skipContent = this.deviceService.isMobile() ? "Tap here to skip to the end" : "Press Enter to skip to the end";
    this.keepTyping = true;
    const aboutContent: Element = document.getElementById('typewriter');
    const nodes = [];
    for (let i = 0; i < aboutContent.childNodes.length; i++){
    nodes.push(aboutContent.childNodes[i]);
    }
    aboutContent.innerHTML = '';


    this.waitTillAnimationDone();
    this.appendChildren(nodes);
  }

  ngOnDestroy(){
    this.keepTyping = false;
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  private async appendChildren(nodes) {
    let mama: Element = document.getElementById('typewriter');

    for(let node of nodes){
      if(node.nodeName == "SPAN"){
        
        let content = node.innerHTML;
        let span = document.createElement(node.nodeName);
        mama.appendChild(span);
        
        for(let i = 0; i < content.length; i++){
          if(content[i] == "," || content[i] == "."){
            await this.delay(100);
          }
          else{
            await this.delay();
          }
          span.innerHTML += content[i];
        }

        if(node.id == "google"){
          await this.delay(330)
          span.style.backgroundColor = "white";
          span.style.color = "black";
          await this.delay(300);
          mama.removeChild(span);
          mama.removeChild(mama.lastChild);
        }

        if(node.id == "skip"){
          span.addEventListener("click", () => this.keepTyping = false);
        }
      }

      else{
        await this.delay(250);
        mama.appendChild(node);
      }
    }
  }

  private delay(time?: number) {
    return new Promise((resolve, reject) => {
      if(this.keepTyping){
        setTimeout(resolve, this.getRandomTime(time));
      }
      else{
        resolve();
      }
    });
  }

  private getRandomTime(time?: number): number{
    return !time ? Math.random() * 32 + Math.random() * 32 : time;
  }

  @HostListener('document:keyup', ['$event'])
  onKey(event: KeyboardEvent){
    if(event.key == "Enter"){
      this.keepTyping = false;
    }
  }

    scrollToBottom(): void {

      if(this.afterAnimation){
        try {
            this.side.scrollTop = this.side.scrollHeight;
        } catch(err) { console.log(err) }                 
      }
  }

  waitTillAnimationDone(){
    setTimeout(() => this.afterAnimation = true, 1000);
  }
}

