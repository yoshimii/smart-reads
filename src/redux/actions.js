export const REGISTER = 'REGISTER';
export const LOGIN = 'LOG_IN';

export function register(user) {
    return { type: REGISTER, user }
}

export function login(user) {
    return { type: LOGIN, user }
}