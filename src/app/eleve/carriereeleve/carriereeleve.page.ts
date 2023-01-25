import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-carriereeleve',
  templateUrl: './carriereeleve.page.html',
  styleUrls: ['./carriereeleve.page.scss'],
})
export class CarriereelevePage implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
  }
  cat: string = "men"; // default button

  option={
    slidesPervView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }

  @ViewChild('popover') popover:any;

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
}
