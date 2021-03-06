import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Bootstrap4FrameworkModule } from '@oznu/ngx-bs4-jsonform';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { HrefTargetBlankDirective } from './directives/href-target-blank.directive';
import { LongClickDirective } from './directives/longclick.directive';
import { BackupRestoreComponent } from './backup-restore/backup-restore.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SchemaFormComponent } from './components/schema-form/schema-form.component';

@NgModule({
  entryComponents: [
    BackupRestoreComponent,
    ConfirmComponent,
  ],
  declarations: [
    SpinnerComponent,
    SchemaFormComponent,
    ConvertTempPipe,
    ReplacePipe,
    HrefTargetBlankDirective,
    LongClickDirective,
    BackupRestoreComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    Bootstrap4FrameworkModule,
  ],
  providers: [],
  exports: [
    SpinnerComponent,
    SchemaFormComponent,
    ConvertTempPipe,
    ReplacePipe,
    HrefTargetBlankDirective,
    LongClickDirective,
  ],
})
export class CoreModule { }
