import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ListFormComponent } from './list-form/list-form.component';
import { RegisterLoginComponentComponent } from './register-login-component/register-login-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './nav/nav.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { AdminGuideComponent } from './admin-guide/admin-guide.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'register-login', pathMatch: 'full' },
  { path: 'register-login', component: RegisterLoginComponentComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'user-guide', component: UserGuideComponent },
  { path: 'admin-guide', component: AdminGuideComponent},
  { path: 'listView', component: ListViewComponent },
  { path: 'log-out', component: LogoutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ListFormComponent,
    RegisterLoginComponentComponent,
    TodoComponent,
    NavComponent,
    UserGuideComponent,
    AdminGuideComponent,
    ListViewComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
