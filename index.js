const { Logger, LogLevel, ConsoleLogger } = require('./dist/index').default;

const logger = new Logger(LogLevel.debug);
logger.addLogger(new ConsoleLogger(LogLevel.debug));

logger.debug('Debug message');
logger.info('Info message');
logger.warning('Warning message');
logger.error('ERROR message');
