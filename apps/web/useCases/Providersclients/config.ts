const token = localStorage.getItem('__Varuna_Token');
export const WS_URL = `ws://localhost:8080?token=${token}`;