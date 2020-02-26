<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HandiType
 *
 * @ORM\Table(name="handi_type")
 * @ORM\Entity
 */
class HandiType
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_handi", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idHandi;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;


}
