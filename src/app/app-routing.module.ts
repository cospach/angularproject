import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";




const appRoutes: Routes =[ 

    {path:'', component: HomeComponent}, 
    
    {path:'Users', component: UsersComponent, children:[
      {path:':id/:name', component: UserComponent}
    
    ]}, 
    
    {path:'Servers', component: ServersComponent, children:[
      {path:':id', component: ServerComponent},
      {path:':id/:edit', component: EditServerComponent}
    ]},
    
  {path:'not-found', component:PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
  ];






@NgModule({
    imports:[

        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
    
    
})

export class AppRoutingModule{

}