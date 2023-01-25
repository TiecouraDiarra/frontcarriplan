import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService implements CanActivate{

  constructor(private storage : StorageService, private route:Router) { }

  canActivate(
    route:ActivatedRouteSnapshot, 
    state:RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean>{
      const user=this.storage.getUser();
      if(user.roles.includes('ROLE_ELEVE')){
        this.route.navigate(['/tabs/'])
        return true;
      }else{
        this.route.navigate(['/']);
        setInterval(()=>{
          location.reload();
        }, 1000);
        return false;
      }
    }
}
