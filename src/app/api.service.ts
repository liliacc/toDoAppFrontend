import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  user: string;
  securityToken: string;

  constructor(private http: HttpClient) { }

  sendRegister(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post('http://ec2-34-249-204-237.eu-west-1.compute.amazonaws.com:5001/api/user/register', registerRequest);
  }

  sendLogin(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post('http://ec2-34-249-204-237.eu-west-1.compute.amazonaws.com:5001/api/user/login', registerRequest);
  }

  sendGetUserTodos(getUserTodosRequest: GetUserTodosRequest): Observable<any> {
    return this.http.post('http://ec2-34-249-204-237.eu-west-1.compute.amazonaws.com:5001/api/todo/get-all', getUserTodosRequest);
  }

  sendCreateTodo(getUserTodosRequest: CreateTodoRequest): Observable<any> {
    return this.http.post('http://ec2-34-249-204-237.eu-west-1.compute.amazonaws.com:5001/api/todo/create', getUserTodosRequest);
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
