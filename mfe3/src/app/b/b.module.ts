import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { endsWith } from "../router.utils";
import { BComponent } from "./b.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { matcher: endsWith(''), component: BComponent },
        ])
    ],
    declarations: [
      BComponent,
    ],
    providers: [],
    bootstrap: []
  })
  export class BModule {};