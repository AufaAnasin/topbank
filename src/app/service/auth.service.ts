import { Injectable } from '@angular/core';

interface Mockuser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockuser: Mockuser[] = [{ username: 'aufa', password: 'aufa123456'}]

  isAuthenticate: boolean = false;

  login(username: string, password: string): boolean {
    const user = this.mockuser.find(item => item.username === username && item.password === password)
    if (user) {
      this.isAuthenticate = true;
      return true
    } else {
      this.isAuthenticate = true;
      return false
    }
  }
}
