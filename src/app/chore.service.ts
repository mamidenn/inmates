import { Injectable } from '@angular/core';
import { Chore } from './chore';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
      private choresUrl = 'api/chores';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getChore(id: number): Observable<Chore> {
    const url = `${this.choresUrl}/${id}`;
    return this.http.get<Chore>(url).pipe(
      tap(_ => this.log(`fetched chore id=${id}`)),
      catchError(this.handleError<Chore>(`getChore id = ${id}`))
    );
  }

  getChores(): Observable<Chore[]> {
    return this.http.get<Chore[]>(this.choresUrl).pipe(
      tap(_ => this.log('fetched chores')),
      catchError(this.handleError<Chore[]>('getChores', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`ChoreService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  updateChore(chore: Chore): Observable<any> {
    return this.http.put(this.choresUrl, chore, httpOptions).pipe(
      tap(_ => this.log(`updated chore id = ${chore.id}`)),
      catchError(this.handleError<any>('updateChore'))
    );
  }

  addChore(chore: Chore): any {
    return this.http.post<Chore>(this.choresUrl, chore, httpOptions).pipe(
      tap((newChore: Chore) => this.log(`added chore w/ id = ${newChore.id}`)),
      catchError(this.handleError<Chore>('addChore'))
    );
  }

  deleteChore(chore: Chore | number): Observable<Chore> {
    const id = typeof chore === 'number' ? chore : chore.id;
    const url = `${this.choresUrl}/${id}`;

    return this.http.delete<Chore>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted chore id = ${id}`)),
      catchError(this.handleError<any>('deleteChore'))
    );
  }

  searchChores(term: string): Observable<Chore[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Chore[]>(`${this.choresUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found chores matching "${term}"`)),
      catchError(this.handleError<Chore[]>('searchChores', []))
    );
  }
}
