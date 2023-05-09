const { Logger, LogLevel, ConsoleLogger } = require('./dist/index').default;

const logger = new Logger();
logger.addLogger(new ConsoleLogger(LogLevel.debug));

logger.debug('Debug message');
logger.info('Info message');
logger.warning('Warning message');
logger.error('ERROR message');
