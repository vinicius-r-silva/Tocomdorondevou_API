import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Unidades extends BaseSchema {
  protected tableName = 'unidades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cnes').primary()
      table.string('nome')
      table.string('telefone')
      table.string('tipo')
      table.string('endereco')
      table.double('latitude')
      table.double('longitude')

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
