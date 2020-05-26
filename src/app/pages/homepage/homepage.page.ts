import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { LoginServiceService } from '../../services/authentication/login/login-service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    public authService: LoginServiceService
    ) { }

  ngOnInit() {
  }
}
