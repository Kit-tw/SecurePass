-- CreateTable
CREATE TABLE "ManageItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "URL" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "OwnerId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ManageItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ManageItem" ADD CONSTRAINT "ManageItem_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
