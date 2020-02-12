<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\LocationRepository")
 */
class Location
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lat;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lng;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Infrastructure", inversedBy="location_id", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $gym_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function setLat(?string $lat): self
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

    public function getGymId(): ?Infrastructure
    {
        return $this->gym_id;
    }

    public function setGymId(Infrastructure $gym_id): self
    {
        $this->gym_id = $gym_id;

        return $this;
    }
}
