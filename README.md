# NG Store

A simple store built with Angular signals. The state information can be stored in `Store` and entities can be stored in `EntityStore`.
The `Store` and `EntityStore` are built with Angular signals

## Installation
Install the library
```shell
npm install @js-smart/ng-store
```

## Usage
### Store
To use the Store, create store service and provide correct type. This brings `update` method from Store and data can be updated using this method

**login-store.service.ts**
```typescript
import { Store } from '@js-smart/ng-store';
import { Injectable } from '@angular/core';

export interface LoginState {
  isLoggedIn: boolean;
  userName: string;
}

@Injectable({
	providedIn: 'root',
})
export class LoginStore extends Store<LoginState> {
	constructor() {
		super();
	}
}
```
**login.component.ts**
And inject the store in the component and use `update` method to update the state and `data` property to get the state
```typescript
import { LoginStore } from './login-store.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginStore = inject(LoginStore);
  loginState = this.loginStore.data;

  login() {
    this.loginStore.update({ isLoggedIn: true, userName: 'John Doe' });
  }

  logout() {
    this.loginStore.update({ isLoggedIn: false, userName: '' });
  }
}
```

### Entity Store
To use the Entity Store, create store service and provide correct type. This brings `findById`, `set`, `upsert`,`upsertMulti` and `remove` methods from Entity Store and data can be updated using these methods

**employee-store.service.ts**
```typescript
import { Store } from '@js-smart/ng-store';
import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeStore extends EntityStore<Employee> {
  constructor() {
    super();
  }
}
```
**employee.component.ts**
And inject the store in the component and use `set` method to update the state and `data` property to get the state
```typescript
import { LoginStore } from './login-store.service';
import { Component, inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  employeeService = inject(EmployeeService);
  employeeStore = inject(EmployeeStore);

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employeeStore.set(employees);
    });
  }
}
```

## Demo
1. Run `npm run start` to start the demo project
2. Open `http://localhost:4300` in your browser

## Running unit tests
Run `ng test` to execute the unit tests
