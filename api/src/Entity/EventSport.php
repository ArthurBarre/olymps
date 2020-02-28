<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * EventSport
 *
 * @ORM\Table(name="event_sport")
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

    public function getIdEventSport(): ?int
    {
        return $this->idEventSport;
    }

    public function getIdEvent(): ?int
    {
        return $this->idEvent;
    }

    public function setIdEvent(int $idEvent): self
    {
        $this->idEvent = $idEvent;

        return $this;
    }

    public function getIdSport(): ?int
    {
        return $this->idSport;
    }

    public function setIdSport(int $idSport): self
    {
        $this->idSport = $idSport;

        return $this;
    }


}
