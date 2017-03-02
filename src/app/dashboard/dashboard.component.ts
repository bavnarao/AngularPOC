import {Component} from "@angular/core";
import {MaterialService} from "./material.service";
import {Material} from "./material";

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "./dashboardView.html",
    providers: [MaterialService]
})
export class DashboardComponent {
    materials: Material[];
    errorMessage: string;
    searchText: string = "";
    constructor(private service: MaterialService) {
        //this.materials = new Array<Material>();
    }
    

    getlist() {
        $('#home').hide();
        $('#menu2').show();
         $('#menu4').hide();
        $('#menu5').hide();
        $('#menu2').addClass("tab-pane fade in active");
        this.service.getMaterials().subscribe(
            data => this.materials = data,
            error =>  this.errorMessage = <any>error
        );


    }
    getimageData() {
        alert("Image clicked");
    }
    getdashboard(){
        $('#home').show();
        $('#menu2').show();
        $('#menu2').addClass("tab-pane fade in active");
        this.service.getMaterials().subscribe(
            data => this.materials = data,
            error =>  this.errorMessage = <any>error
        );
         $('#menu4').hide();
        $('#menu5').hide();
        $('#menu3').hide();
        $('#doc').show();
    }
    getdrive(){
        $('#home').hide();
        $('#menu3').show();
        $('#menu2').hide();
        $('#menu4').hide();
        $('#menu5').hide();
        $('#menu3').addClass("tab-pane fade in active");
}
    getflow(){
        $('#home').show();
        $('#doc').hide();
        $('#menu4').hide();
        $('#menu2').hide();
        $('#menu3').hide();
        $('#menu5').hide();
         $('#menu4').addClass("tab-pane fade in active");
}
    getview(){
         $('#home').hide();
        $('#menu5').show();
        $('#menu2').hide();
        $('#menu3').hide();
        $('#menu4').hide();
         $('#menu5').addClass("tab-pane fade in active");
   }
    
}