<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Events
 *
 * @ORM\Table(name="events")
 * @ORM\Entity
 */
class Events
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_event", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idEvent;

    /**
     * @var string
     *
     * @ORM\Column(name="year", type="string", length=255, nullable=false)
     */
    private $year;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=false)
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=255, nullable=false)
     */
    private $city;

    /**
     * @var int
     *
     * @ORM\Column(name="athletesNumber", type="integer", nullable=false)
     */
    private $athletesnumber;

    /**
     * @var int
     *
     * @ORM\Column(name="countryNumber", type="integer", nullable=false)
     */
    private $countrynumber;

    public function getIdEvent(): ?int
    {
        return $this->idEvent;
    }

    public function getYear(): ?string
    {
        return $this->year;
    }

    public function setYear(string $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getAthletesnumber(): ?int
    {
        return $this->athletesnumber;
    }

    public function setAthletesnumber(int $athletesnumber): self
    {
        $this->athletesnumber = $athletesnumber;

        return $this;
    }

    public function getCountrynumber(): ?int
    {
        return $this->countrynumber;
    }

    public function setCountrynumber(int $countrynumber): self
    {
        $this->countrynumber = $countrynumber;

        return $this;
    }

//    /**
//     * @ManyToMany(targetEntity="EventSport")
//     * @JoinTable(name="event-sport",
//     *      joinColumns={@JoinColumn(name="id_event", referencedColumnName="id_event")},
//     *      inverseJoinColumns={@JoinColumn(name="id_sport", referencedColumnName="id_sport")}
//     *      )
//     */
//    private $typesList;
//
//    public function getTypesList() :Collection
//    {
//        return $this->typesList;
//    }
}
