import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL_ERROR } from '@app/_core/constants/feedback-constants';
import { AuthService } from '@app/_core/services/auth.service';
import { NotificationService } from '@app/_core/services/notification.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  isLoading = false;

  form = this.formBuilder.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });


  private returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService

  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login(): void {
    if(this.form.invalid)
    {
      return;
    }
    this.isLoading = true;
    const formData = this.form.getRawValue();
    const data = {
      userName: formData.userName,
      password: formData.password
    };
    this.authService
      .login(data.userName, data.password)
      .pipe(finalize(()=> this.isLoading = false))
      .subscribe({
        next: (res) => {
          this.router.navigateByUrl(this.returnUrl);
        },
        error: () =>{
          this.notificationService.showError(GLOBAL_ERROR.userNotFound);
        }
      });
  }
}
