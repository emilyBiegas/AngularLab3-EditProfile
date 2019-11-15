import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileService } from "../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  // onUpdate() {
  //   this.router.navigate(["edit"]);
  // }

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }
}
