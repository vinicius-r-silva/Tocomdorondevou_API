import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  public nsus: string

  @column()
  public nome: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public senha: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
