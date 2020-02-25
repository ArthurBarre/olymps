<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\HandyType;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\LocationRepository")
 */
class Location
{
    public function __construct()
    {
       $this->typesList = new ArrayCollection();
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

    /**
     * @ORM\Column(type="integer")
     */
    private $types;

    /**
     * @ORM\Column(type="integer")
     */
    private $district;

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

    public function getTypes(): ?int
    {
        return $this->types;
    }

    public function setTypes(int $types): self
    {
        $this->types = $types;

        return $this;
    }

    public function getDistrict(): ?int
    {
        return $this->district;
    }

    public function setDistrict(int $district): self
    {
        $this->district = $district;

        return $this;
    }

    /**
     * @ManyToMany(targetEntity="HandyType")
     * @JoinTable(name="location_type",
     *      joinColumns={@JoinColumn(name="id_loc", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="id_type", referencedColumnName="id")}
     * )
     */
    private $typesList;

   public function getTypesList() :Collection
   {
       return $this->typesList;
   }

}
