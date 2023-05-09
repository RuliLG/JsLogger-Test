import LogLevel from './log-level';
import LoggerInterface from './loggers/LoggerInterface';

class Logger {
    constructor(
        private logLevel: LogLevel,
        private loggers: LoggerInterface[] = [],
    ) {

    }

    addLogger(logger: LoggerInterface) {
        this.loggers.push(logger);
    }

    debug(message: string, data?: any) {
        this.log(message, LogLevel.debug, data);
    }

    info(message: string, data?: any) {
        this.log(message, LogLevel.info, data);
    }

    warning(message: string, data?: any) {
        this.log(message, LogLevel.warning, data);
    }

    error(message: string, data?: any) {
        this.log(message, LogLevel.error, data);
    }

    private log(message: string, logLevel: LogLevel, data?: any) {
        if (this.logLevel > logLevel) {
            return;
        }

        for (const logger of this.loggers) {
            logger.log(message, logLevel, data);
        }
    }
}

export default Logger;
