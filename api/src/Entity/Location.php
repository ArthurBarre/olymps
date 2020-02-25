<?php

namespace App\Entity;

//use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\JoinColumn;


/**
 * Location
 *
 * @ORM\Table(name="location")
 * @ORM\Entity
 *
 */
class Location
{
    public function __construct()
    {
        $this->typesList = new ArrayCollection();
    }
        /**
     * @var int
     *
     * @ORM\Column(name="id_location", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idLocation;

    /**
     * @var string
     *
     * @ORM\Column(name="lat", type="string", length=255, nullable=false)
     */
    private $lat;

    /**
     * @var string
     *
     * @ORM\Column(name="lng", type="string", length=255, nullable=false)
     */
    private $lng;

    /**
     * @var string
     *
     * @ORM\Column(name="names", type="string", length=255, nullable=false)
     */
    private $names;

    /**
     * @var int
     *
     * @ORM\Column(name="types", type="integer", nullable=false)
     */
    private $types;

    /**
     * @var int
     *
     * @ORM\Column(name="district", type="integer", nullable=false)
     */
    private $district;

    public function getIdLocation(): ?int
    {
        return $this->idLocation;
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

    public function getNames(): ?string
    {
        return $this->names;
    }

    public function setNames(string $names): self
    {
        $this->names = $names;

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
//    /**
//     * @OneToMany(targetEntity="HandiType")
//     * @JoinTable(name="location_type",
//     *      joinColumns={@JoinColumn(name="id_location", referencedColumnName="id_location")},
//     *      inverseJoinColumns={@JoinColumn(name="id_handi", referencedColumnName="id_handi")}
//     * )
//     */
//    /**
//     * Many Categories have One Category.
//     * @OneToMany(targetEntity="HandiType", inversedBy="id_location")
//     * @JoinColumn(name="id_handi", referencedColumnName="id_handi")
//     */
//    /**
//     * One product has many features. This is the inverse side.
//     * @OneToMany(targetEntity="HandiType", mappedBy="id_location")
//     */
    /**
     * Many User have Many Phonenumbers.
     * @ManyToMany(targetEntity="HandiType")
     * @JoinTable(name="location_type",
     *      joinColumns={@JoinColumn(name="id_location", referencedColumnName="id_location")},
     *      inverseJoinColumns={@JoinColumn(name="id_handi", referencedColumnName="id_handi")}
     *      )
     */
    private $typesList;

    public function getTypesList() :Collection
    {
        return $this->typesList;
    }


}
