import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTRO_KEY, StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
  }

  async goToConnexion() {
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/inscription', { replaceUrl: true });
  }

}
