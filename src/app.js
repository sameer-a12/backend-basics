import express from "express"

const app = express()

// ... your middlewares (cors, cookieParser, etc.) ...

export { app } // This is the line you are likely missing!