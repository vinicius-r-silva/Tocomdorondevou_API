import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'pacientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('nsus',15).primary()
      table.string('email')
      table.string('senha')
      table.string('nome')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
