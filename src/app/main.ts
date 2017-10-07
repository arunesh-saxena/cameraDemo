import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { globalService } from '../services/globalService';

platformBrowserDynamic().bootstrapModule(AppModule, [globalService]);
 