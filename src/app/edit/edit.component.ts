import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileService } from "../services/profile.service";
import { UserProfile } from "../interfaces/user-profile";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  user: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  // submitProfile(form:NgForm) {
  //   this.profileService.setUserProfile(form.value);
  //   form.reset();
  // }

  onSubmit() {
    this.profileService.setUserProfile(this.user);
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }
}
