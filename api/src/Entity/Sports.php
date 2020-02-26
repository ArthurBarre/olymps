<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sports
 *
 * @ORM\Table(name="sports")
 * @ORM\Entity
 */
class Sports
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_sport", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idSport;

    /**
     * @var int
     *
     * @ORM\Column(name="title", type="integer", nullable=false)
     */
    private $title;


}
