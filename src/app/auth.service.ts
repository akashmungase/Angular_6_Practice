import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from "sweetalert2";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer your-token').set('Content-Type', 'application/json')
        });

        return next.handle(clonedRequest).pipe(
            map((event: HttpEvent<any>) => {
                // Handle a successful response
                if (event instanceof HttpResponse) {
                    Swal("Success", "Request was successful!", "success");
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // Handle different error statuses
                let errorMessage = 'An unknown error occurred!';

                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // Server-side error
                    switch (error.status) {
                        case 400:
                            errorMessage = 'Bad Request: Invalid input provided.';
                            break;
                        case 401:
                            errorMessage = 'Unauthorized: Please log in first.';
                            break;
                        case 403:
                            errorMessage = 'Forbidden: You do not have permission to access this resource.';
                            break;
                        case 404:
                            errorMessage = 'Not Found: The requested resource was not found.';
                            break;
                        case 500:
                            errorMessage = 'Internal Server Error: Please try again later.';
                            break;
                        default:
                            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                            break;
                    }
                }

                // Show error message using Swal
                Swal("Error!", errorMessage, "error");

                return throwError(error);
            })
        );
    }
}