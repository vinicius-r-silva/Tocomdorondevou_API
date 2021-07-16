import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Unidade extends BaseModel {
  @column({ isPrimary: true })
  public cnes: number

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column()
  public nome: string

  @column()
  public telefone: string

  @column()
  public tipo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
