<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * LocationType
 *
 * @ORM\Table(name="location_type")
 * @ORM\Entity
 */
class LocationType
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_relation", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idRelation;

    /**
     * @var string
     *
     * @ORM\Column(name="id_location", type="string", length=255, nullable=false)
     */
    private $idLocation;

    /**
     * @var string
     *
     * @ORM\Column(name="id_handi", type="string", length=255, nullable=false)
     */
    private $idHandi;

    public function getIdRelation(): ?int
    {
        return $this->idRelation;
    }

    public function getIdLocation(): ?string
    {
        return $this->idLocation;
    }

    public function setIdLocation(string $idLocation): self
    {
        $this->idLocation = $idLocation;

        return $this;
    }

    public function getIdHandi(): ?string
    {
        return $this->idHandi;
    }

    public function setIdHandi(string $idHandi): self
    {
        $this->idHandi = $idHandi;

        return $this;
    }


}
