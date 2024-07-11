import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'https://gpt.dil.in/api/query/stream-answer-with-quote';

  constructor(private http: HttpClient) { }

  sendMessage(message: string, responseType: string, model: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'Cookie': 'ajs_anonymous_id=72db9629-a396-41b8-b314-02fbe9c014f9; __gads=ID=63524e87b073da61-2203955507e3008a:T=1692869127:RT=1696918325:S=ALNI_MYkopxd8jzwBMnxmCFkVUGErSoLmw; __gpi=UID=00000c31ca86278a:T=1692869127:RT=1696918325:S=ALNI_MYqE0NY-FHBr4hVEaru26iIuO6AKw; access-token-Y6uWbqB8GgLJFKX75FeUrp4UOOWdlPvU2X4d2WNXiuo=qDuo0G6jxEYY5tqeBnUFhg; access-token-unsecure-Y6uWbqB8GgLJFKX75FeUrp4UOOWdlPvU2X4d2WNXiuo=qDuo0G6jxEYY5tqeBnUFhg; fastapiusersauth=tBrgPAwnE9Ku3-4btPU0CAEWVolLQlmARfu-MkuWbsw',
      'DNT': '1',
      'Origin': 'https://gpt.dil.in',
      'Referer': 'https://gpt.dil.in/search',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"'
    });

    const body = {
      messages: [
        {
          message: message,
          sender: null,
          role: 'user'
        }
      ],
      persona_id: 1,
      prompt_id: 4,
      retrieval_options: {
        run_search: 'always',
        real_time: true,
        filters: {
          source_type: null,
          document_set: null,
          time_cutoff: null,
          tags: []
        },
        enable_auto_detect_filters: false
      }
    };

    return this.http.post<any>(this.apiUrl, body, { headers: headers });
  }
}
