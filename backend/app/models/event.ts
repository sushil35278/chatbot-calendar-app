import { BaseModel, column } from '@adonisjs/lucid/orm'

export class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare start_time: Date

  @column()
  declare end_time: Date

  @column()
  declare google_event_id: string
}