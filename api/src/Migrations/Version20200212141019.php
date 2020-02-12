<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200212141019 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE handy_type (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE location DROP FOREIGN KEY FK_5E9E89CBC3CB8C35');
        $this->addSql('DROP INDEX UNIQ_5E9E89CBC3CB8C35 ON location');
        $this->addSql('ALTER TABLE location ADD name VARCHAR(255) NOT NULL, DROP gym_id_id, CHANGE lat lat VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE handy_type');
        $this->addSql('ALTER TABLE location ADD gym_id_id INT NOT NULL, DROP name, CHANGE lat lat VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE location ADD CONSTRAINT FK_5E9E89CBC3CB8C35 FOREIGN KEY (gym_id_id) REFERENCES infrastructure (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5E9E89CBC3CB8C35 ON location (gym_id_id)');
    }
}
