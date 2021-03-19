# A Project feladat leírása

## Bevezetés
> A feladat egy ionic alapú alkalmazás létrehozása, amely a 
tinder -hez hasonló alap funkcionalitással rendelkezik. Az 
ionic egy olyan keretrendszer, amely lehetővé teszi, hogy 
web alapú technológiák segítségével fejlesszünk mobil 
alkalmazásokat.

## Első lépések
- [Bevezető Példa](https://ionicframework.com/docs/angular/your-first-app)
- Készítsd el a következő bevezető alkalmazást. Ez  tartalmaz 
minden alapvető dolgot, amely kell majd az alkalmazás 
elkészítéséhez.

## Az alkalmazás képességei
- Kártyákon megjeleníti a felhasználók képét és alapvető adatait.
- Ezeket a kártyákat lehet scroll -ozni és jelölni vagy 
elutasítani őket.
- Lehet listázni külön a már megjelölt felhasználókat.

## Technikai leírás
### Osztályok
- Location(id, zip, city, address)
- Interest(id, name, description)
- User(id, name, gender, age, photo, description, location:Location, interests:Interest[])
- Connection(id, user1:User.id, user2:User.id, accepted:boolean)

### Szolgáltatások
- LocationService
- InterestService
- UserService
- ConnectionService
- Minden szolgáltatás képes az alapvető CRUD műveleteket ellátni. - A ConnectionService képes visszaadni egy felhasználóhoz tartozó kapcsolatokat is.
- Minden adat a szerverről kerül betöltésre, azaz semmi sem lehet 
fixen létrehozva a szervizekben.
- Az adatokat json-server szolgálja ki egy megadott .json fájl 
alapján.

### Tabok
- Az alkalmazás tab alapú, három nézete van.
- A tabok között az alsó sávon lehet váltani.
- __Home:__ ezen az oldalon azoknak a felhasználóknak a listája látható kártya formátumban, akiket még nem utasítottak el.
- __Connections:__ ezen az oldalon szintén kártya formátumban 
azok láthatóak akik visszaigazolták a jelölést. Itt vissza is 
lehet vonni a jelölést és megszüntetni a kapcsolatot.
- __Profile:__ ez egy szerkesztő oldal, ahol a felhasználó a 
saját adatait szerkesztheti.

### Komponensek részletei
- __ProfileCard__: ez jeleníti meg az egyes felhasználók képét és 
adatait, a bejövő paraméterek alapján. Felül egy nagy kép látható, 
alatta pedig a név nagyban és középen, alatta pedig az egyéb 
adatok.
- __HomeComponent__: a fejlécben található gombbal át lehet váltani olyan nézetre, ahol minden felhasználó látszik, de alapból csak azok láthatóak, akiket megjelöltek. Van egy szűrő is, ahol a 
a beírt szöveg alapján az alkalmazás a felhasználó bármely adata 
alapján tud keresni, nem kell megadni a szűréshez a kulcsot.  
- __ConnectionsComponent:__ a home -hoz hasonló, de itt csak azok 
láthatóak, akik visszaigazolták a jelölést. Minden kártyán 
található egy gomb, amivel a kapcsolat visszavonható. Ha valaki 
bejelöli az aktuális felhasználót, akkor az itt a többi kártya 
felett jelenjen meg, és el lehessen fogadni vagy elutasítani a 
jelölést.
- __ProfileComponent:__ egy mobil nézetre optimalizált űrlap 
található az oldalon, ahol a felhasználó a saját adatait tudja 
szerkeszteni. Minden adat kötelező és mindet validálni is kell 
értelemszerűen a típusa alapján. Helytelen adatok esetén 
jelenjen meg hibaüzenet és ne lehessen elküldeni az adatokat 
mentésre.

## Extrák
- A felhasználó tudjon magáról egy fotót készíteni és ezt mentse 
el az alkalmazás, ezzel dolgozzon.
- Ne csak gombbal működjön a jelölés, hanem a kártya jobbra vagy 
balra húzásával is.
- Amikor megnyitják az alkalmazást, az végezzen egy keresést a 
felhasználók között, és automatikusan ajánljon fel kapcsolatokat 
egyezések alapján. (Példa: ha férfi a felhasználó, akkor keressen 
olyan hölgyeket, akik azonos városban laknak, az érdeklődési 
körök között van legalább kettő egyezés és plusz - minusz négy 
év a korkülönbség.)
- Az adatbázishoz ne json-server -t használj, hanem a Firebase -t. 
Működő minták:  
> [Firebase összekötése Anglar -al](https://github.com/angular/angularfire)  
> [Firebase alapú app](https://github.com/Training360/angular-firebase)
> [Működő Crud](https://github.com/Training360/angular-firebase/blob/main/src/app/service/user.service.ts)
