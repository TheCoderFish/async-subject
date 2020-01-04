console.clear();
import { AsyncSubject } from 'rxjs'; 


const goodBye = new AsyncSubject();

const sub1 = goodBye.subscribe(console.log);

goodBye.next('Hi');
goodBye.next('This wont be emitted as the subject is still active');
goodBye.next('Complete the subject to send the last emitted message');
goodBye.next('Bye, This is my last message');

goodBye.complete();