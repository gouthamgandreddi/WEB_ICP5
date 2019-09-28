import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorICP';
  calInput: String ;
  calBuffer: Array<any> = [];


  num(val) {
    if (typeof (this.calInput) === 'undefined' || this.calInput === '0') {
      this.calInput = String(val);
    } else {
      this.calInput = this.calInput + String(val) ;
    }
  }

  operation(operator: String) {
    if (this.calBuffer.length === 0) {
      this.calBuffer.push(this.calInput);
      this.calBuffer.push(operator);
      this.calInput = undefined;
      console.log('cal buff length - ' + this.calBuffer.length);
      const buttonAct = document.getElementsByClassName('operator');
      console.log( 'button action length - ' + buttonAct.length);
      // const temp = document.getElementsByClassName("operator")[0].disabled = true;
      // @ts-ignore
      $('button.operator').attr('disabled', true);

      // const buttonAct = <HTMLInputElement>document.getElementById('operator');
      // buttonAct.disabled = true;

    }
  }

  result() {
    let finalResult = 0;
    if ( this.calBuffer.length === 2) {
      const operator = this.calBuffer.pop();
      const valueFirst = this.calBuffer.pop();
      switch (operator) {
        case 'add':  finalResult = Number(valueFirst) + Number(this.calInput);
          break;
        case 'sub':  finalResult = Number(valueFirst) - Number(this.calInput);
          break;
        case 'mul':  finalResult = Number(valueFirst) * Number(this.calInput);
          break;
        case 'mul':  finalResult = Number(valueFirst) / Number(this.calInput);
          break;
      }
      this.calInput = String(finalResult);
      // const buttonAct = <HTMLInputElement>document.getElementById('operator');
      // buttonAct.disabled = false;
      // @ts-ignore
      $('button.operator').attr('disabled', false);

    }
  }

  clear() {
    this.calInput = String('0') ;
  }
}
