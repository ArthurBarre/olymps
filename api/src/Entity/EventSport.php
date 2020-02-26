<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * EventSport
 *
 * @ORM\Table(name="event-sport")
 * @ORM\Entity
 */
class EventSport
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_event_sport", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idEventSport;

    /**
     * @var int
     *
     * @ORM\Column(name="id_event", type="integer", nullable=false)
     */
    private $idEvent;

    /**
     * @var int
     *
     * @ORM\Column(name="id_sport", type="integer", nullable=false)
     */
    private $idSport;


}
