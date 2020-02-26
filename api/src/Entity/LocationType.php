<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * LocationType
 *
 * @ORM\Table(name="location_type")
 * @ORM\Entity
 */
class LocationType
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_relation", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idRelation;

    /**
     * @var string
     *
     * @ORM\Column(name="id_location", type="string", length=255, nullable=false)
     */
    private $idLocation;

    /**
     * @var string
     *
     * @ORM\Column(name="id_handi", type="string", length=255, nullable=false)
     */
    private $idHandi;


}
