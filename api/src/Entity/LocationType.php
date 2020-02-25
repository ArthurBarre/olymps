<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * LocationType
 *
 * @ORM\Table(name="location_type", indexes={@ORM\Index(name="id_handi", columns={"id_handi"}), @ORM\Index(name="id_location", columns={"id_location"})})
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
     * @var \Location
     *
     * @ORM\ManyToOne(targetEntity="Location")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_location", referencedColumnName="id_location")
     * })
     */
    private $idLocation;

    /**
     * @var \HandiType
     *
     * @ORM\ManyToOne(targetEntity="HandiType")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_handi", referencedColumnName="id_handi")
     * })
     */
    private $idHandi;

    public function getIdRelation(): ?int
    {
        return $this->idRelation;
    }

    public function getIdLocation(): ?Location
    {
        return $this->idLocation;
    }

    public function setIdLocation(?Location $idLocation): self
    {
        $this->idLocation = $idLocation;

        return $this;
    }

    public function getIdHandi(): ?HandiType
    {
        return $this->idHandi;
    }

    public function setIdHandi(?HandiType $idHandi): self
    {
        $this->idHandi = $idHandi;

        return $this;
    }


}
