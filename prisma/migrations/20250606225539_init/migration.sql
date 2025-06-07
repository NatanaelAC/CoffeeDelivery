-- CreateTable
CREATE TABLE "cafe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagCafe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cafeId" INTEGER NOT NULL,

    CONSTRAINT "TagCafe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TagCafe" ADD CONSTRAINT "TagCafe_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
