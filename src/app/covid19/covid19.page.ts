import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.page.html',
  styleUrls: ['./covid19.page.scss'],
})
export class Covid19Page implements OnInit {

  constructor(public afAuth: AngularFireAuth,public router: Router) { }

  ngOnInit() {
  }
  signOut() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }
}
