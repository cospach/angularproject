import { Component } from '@angular/core';
import { Teams } from '../teams';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrl: './team-listing.component.css'
})
export class TeamListingComponent {
 
 
  greekTeams = Teams;
}
