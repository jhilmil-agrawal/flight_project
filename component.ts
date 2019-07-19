import {Component} from "@angular/core"
import {HttpClient} from "@angular/common/http"
@Component({
    selector:'app-root',
    templateUrl:'index.html'
})
export class AjaxClass{
    flightdata:any;
    flightdata2:any;
    dataforfilter=[]
    count:number=0;
alldata:any;
    constructor(private http:HttpClient){
//    this.http.get("http://localhost:9090/display").subscribe(e=>this.flightdata=e);
}
ngOnInit(){
    this.callApi();   

}
callApi(){
    this.http.get("http://localhost:9090/display2").subscribe(e=>this.loaddata(e));

}
loaddata=function(e){
this.dataforfilter=e;
this.alldata=e;
this.count=this.dataforfilter.length;

}
// fetchBydepcode=function(e){

//    this.callApi();  
//    if(e!=null ||e!="")
//    {
//    this.dataforfilter = this.filterBydepcodecheck(e);
//    this.count=this.dataforfilter.length;
// }
// }

filterBydepcodecheck(depcode) {
    console.log(depcode);
    return this.dataforfilter.filter(object => {
		return object['depcode'] == depcode;
	});
}





fetchBycode=function(d,a){


    if(d!=null)
    {
console.log("in d "+d+" "+a)
    this.dataforfilter = this.filterBydepcodecheck(d);
    this.count=this.dataforfilter.length;
    }
 
    if(a!=null)
    {
        console.log("in a "+d+" "+a)
        
    this.dataforfilter = this.fetchByarrcodecheck(a);
    this.count=this.dataforfilter.length;

    
}
if(a==null && d==null)
{
    this.dataforfilter=this.alldata;
}

 }
 
 fetchByarrcodecheck(depcode) {

    return this.dataforfilter.filter(object => {
         return object['arrcode'] == depcode;
     });
 }
 


}
