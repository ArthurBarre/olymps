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
