-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "productId" TEXT,
    "orderId" INTEGER,
    CONSTRAINT "order_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "order_products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_order_products" ("amount", "id", "orderId", "productId") SELECT "amount", "id", "orderId", "productId" FROM "order_products";
DROP TABLE "order_products";
ALTER TABLE "new_order_products" RENAME TO "order_products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
