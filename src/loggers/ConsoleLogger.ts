import LogLevel from '../log-level';
import LoggerInterface from './LoggerInterface';

class ConsoleLogger extends LoggerInterface {
    constructor(minLogLevel: LogLevel) {
        super('Console', minLogLevel);
    }

    protected logAction(message: string, logLevel: LogLevel, data?: any): void {
        console.log(this.buildLogMessage(message, logLevel, data))
    }
}

export default ConsoleLogger;
