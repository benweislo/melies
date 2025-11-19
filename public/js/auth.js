import { dataManager } from './data.js';

export class AuthManager {
    constructor() {
        this.currentUser = null;
        this.checkSession();
    }

    checkSession() {
        const storedUser = localStorage.getItem('melies_current_user');
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser);
        }
    }

    login(username, password) {
        const user = dataManager.findUser(username, password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('melies_current_user', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: 'Identifiants invalides' };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('melies_current_user');
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}

export const authManager = new AuthManager();
