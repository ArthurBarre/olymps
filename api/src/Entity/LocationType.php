<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LocationTypeRepository")
 */
class LocationType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_loc;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdLoc(): ?int
    {
        return $this->id_loc;
    }

    public function setIdLoc(int $id_loc): self
    {
        $this->id_loc = $id_loc;

        return $this;
    }

    public function getIdType(): ?int
    {
        return $this->id_type;
    }

    public function setIdType(int $id_type): self
    {
        $this->id_type = $id_type;

        return $this;
    }
}
