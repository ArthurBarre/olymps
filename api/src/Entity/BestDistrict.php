<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BestDistrict
 *
 * @ORM\Table(name="best_district")
 * @ORM\Entity
 */
class BestDistrict
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_district", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idDistrict;

    /**
     * @var int
     *
     * @ORM\Column(name="position", type="integer", nullable=false)
     */
    private $position;

    /**
     * @var int
     *
     * @ORM\Column(name="count", type="integer", nullable=false)
     */
    private $count;

    /**
     * @var int
     *
     * @ORM\Column(name="nbr_location", type="integer", nullable=false)
     */
    private $nbrLocation;

    /**
     * @var int
     *
     * @ORM\Column(name="moy", type="integer", nullable=false)
     */
    private $moy;

    /**
     * @var string
     *
     * @ORM\Column(name="district", type="string", length=255, nullable=false)
     */
    private $district;

    public function getIdDistrict(): ?int
    {
        return $this->idDistrict;
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
