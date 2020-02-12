<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\InfrastructureRepository")
 */
class Infrastructure
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lat;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lng;

    /**
     * @ORM\Column(type="integer")
     */
    private $types;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Location", mappedBy="gym_id", cascade={"persist", "remove"})
     */
    private $location_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function setLat(string $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?string
    {
        return $this->lng;
    }

    public function setLng(string $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    public function getTypes(): ?int
    {
        return $this->types;
    }

    public function setTypes(int $types): self
    {
        $this->types = $types;

        return $this;
    }

    public function getLocationId(): ?Location
    {
        return $this->location_id;
    }

    public function setLocationId(Location $location_id): self
    {
        $this->location_id = $location_id;

        // set the owning side of the relation if necessary
        if ($location_id->getGymId() !== $this) {
            $location_id->setGymId($this);
        }

        return $this;
    }
}
