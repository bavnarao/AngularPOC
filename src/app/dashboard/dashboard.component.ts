/// <reference path="../jquery.d.ts"/>

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
    ngOnInit() {
        this.service.getMaterials().subscribe(
            data => this.materials = data,
            error => this.errorMessage = <any>error
        );
        $("#imagesList").show();
        $("#jobsTable").show();
        $("#recentDocTitle").show();
    }


    getlist() {
        this.service.getMaterials().subscribe(
            data => this.materials = data,
            error => this.errorMessage = <any>error
        );
      
       document.getElementById("contentTitle").innerHTML = "Job List";
        $('#menu4').hide();
        $('#menu5').hide();
        $("#imagesList").hide();
        $("#jobsTable").show();
        $('a').removeClass('selected');
        $("#joblst").addClass("framework-nav-item selected");
        $("#recentDocTitle").hide();


    }
    getimageData(evt:any) {
        evt=event.currentTarget;
        let abc= evt.offsetParent.innerText;
        alert(abc);
    }
    getdashboard() {
        /**$('#home').show();
        $('#menu2').show();
        $('#menu2').addClass("tab-pane fade in active");*/
        document.getElementById("contentTitle").innerHTML = "My Dashboard";
        this.service.getMaterials().subscribe(
            data => this.materials = data,
            error => this.errorMessage = <any>error
        );
        $("#imagesList").show();
        $("#jobsTable").show();
        $("NAV > a").addClass("framework-nav-item");
        $('a').removeClass('selected');
        $("#dashboard").addClass("framework-nav-item selected");
       $('#menu4').hide();
       $('#menu5').hide();
       $('#menu3').hide();
       $("#recentDocTitle").show();
       
    }
    getdrive() {
        /** $('#home').hide();
         $('#menu3').show();
         $('#menu2').hide();
         $('#menu4').hide();
         $('#menu5').hide();*/
         document.getElementById("contentTitle").innerHTML = "Seismic Drive";
         $("#imagesList").hide();
        $("#jobsTable").hide();
         $('#menu4').hide();
         $('#menu5').hide();
         $('#menu3').show();
         $('#menu3').addClass("tab-pane fade in active");
        $('a').removeClass('selected');
        $("#seismicDrive").addClass("framework-nav-item selected");
        $("#recentDocTitle").hide();
    }
    getflow() {
        document.getElementById("contentTitle").innerHTML = "Flow Designer";
        $('a').removeClass('selected');
        $("#flowDesign").addClass("framework-nav-item selected");
        $("#imagesList").show();
        $("#jobsTable").hide();
        $('#menu4').hide();
         $('#menu3').hide();
         $('#menu5').hide();
         $("#recentDocTitle").show();
         $("#recentDocTitle").val("My Documents");
       
    }
    getview() {
        
        $('a').removeClass('selected');
        $("#viewer").addClass("framework-nav-item selected");
        $("#imagesList").hide();
        $('#menu5').show();
       $("#jobsTable").hide();
        $('#menu3').hide();
        $('#menu4').hide();
         $('#menu5').addClass("tab-pane fade in active");
         document.getElementById("contentTitle").innerHTML = "Viewer";
         $("#recentDocTitle").hide();
         
    }

}