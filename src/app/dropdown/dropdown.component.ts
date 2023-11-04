import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TuiHostedDropdownComponent} from "@taiga-ui/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements ICellRendererAngularComp {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;
  private params: any;

  readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

  open = false;

  constructor(private elementRef: ElementRef) {}


  onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }
}
