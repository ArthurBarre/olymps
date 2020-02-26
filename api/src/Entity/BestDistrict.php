<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BestDistrictRepository")
 */
class BestDistrict
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
    private $position;

    /**
     * @ORM\Column(type="integer")
     */
    private $count;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbrLocation;

    /**
     * @ORM\Column(type="integer")
     */
    private $moy;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $district;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

        return $this;
    }

    public function getNbrLocation(): ?int
    {
        return $this->nbrLocation;
    }

    public function setNbrLocation(int $nbrLocation): self
    {
        $this->nbrLocation = $nbrLocation;

        return $this;
    }

    public function getMoy(): ?int
    {
        return $this->moy;
    }

    public function setMoy(int $moy): self
    {
        $this->moy = $moy;

        return $this;
    }

    public function getDistrict(): ?string
    {
        return $this->district;
    }

    public function setDistrict(string $district): self
    {
        $this->district = $district;

        return $this;
    }
}
