export class AppService {

    public async registerUser(user: any) {
        const response = await fetch('/api/authaccount/registration', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({user})
        });
        return await response.json();
    }
}