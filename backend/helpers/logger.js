const { transports, createLogger, format } = require("winston");
const { prettyPrint, combine, timestamp } = format;
require("winston-mongodb");
const dotenv = require("dotenv");
dotenv.config();
const MONGOOSE_URI = (process.env.MONGOOSE_URI);


const logger = createLogger({
    level: "debug",
    format: combine(
        timestamp({
            format: "MMM-DD-YYYY HH:mm:ss"
        }),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "logs.log" }),
        new transports.MongoDB({
            level : "error",
            db: `${MONGOOSE_URI}`,
            collection : "errorlogs",
            options : {useUnifiedTopology : true}
        })
    ]
})

module.exports = logger;