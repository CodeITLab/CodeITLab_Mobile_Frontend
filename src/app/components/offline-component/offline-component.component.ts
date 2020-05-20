import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-component',
  templateUrl: './offline-component.component.html',
  styleUrls: ['./offline-component.component.scss'],
})
export class OfflineComponentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

}
