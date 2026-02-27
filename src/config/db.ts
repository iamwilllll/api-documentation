import colors from 'colors';

export class Database {
    static async connect() {
        console.log(colors.bold.green('Connecting to database...'));
    }

    static async disconnect() {
        console.log(colors.bold.red('Disconnecting from database...'));
    }
}
