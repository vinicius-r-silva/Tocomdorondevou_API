import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Gestors extends BaseSchema {
  protected tableName = 'gestores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cpf',11).primary()
      table.string('email').notNullable()
      table.string('nome').notNullable()

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
