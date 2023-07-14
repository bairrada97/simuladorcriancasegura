import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, varchar, decimal, mysqlEnum, int, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const products = mysqlTable("products", {
	id: serial("id").primaryKey().notNull(),
	model: varchar("model", { length: 255 }).notNull(),
	brand: varchar("brand", { length: 255 }).notNull(),
	image: varchar("image", { length: 255 }).notNull(),
	price: decimal("price", { precision: 10, scale: 2 }).notNull(),
	group: mysqlEnum("group", ['group 0','group 0+','group 1','group 2','group 3']).notNull(),
	securityRules: mysqlEnum("security_rules", ['Norma R44/04','Norma R129']).notNull(),
	fixationSystem: mysqlEnum("fixation_system", ['Isofix','Cintos']).notNull(),
	details: varchar("details", { length: 255 }).notNull(),
	adacPoint: int("adac_point").notNull(),
	adacSecurityPoint: int("adac_security_point").notNull(),
	plusTest: mysqlEnum("plus_test", ['yes','no']).notNull(),
	description: text("description").notNull(),
	url: varchar("url", { length: 255 }).notNull(),
});