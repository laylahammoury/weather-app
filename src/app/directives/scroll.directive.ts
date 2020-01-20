import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
 
  constructor( private el:ElementRef ) {
    
  }
  height = 50;
  lastScrollTop = 0;
  window;

  @HostListener('window:scroll') onScroll(){
    console.log("scroll test")
      let header = this.el.nativeElement.children[0].children[0];
      
      
      let st =  document.documentElement.scrollTop; 
      if (st > this.lastScrollTop){
          console.log("scroll down")
        header.style.height ="20px" 
        header.style. transition=" height 300ms ease"; 
      } else {
        console.log("scroll up")
        header.style.height ="50px" 
        header.style. transition=" height 300ms ease"; 
        // header.style.padding = ""
          
      }
      this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}
  
  @HostListener('click') onClick(){
      console.log("click test")
  }
  // @HostListener("scroll", ["$event.target"])
  //       public onScroll(targetElement){
  //         this.el.nativeElement.style.height = this.height+"px";
  //         console.log("test scroll")
  //       }
    //  onListenerTriggered(targetElement): void {

    //     // Calculate the scroll percentage
    //     const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);

    //     // Compare the new with old and only raise the event if values change
    //     if(this.percentValue !== percent){
          
    //       // Update the percent value
    //       this.percentValue = percent;

    //       // Emit the event
    //       this.onScroll.emit(percent);
    //     }
    // }
}
