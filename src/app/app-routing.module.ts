import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'category', component: BlogCategoryComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }