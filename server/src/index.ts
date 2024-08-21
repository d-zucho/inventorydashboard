import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
//  ROUTE IMPORTS
import dashboardRoutes from './routes/dashboardRoutes'

// CONFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('comman'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
// this sets up the route for the dashboard
// dashboardRoutes is the router that was exported from the dashboardRoutes.ts file
// app.use is used to set up the route
// vs. app.get is used to set up a route that only accepts GET requests
app.use('/dashboard', dashboardRoutes)

// SERVER
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
