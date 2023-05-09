import LogLevel from '../log-level';

abstract class LoggerInterface {
    constructor(
        protected name: string,
        protected minLogLevel: LogLevel,
    ) {

    }

    protected enabledFor(logLevel: LogLevel): boolean {
        return this.minLogLevel <= logLevel;
    }

    protected buildLogMessage(message: string, logLevel: LogLevel, data?: any): string {
        let logMessage = `${this.name}: ${new Date().toISOString()} [${LogLevel[logLevel]}] ${message}`;
        if (data) {
            logMessage += ` ${JSON.stringify(data)}`;
        }

        return logMessage;
    }

    protected abstract logAction(message: string, logLevel: LogLevel, data?: any): void;

    log(message: string, logLevel: LogLevel, data?: any): void {
        if (!this.enabledFor(logLevel)) {
            return;
        }

        this.logAction(message, logLevel, data);
    }
}

export default LoggerInterface;
