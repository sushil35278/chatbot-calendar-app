/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import ChatbotsController from '../app/controllers/chatbots_controller.js'

router.post('/chatbot', [ChatbotsController, 'interact'])
