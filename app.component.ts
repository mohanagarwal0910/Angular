import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserInputName';
    imgUrl="https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75";
  url="https:/www.bridgelabz.com";
  userName: string="";
  ngOnInit(): void {
    this.title= "Hello from BridgeLabz";
  }
  onClick($event:any){
    console.log("Save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
  }
  

