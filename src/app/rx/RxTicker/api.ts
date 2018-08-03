import { Rxios } from 'rxios/dist';
import { Observable } from 'rxjs';
import { ServerRates } from './types';

const http = new Rxios();
const url = 'https://poloniex.com/public?command=returnTicker';

export function getRates(): Observable<ServerRates> {
  return http.get<ServerRates>(url);
}
