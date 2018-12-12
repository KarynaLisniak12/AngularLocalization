import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ClientApp';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
