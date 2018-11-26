import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomStructure]'
})
export class CustomStructureDirective {

  @Input() set appCustomStructure(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
     } else{
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef
  ) {
  }

}
