import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoevaluationService } from 'src/app/services/autoevaluation/autoevaluation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-carriereeleve',
  templateUrl: './carriereeleve.page.html',
  styleUrls: ['./carriereeleve.page.scss'],
})
export class CarriereelevePage implements OnInit {

  constructor(private auService: AutoevaluationService, private authService: AuthService, private storageService: StorageService, private route: Router) { }

  User: any
  auto: any

  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  ngOnInit() {
    this.User = this.storageService.getUser()
    console.log(this.User)
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      this.auto = data;
      this.incrementCounter();
      console.log(this.auto)
    })
  }

  ionViewWillEnter() {
    this.User = this.storageService.getUser()
    this.auService.AfficherLaListeAutoUser(this.User.id).subscribe(data => {
      this.auto = data;
      this.incrementCounter();
      console.log(this.auto)
    })
  }

  option = {
    slidesPervView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

  @ViewChild('popover') popover: any;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
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

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS AUTO
  goToDettailAuto(id: number) {
    console.log(id);
    return this.route.navigate(['tabs/detailsautoevaluationeleve', id])
  }
}
