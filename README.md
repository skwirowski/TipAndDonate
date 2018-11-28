# TIP AND DONATION
## RECRUITMENT EXERCISE

### How to run application:
   - clone repository
   - run _npm install_ command in terminal
   - when all dependencies are installed run _npm start_ in terminal

### Exercise objectives:
#### Create ReactJS application meeting the assumptions:
   - interface divided into two sections: __MENU__ and __CONTENT__,
   - MENU section is static and shows tabs with any content,
   - CONTENT section shows each menu tab content,
   - content is fetched down from any publicly available API (e.g. http://jsonplaceholder.typicode.com/),
   - data of at least one content tab is presented in the table form,
   - data displayed in table should be divided into pages and it should be possible to choose the page,
   - amount of data elements displayed on the page should be changeable,
   - table data should use _sort_ and _filter_ functionalities,
   - amount of data elements displayed on the page should be saved and loaded from _localStorage_,
   - all API responses should be checked for HTTP errors, and if they occur proper statement should be displayed (error status and content).

Please, estimate time needed to accomplish this exercise.

### App description
   - application ReactJS set up using _create-react-app_ boilerplate,
   - for project purposes it is used free API [Random User Generator](https://randomuser.me/ "Random User Generator") generating random user data,
   - for layout and styling purposes it is used [Material UI](https://material-ui.com/ "Material UI library") library that implements _GOOGLE Material Design_ application designing system,
   - data table and it's required data operation functionalities are accomplished using [DevExterme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/ "DevExterme React Grid library") library that uses Material UI's themes and components,
   - app subpages are: __HOME__, __INFO__, __CONTACT__,
   - HOME and CONTACT subpages render user's pictures and data fetched from API,
   - INFO subpage contains API fetched data rendered in table form,
   - data table functionalities are: sorting, filtering and pagination,
   - data rows quantity rendered on a single table page can be changed by the user, user's choice is saved to browser's _localStorage_ and loaded when application is opened again,
   - app has proper components handling API data fetch operation error and incorrect subpage's URL address.

### Application operation has been tested on operating systems:
#### Ubuntu 18.04.1 LTS 64-bit:
      - Google Chrome version 70.0.3538.77 (Official Build) (64-bit),
      - Mozilla Firefox for Ubuntu version 63.0.3 (64-bit).
#### Windows 8.1 Pro 64-bit:
      - Google Chrome version 70.0.3538.110 (Official Build) (64-bit),
      - Mozilla Firefox version 63.0.3 (64-bit).

----

## ZADANIE REKRUTACYJNE

### Jak uruchomić aplikację:
   - sklonuj repozytorium
   - uruchom komendę _npm install_ w terminalu
   - kiedy już wszystkie zależności zostaną zainstalowane uruchom w terminalu komendę _npm start_

### Cele zadania:
#### Stwórz aplikację w ReactJS, która spełni następujące założenia:
- interfejs będzie podzielony na dwa widoki: __MENU__ i __CONTENT__,
- MENU pozostanie statyczne i będzie prezentowało zakładki do kilku dowolnych treści,
- CONTENT będzie prezentował zawartość poszczególnych zakładek,
- treść ładowana ma być z dowolnego ogólnie dostępnego api (np. http://jsonplaceholder.typicode.com/),
- przynajmniej jedna treść ma być zaprezentowana w postaci tabelki,
- treść w tabelce powinna być podzielona na strony i powinien być możliwy wybór strony,
- powinna być możliwość zmiany ilości elementów na stronie tabeli,
- treść w tabelce powinna mieć możliwość _sortowania_ i _filtrowania_,
- ilość elementów na stronie tabeli powinna być zapisywana i odczytywana z _localStorage_,
- wszystkie odpowiedzi API powinny być sprawdzone pod kątem błędów HTTP i jeśli takie wystąpią należy wyświetlić komunikat z jego statusem i treścią.

Prosilibyśmy o określenie realnego czas potrzebnego na wykonanie zadania.

### Opis aplikacji
   - aplikacja ReactJS utworzona przy użyciu _create-react-app_ boilerplate,
   - do wykonania projektu zastosowane zostało darmowe API [Random User Generator](https://randomuser.me/ "Random User Generator") generujące dane losowych użytkowników,
   - do utworzenia layout'u i stylizacji aplikacji została użyta biblioteka [Material UI](https://material-ui.com/ "Material UI library"), która implementuje system projektowania _GOOGLE Material Design_,
   - do utworzenia tabeli z danymi oraz jej wymaganych funkcjonalności operowania na danych została użyta biblioteka [DevExterme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/ "DevExterme React Grid library") korzystająca z motywów i komponentów Material UI,
   - podstrony aplikacji to: __HOME__, __INFO__, __CONTACT__,
   - podstrony HOME i CONTACT renderują zdjęcia oraz dane użytkowników pobrane z API,
   - podstrona INFO zawiera dane pobrane z API przedstawione w formie tabeli,
   - tabela z danymi posiada funkcjonalności: sortowania, filtrowania oraz paginacji,
   - ilość rzędów danych wyświetlanych na stronie tabeli może być wybrana przez użytkownika, jego wybór jest zapisywany w _localStorage_ przeglądarki i wczytany przy ponownym uruchomieniu aplikacji,
   - aplikacja posiada odpowiednie komponenty na wypadek błędu pobierania danych z API oraz błędnej podstrony w adresie URL.

### Działanie aplikacji zostało sprawdzone na systemach:
#### Ubuntu 18.04.1 LTS:
      - Google Chrome wersja 70.0.3538.77 (Oficjalna wersja) (64-bit),
      - Mozilla Firefox wersja 63.0.3 (64-bit).
#### Windows 8.1 Pro 64-bit:
      - Google Chrome wersja 70.0.3538.110 (Oficjalna wersja) (64-bit),
      - Mozilla Firefox wersja 63.0.3 (64-bit).