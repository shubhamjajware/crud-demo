import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'



    @NgModule({
        exports: [
            // CDK
            A11yModule,
            BidiModule,
            ObserversModule,
            OverlayModule,
            PlatformModule,
            PortalModule,
            CdkStepperModule,
            CdkTableModule,
            CdkTreeModule,
            DragDropModule,
            // Material
            MatButtonModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatCardModule,
            MatInputModule,
        ]
    })


export class MaterialCustomModule { }