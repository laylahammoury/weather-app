import { Directive, HostListener, EventEmitter, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  // @Output() onScroll = new EventEmitter<number>();
  height = 50;
  // @Input() col;
  percentValue  = 0;
  constructor( private el:ElementRef ) {
    this.el.nativeElement.style.height = this.height+"px";
  }
  
  @HostListener("scroll", ["$event.target"])
  public onScroll(targetElement){
    this.el.nativeElement.style.height = this.height+"px";
    console.log("test scroll")
  }
    // onListenerTriggered(event: UIEvent): void {

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
  //   onScroll = (e:Event):void=> {
  //     let target:HTMLElement = e.target;
  //     if (this.scrollBelow && target.scrollTop > this.scrollThreshold) {
  //         this.scrollFixed = true;
  //     } else if (!this.scrollBelow && target.scrollTop < this.scrollThreshold) {
  //         this.scrollFixed = true;
  //     } else {
  //         this.scrollFixed = false;
  //     }
  // };

}
