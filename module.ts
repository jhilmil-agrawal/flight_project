import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http"
import {AjaxClass} from "./component"



@NgModule({
    imports:[BrowserModule,FormsModule,HttpClientModule],
    declarations:[AjaxClass],
    bootstrap:[AjaxClass]
})
export class moduleclass{

}
