import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hasVerifiedEmail = true;
  sentTimestamp;
  

  constructor(public afAuth: AngularFireAuth,public router: Router) {

    this.afAuth.authState.subscribe(async user => {
      if (user)
        // this.hasVerifiedEmail = (await this.afAuth.currentUser).emailVerified;
        this.router.navigate(['/tabs']);
    });
  }
  ngOnInit(): void {
    
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      location.reload();
    });
  }

  // async sendVerificationEmail() {
  //   (await this.afAuth.currentUser).sendEmailVerification();
  //   this.sentTimestamp = new Date();
  // }

  reload() {
    window.location.reload();
  }

}
