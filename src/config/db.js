const { Pool } = require("mysql")

module.exports = new Pool({
    user: 'root',
    password: "math3036",
    host: "localhost",
    port: 3306,
    database: "launchstoredb"
})