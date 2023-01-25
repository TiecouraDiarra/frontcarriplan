import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MetiersService } from 'src/app/services/metiers/metiers.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-detailsmetiers',
  templateUrl: './detailsmetiers.page.html',
  styleUrls: ['./detailsmetiers.page.scss'],
})
export class DetailsmetiersPage implements OnInit {

  p:number=1;
  metier : any
  id:any

  constructor(public service : MetiersService, private route:ActivatedRoute, private router: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
    //RECUPERER L'ID DU METIER
    this.id=this.route.snapshot.params["id"]
    this.service.RetrouverParIdMetiers(this.id).subscribe(data=>{
      this.metier=data;
      console.log(data);
    })
  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }

  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
