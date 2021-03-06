import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  user: string;
  securityToken: string;

  constructor(private http: HttpClient) { }

  sendRegister(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post('http://todo-app-backend.afla.lv/api/user/register', registerRequest);
  }

  sendLogin(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post('http://todo-app-backend.afla.lv/api/user/login', registerRequest);
  }

  sendGetUserTodos(getUserTodosRequest: GetUserTodosRequest): Observable<any> {
    return this.http.post('http://todo-app-backend.afla.lv/api/todo/get-all', getUserTodosRequest);
  }

  sendCreateTodo(getUserTodosRequest: CreateTodoRequest): Observable<any> {
    return this.http.post('http://todo-app-backend.afla.lv/api/todo/create', getUserTodosRequest);
  }
}

class RegisterRequest {
  Username: string;
  Password: string;
}

class RegisterResponse {
  error: string;
  token: string;
}

class GetUserTodosRequest {
  Username: string;
  Token: string;
}

class GetUserTodosResponse {
  error: string;
  todos: string[];
}

class CreateTodoRequest {
  Username: string;
  Token: string;
  TodoText: string;
}
