import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  public async up () {
    this.schema.createTable('events', (table) => {
      table.increments('id')
      table.string('title')
      table.timestamp('start_time')
      table.timestamp('end_time')
      table.string('google_event_id')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable('events')
  }
}