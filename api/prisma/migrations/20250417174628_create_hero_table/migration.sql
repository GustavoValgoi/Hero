-- CreateTable
CREATE TABLE `Hero` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(80) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `universe` VARCHAR(20) NOT NULL,
    `main_power` VARCHAR(20) NOT NULL,
    `avatar_url` VARCHAR(120) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
