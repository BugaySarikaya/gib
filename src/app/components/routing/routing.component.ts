import { Component } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {

  constructor() {

    /*
      router: angular'dan gelen, sayfa yönlendirmemize olanak sağlayan bir obje

      route: router'a hangi url'e gidecegini söylüyor /user

      routes: route listesi

      routeroutlet: directive, <router-outlet> sayfa yönlendirmesinde htmlde ilgili
      componenti nereye koyacağını belirtir

      routerlink: directive, linklerimizi html elementine route şeklinde bağlıyor a elementindeki
      href gibi düşünebilir

      routerlinkactive: hangi link'im router'ım aktifse onu belirtir(örneğin mavi renk gösterebiliriz)

      activedroute: angular obje'si, mevcut route işlemlerimize, sayfa yönlendirmesindeki,
      propertyleri bize sunar

      routerstate: mevcut route state'imizi özelliklerini, bilgilerini paylaşır


      angular'da defaultta PathLocationStrategy, routing stratejisi bulunuyor.
      browser'da history API kullanarak sayfa yönlendirmelrimizi yapmamızı sağlıyor
      (history.push), seo (search engine optimization), server side rendering (SSR)

      HashLocationStrategy 
      https://localhost:4200/#/user
      
      
      Route Guards
      CanActivate (user login olmuşsa, local storage'da token varsa)

      CanDeActivate (route'tan ayrılabilir miyim, user form ekranı var,
      yeni bir kullanıcı ekliyorum, formda değişiklikler yaptım ve sayfadan kaydetmeden başka bir linke tıkladım)

      Resolve (yönlendirme yapılmadan, backend Apı'den bir kontrol)

      CanLoad (CanActivate ile aynı sadece modül bazında, modülü hiç kullanıcaya indirmez, yüklemez, göstermez)

      CanActivateChild (user route'ım var, child routelara erişimini kontrol eder
      user/:id UserFormComponent)
    */
  }
}
