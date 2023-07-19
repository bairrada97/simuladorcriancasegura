import { decimal, int, mysqlEnum, mysqlTable, serial, text, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';


export const product = mysqlTable('products', {
    id: serial('id').primaryKey(),
    model: varchar('model', { length: 255 }).notNull(),
    brand: varchar('brand', { length: 255 }).notNull(),
    image: varchar('image', { length: 255 }).notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    group: mysqlEnum('group', ['group 0', 'group 0+', 'group 1', 'group 2', 'group 3']).notNull(),
    security_rules: mysqlEnum('security_rules', ['Norma R44/04', 'Norma R129']).notNull(),
    fixation_system: mysqlEnum('fixation_system', ['Isofix', 'Cintos']).notNull(),
    details: varchar('details', { length: 255 }).notNull(),
    adac_point: int('adac_point').notNull(),
    adac_security_point: int('adac_security_point').notNull(),
    plus_test: mysqlEnum('plus_test', ['yes', 'no']).notNull(),
    description: text('description').notNull(),
    url: varchar('url', { length: 255 }).notNull(),
  });



  export type ProductType = InferModel<typeof product>; // return type when queried