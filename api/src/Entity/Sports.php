<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sports
 *
 * @ORM\Table(name="sports")
 * @ORM\Entity
 */
class Sports
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_sport", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idSport;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    public function getIdSport(): ?int
    {
        return $this->idSport;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }


}
