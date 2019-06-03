import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements  CanActivate {

  constructor(
    private router:Router
  ){}

  //canActivate
  canActivate(){
    if(localStorage.getItem("user")){
      return true;
    } 

    this.router.navigate(["home/form/dang-nhap"]);
    return false;
  }
  
}


// ng g guard name