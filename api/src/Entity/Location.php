<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\HandyType;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\LocationRepository")
 */
class Location
{
    public function __construct()
    {
//        $this->types = new ArrayCollection();
    }
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
     * @ORM\Column(type="string", length=255)
     */
    private $name;

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

//    /**
//     * @ORM\ManyToMany(targetEntity=HandyType::class, cascade={"persist"})
//     */
//
//    private $types;
//
//    public function addTypes(Types $types)
//    {
//        $this->types[] = $types;
//
//        return $this;
//    }
//
//    public function removeTypes(Types $types)
//    {
//        $this->types->removeElement($types);
//    }
//
//    public function getTypes()
//    {
//        return $this->types;
//    }


}
